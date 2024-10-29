<?php
// File: index.php

header('Content-Type: text/html; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Rate limiting: Allow max 5 requests per minute from a single IP
session_start();
$rateLimitKey = 'rate_limit_' . $_SERVER['REMOTE_ADDR'];
$timeWindow = 60; // 60 seconds
global $rateLimitExceeded;
$rateLimitExceeded = false;

if (!isset($_SESSION[$rateLimitKey])) {
    $_SESSION[$rateLimitKey] = [
        'count' => 1,
        'time' => time()
    ];
} else {
    if (time() - $_SESSION[$rateLimitKey]['time'] < $timeWindow) {
        $_SESSION[$rateLimitKey]['count']++;
        if ($_SESSION[$rateLimitKey]['count'] > 5) {
            http_response_code(429);
            echo '<h1>Rate limit exceeded. Please try again later.</h1>';
            // Optionally log the rate limit exceedance
            error_log("Rate limit exceeded for IP: " . $_SERVER['REMOTE_ADDR']);
            $rateLimitExceeded = true;
            exit;
        }
    } else {
        $_SESSION[$rateLimitKey] = [
            'count' => 1,
            'time' => time()
        ];
    }
}

// Proceed if rate limit not exceeded
if (!$rateLimitExceeded) {
    // Get the current directory (data/)
    $directory = __DIR__;

    // Ensure the directory exists and is readable
    if (!is_dir($directory) || !is_readable($directory)) {
        http_response_code(404);
        echo '<h1>Directory does not exist or is not readable</h1>';
        exit;
    }

    // Scan the directory for files
    $files = @scandir($directory);

    if ($files === false) {
        http_response_code(500);
        echo '<h1>Unable to scan directory</h1>';
        exit;
    }

    // Filter out the current and parent directory links, only include readable .js files
    $files = array_filter($files, function ($file) use ($directory) {
        return $file !== '.' && $file !== '..' &&
               is_readable($directory . DIRECTORY_SEPARATOR . $file) &&
               pathinfo($file, PATHINFO_EXTENSION) === 'js' &&
               strpos($file, '../') === false;
    });

    // Sort files for consistent ordering
    natsort($files);

    // Generate HTML to list the files
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<title>Directory Listing</title>';
    echo '<style>body { font-family: Arial, sans-serif; } ul { list-style-type: none; padding: 0; } li { margin: 5px 0; }</style>';
    echo '</head>';
    echo '<body>';
    echo '<h1>Directory Listing</h1>';
    echo '<ul>';

    foreach ($files as $file) {
        $filePath = htmlspecialchars($file, ENT_QUOTES, 'UTF-8');
        echo "<li><a href=\"$filePath\">$filePath</a></li>";
    }

    echo '</ul>';
    echo '<p>Total .js files: ' . count($files) . '</p>';
    echo '</body>';
    echo '</html>';
}
?>
