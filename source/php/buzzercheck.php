<!-- ブザー起動フラグの確認 -->
<?php
/*
*
* true:ブザーなっている
* false:ブザー停止
*
*/
$filename = 'buzzer.txt';
// ファイルを開く（'w'は書き込みモード）
$fp = fopen($filename, 'w');
// ファイルに書き込む
$data = "false";
fputs($fp, $data);
$file = fopen($filename, 'r') or die("ファイル読み込みエラー");
echo fgets($file);
// ファイルを閉じる
fclose($fp);
