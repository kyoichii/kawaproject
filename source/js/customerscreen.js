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
var totalprice = params.get('totalprice');  //合計金額
document.getElementById("rezinumber").innerHTML = params.get('rezinumber') + "番レジ";
document.getElementById("totalprice").innerHTML = totalprice + "円";


//100円、-100円ボタンクリックイベント
function changebutton(number) {
    if (number > 0) {
        //100円ボタン or お金投入ボタン
        console.log("100円ボタンクリック！")
        if (number == 100) {
            inputmonney += 100  //100円インクリメント
        } else {
            inputmonney += Number(totalprice)  //合計金額インクリメント
        }
        //投入金額が合計金額を超えた場合
        if (inputmonney > totalprice) {
            changemonney = inputmonney - totalprice //お釣り金額 = 投入金額 - 合計金額
        }
    } else {
        //-100円ボタン
        console.log("-100円ボタンクリック！")
        if (inputmonney > 0) {
            inputmonney += -100 //投入金額デクリメント
            if (inputmonney >= totalprice) {
                //投入金額が合計金額以下の時
                changemonney = inputmonney - totalprice //お釣り金額 = 投入金額 - 合計金額
            }
        }
    }
    //HTML文挿入
    document.getElementById('inputmonney').innerHTML = inputmonney + "円"
    document.getElementById('changemonney').innerHTML = changemonney + "円"
}

//精算ボタン
function calculatebutton(){
    // 投入金額が合計金額以上の場合
    if(inputmonney >= totalprice){
        location.replace('/test3.html?changemonney=' + changemonney)
        // location.href = '/test3.html?changemonney=' + changemonney
    }else{
        alert("お金が足りません！！！")
    }
}