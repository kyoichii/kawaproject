// URLを取得
let url = new URL(window.location.href);
// URLSearchParamsオブジェクトを取得
let params = url.searchParams;
// getメソッド
console.log('お釣り金額' + params.get('changemonney'));

/*
*
*   初期変数
*
*/
var changemonney = params.get('changemonney')   //お釣り金額

//HTML文にお釣り金額を挿入
document.getElementById("changemonney").innerHTML = "お釣り金額は" + changemonney + "円です。";

//最初の画面に戻るボタン
function firstbutton(){
    console.log("最初の画面に戻るよ！")
    location.replace("/clerkScreen.html")
}