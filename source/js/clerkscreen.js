
/*
*
*  初期変数
*
*/
var totalcount = 0;         //全会計の個数をカウントする。
var totalprice = 0;         //全商品の合計を格納する変数
var vegecount = [0, 0, 0]   //野菜の各個数がカウントされた変数
var vegeprice = [0, 0, 0]   //野菜の各値段が格納された変数
//野菜の商品名が格納された配列
var vegename = ['玉ねぎ', 'にんじん', '豚肉']
var price = [200, 100, 300]

/*
*
*    野菜関数(購入する野菜の関連番号が送られてくる)
*
*/
function vegetable(vegenumber) {

    //商品の個数をカウント・合計個数、値段を計算
    totalcount++;                               //全商品の個数をインクリメント
    totalprice += price[vegenumber];            //全商品の合計値段を合算
    vegecount[vegenumber]++;                    //各商品の個数をインクリメント
    vegeprice[vegenumber] += price[vegenumber]  //各野菜の値段を計算

    if (vegename[vegenumber] == '玉ねぎ') {
        //玉ねぎの時の処理
        document.getElementById('tama').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(0)"> ー </button>`;
    } else if (vegename[vegenumber] == 'にんじん') {
        //にんじんの時の処理
        document.getElementById('nin').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(1)"> ー </button>`;
    } else if (vegename[vegenumber] == '豚肉') {
        //豚肉の時の処理
        document.getElementById('beaf').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(2)"> ー </button>`;
    }
    //全体の個数・値段を表示
    totalarea()
    //確認consoleログ
    console.log(vegename[vegenumber] + 'の個数は' + vegecount[vegenumber] + 'です。');
    console.log('全体値段:' + totalprice + "円, 全体個数:" + totalcount)
}

/*
*
*   -ボタンクリックイベント
*
*/
function minusclick(vegenumber) {
    //商品の個数をカウント・合計個数、値段を計算
    totalcount--;                               //全商品の個数をデクリメント
    totalprice -= price[vegenumber];            //全商品の合計値段を減算
    vegecount[vegenumber]--;                    //各商品の個数をデクリメント
    vegeprice[vegenumber] -= price[vegenumber]  //各野菜の値段を計算

    //各野菜で処理を分ける(もう少し簡略化できないか模索中。)
    if (vegename[vegenumber] == '玉ねぎ') {
        //玉ねぎの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('tama').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(0)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('tama').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'にんじん') {
        //にんじんの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('nin').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(1)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('nin').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '豚肉') {
        //豚肉の時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('beaf').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(2)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('beaf').innerHTML = "";
        }
    }
    //全体の個数・値段を表示
    totalarea()
    //確認consoleログ
    console.log(vegename[vegenumber] + 'の個数は' + vegecount[vegenumber] + 'です。');
    console.log('全体値段:' + totalprice + "円, 全体個数:" + totalcount)

}
//合計表示関数
function totalarea() {
    document.getElementById('quantity').innerHTML = `合計${totalcount}個`;
    document.getElementById('price').innerHTML = `会計${totalprice}円`;
}

/*
*
*   ダイアログを表示したい！！
*   以下、商品確定ボタンクリックイベント
*
*/
function showDialog() {
    console.log("商品確定ボタンクリック！")
    if (totalarea == 0 || totalcount == 0) {
        //商品カートに何もなかった場合
        alert("商品が選択されていません。")
    } else {
        //商品カートに商品があった場合
        var html = document.getElementById("content").innerHTML;
        /*
        *   ここのエリアでダイアログボックスのHTMLを作成しています。
        *   id、classの指定はここで直接書くといいかも！
        *   HTMLも修正したいなら勝手に触ってください。
        */

        html = html + '<div id="dialog">'
            + '<div id="dialog_back" style="height:'
            + getBrowserHeight() + 'px;"></div>'
            + '<div id="dialog_body">'
            + `<div>合計${totalcount}個</div>`
            + `<div>会計${totalprice}円</div>`
            + '<p>お間違えなければレジ番号を選択してください</p>'
            + '<button onclick="screenchange(1)">一番レジ</button>'
            + '<button onclick="screenchange(2)">二番レジ</button><br>'
            + '<input type="button" onclick="closeDialog()" value="閉じる">'
            + '</div>'
            + '</div>';

        console.log(html)
        document.getElementById("content").innerHTML = html;
    }
}

// 画面の高さを取得
function getBrowserHeight() {
    if (window.innerHeight) {
        return window.innerHeight;
    }
    else if (document.documentElement &&
        document.documentElement.clientHeight != 0) {
        return document.documentElement.clientHeight;
    }
    else if (document.body) {
        return document.body.clientHeight;
    }
    return 0;
}

// ダイアログを閉じる
function closeDialog() {
    var delNode = document.getElementById("dialog");
    delNode.parentNode.removeChild(delNode);
}

//画面遷移関数
function screenchange(rezinumber) {
    console.log("今から画面遷移するよ！")
    //画面遷移のURLを書く
    location.href = '/test2.html?rezinumber=' + rezinumber + '&totalprice=' + totalprice + '&totalcount=' + totalcount;
}