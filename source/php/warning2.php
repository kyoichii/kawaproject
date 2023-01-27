<?php
/*
*
* 警告開始
*
*/
$filename = 'weight.txt';
// ファイルを開く（'w'は書き込みモード）
$fp = fopen($filename, 'w');
// ファイルに書き込む
$data = "1";
fputs($fp, $data);
// ファイルを閉じる
fclose($fp);