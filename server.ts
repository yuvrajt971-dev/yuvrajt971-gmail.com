import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import multer from "multer";

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const dataFilePath = path.join(process.cwd(), "data", "site_data.json");
const uploadImgDir = path.join(process.cwd(), "uploads", "images");
const uploadVidDir = path.join(process.cwd(), "uploads", "videos");

if (!fs.existsSync(uploadImgDir)) {
  fs.mkdirSync(uploadImgDir, { recursive: true });
}
if (!fs.existsSync(uploadVidDir)) {
  fs.mkdirSync(uploadVidDir, { recursive: true });
}

// Serve uploaded media statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/images", express.static(path.join(process.cwd(), "images")));
app.use("/videos", express.static(path.join(process.cwd(), "videos")));

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isVideo = file.mimetype.startsWith("video/") || file.originalname.match(/\.(mp4|webm|mov)$/i);
    if (isVideo) {
      cb(null, uploadVidDir);
    } else {
      cb(null, uploadImgDir);
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `media_${Date.now()}_${Math.random().toString(36).substring(2, 9)}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
});

// Helper to load site data
function getSiteData() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const content = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("Error reading site_data.json:", err);
  }
  return {};
}

// Helper to save site data
function saveSiteData(data: any) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving site_data.json:", err);
    return false;
  }
}

// --- API ENDPOINTS ---

// 1. Get All Website Content (Public)
app.get("/api/data", (req, res) => {
  const data = getSiteData();
  res.json(data);
});

// 2. Admin Login
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    res.json({
      success: true,
      token: "admin_token_secure_session",
      user: "admin",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid username or password.",
    });
  }
});

// 3. Admin Check Session
app.get("/api/admin/check", (req, res) => {
  res.json({ authenticated: true, user: "admin" });
});

// 4. Save All Site Data (Admin)
app.post("/api/admin/save-all", (req, res) => {
  const newContent = req.body;
  if (!newContent || typeof newContent !== "object") {
    return res.status(400).json({ success: false, message: "Invalid payload" });
  }

  const success = saveSiteData(newContent);
  if (success) {
    res.json({ success: true, message: "Saved successfully to server database!" });
  } else {
    res.status(500).json({ success: false, message: "Failed to save server data." });
  }
});

// 5. File Upload Handler (Admin Media Manager)
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded." });
  }

  const isVideo = req.file.mimetype.startsWith("video/") || req.file.originalname.match(/\.(mp4|webm|mov)$/i);
  const prefix = isVideo ? "uploads/videos/" : "uploads/images/";
  const fileUrl = `${prefix}${req.file.filename}`;

  res.json({
    success: true,
    message: "File uploaded successfully!",
    url: fileUrl,
    filename: req.file.filename,
  });
});

// --- VITE MIDDLEWARE SETUP ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
