<?php
// upload.php - Handle Secure File Uploads in PHP
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    http_response_code(401);
    echo json_encode(['success' => false, 'message' => 'Unauthorized access.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No file uploaded or upload error occurred.']);
    exit;
}

$file = $_FILES['file'];
$uploadType = isset($_POST['type']) ? $_POST['type'] : 'image'; // image or video

$allowedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
$allowedVideoTypes = ['video/mp4', 'video/webm', 'video/quicktime'];
$maxSize = 50 * 1024 * 1024; // 50MB max

if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'File size exceeds 50MB limit.']);
    exit;
}

$mime = mime_content_type($file['tmp_name']);
$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

if ($uploadType === 'video') {
    if (!in_array($mime, $allowedVideoTypes) && !in_array($ext, ['mp4', 'webm', 'mov'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid video format. Supported: MP4, WEBM, MOV']);
        exit;
    }
    $targetDir = __DIR__ . '/uploads/videos/';
    $publicPathPrefix = 'uploads/videos/';
} else {
    if (!in_array($mime, $allowedImageTypes) && !in_array($ext, ['jpg', 'jpeg', 'png', 'webp'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid image format. Supported: JPG, PNG, WEBP']);
        exit;
    }
    $targetDir = __DIR__ . '/uploads/images/';
    $publicPathPrefix = 'uploads/images/';
}

if (!file_exists($targetDir)) {
    mkdir($targetDir, 0755, true);
}

$newFilename = uniqid('media_', true) . '.' . $ext;
$targetPath = $targetDir . $newFilename;

if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    $relativeUrl = $publicPathPrefix . $newFilename;
    echo json_encode([
        'success' => true,
        'message' => 'File uploaded successfully!',
        'url' => $relativeUrl,
        'filename' => $newFilename
    ]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
}
