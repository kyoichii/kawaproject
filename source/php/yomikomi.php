<?php
$filename = 'weight.txt';
// ファイルを開く（'r'は読み込みモードで開く）
$fp = fopen($filename, 'r') or die("ファイル読み込みエラー");
// ファイルを最後まで読み込む
echo fgets($fp);
// // ファイルを閉じる
// fclose($fp);