<?php
// ブザーの読み込みを確認する読み込みphp
$filename = 'buzzer.txt';
// ファイルを開く（'r'は読み込みモードで開く）
$fp = fopen($filename, 'r') or die("ファイル読み込みエラー");
// ファイルを最後まで読み込む
echo fgets($fp);