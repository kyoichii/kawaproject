console.log(window.location.search)
// URLを取得
let url = new URL(window.location.href);
// URLSearchParamsオブジェクトを取得
let params = url.searchParams;
// getメソッド
console.log('レジ番号：' + params.get('rezinumber'));
console.log('合計値段:' + params.get('totalprice'));
console.log('合計個数:' + params.get('totalcount'));

/*
*
*初期変数
*
*/
var changemonney = 0;   //お釣り金額
var inputmonney = 0;    //投入金額
// var rezinumber = params.get('rezinumber');  //レジ番号
var rezinumber = 1
// var totalprice = params.get('totalprice');  //合計金額
var totalprice = 10000; //仮
var depositmoney = document.getElementById("depositMoney");  // 手入力の値段を取得
document.getElementById("number").innerHTML = rezinumber + "番レジ";
document.getElementById("totalprice").innerHTML = totalprice + "円";


//各お金の投入ボタンのクリックイベント
function changebutton(number) {
    switch (number) {
        //角送られてきた数字に対する処理
        case 0:
            //0の時の処理
            console.log("クリアボタンクリック")
            //今までの投入金額及びお釣り金額をリセット
            inputmonney = 0
            changemonney = 0
            break
        case 1:
            ///1の時の処理
            console.log("お金投入ボタンクリック")
            const value = depositmoney.value //手入力ボックスから値を取得
            inputmonney += Number(value)  //合計金額をインクリメント
            break
        case 10:
            //10の時の処理
            console.log("10円ボタンクリック！")
            inputmonney += 10;  //10円をインクリメント
            break
        case 100:
            //100の時の処理
            console.log("100円ボタンクリック！")
            inputmonney += 100;  //100円をインクリメント
            break
        case 1000:
            //1000の時の処理
            console.log("1000円ボタンクリック！")
            inputmonney += 1000;  //1000円をインクリメント
            break
        default:
            //それ以外の処理
            console.log("エラー")
            alert("値を変えられたためエラーが生じました。")
    }
    //投入金額が合計金額を超えた場合
    if (inputmonney > totalprice) {
        changemonney = inputmonney - totalprice //お釣り金額 = 投入金額 - 合計金額
    }
    /*
    *
    *   旧処理
    * 
    */
    // if (number > 0) {
    //     //100円ボタン or お金投入ボタン
    //     console.log("100円ボタンクリック！")
    // if (number == 100) {
    //     inputmonney += 100  //100円インクリメント
    // } else {
    //     inputmonney += Number(totalprice)  //合計金額インクリメント
    // }
    // //投入金額が合計金額を超えた場合
    // if (inputmonney > totalprice) {
    //     changemonney = inputmonney - totalprice //お釣り金額 = 投入金額 - 合計金額
    // }
    // } else {
    //     //-100円ボタン
    //     console.log("-100円ボタンクリック！")
    //     if (inputmonney > 0) {
    //         inputmonney += -100 //投入金額デクリメント
    //         if (inputmonney >= totalprice) {
    //             //投入金額が合計金額以下の時
    //             changemonney = inputmonney - totalprice //お釣り金額 = 投入金額 - 合計金額
    //         }
    //     }
    // }
    //HTML文挿入
    document.getElementById('inputmonney').innerHTML = inputmonney + "円"
    document.getElementById('changemonney').innerHTML = changemonney + "円"
}

//精算ボタン
function calculatebutton() {
    // 投入金額が合計金額以上の場合
    if (inputmonney >= totalprice) {
        location.replace('/test3.html?changemonney=' + changemonney)
        // location.href = '/test3.html?changemonney=' + changemonney
    } else {
        alert("お金が足りません！！！")
    }
}