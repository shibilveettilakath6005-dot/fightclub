<?php
// /var/www/html/fightclub/getflag.php
// WARNING: This is an example for controlled lab use only.
// Do not use in production without additional hardening.

$secret = 'super-secret-passphrase'; // change to your passphrase (keep this out of repo!)
$provided = $_POST['pass'] ?? '';

if (!hash_equals($secret, $provided)) {
    http_response_code(403);
    echo json_encode(['error' => 'forbidden']);
    exit;
}

$flag_file = '/home/shibil/flags/flag.txt';
if (!is_readable($flag_file)) {
    http_response_code(500);
    echo json_encode(['error' => 'flag missing']);
    exit;
}

$flag = trim(file_get_contents($flag_file));
echo json_encode(['flag' => $flag]);
