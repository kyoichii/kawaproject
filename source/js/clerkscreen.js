'use strict'; /* 厳格にエラーをチェック */

/*
*
*  初期変数
*
*/
var totalcount = 0;         //全会計の個数をカウントする。
var totalprice = 0;         //全商品の合計を格納する変数
//野菜の各個数がカウントされた変数
var vegecount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
//野菜の各値段が格納された変数
var vegeprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
//野菜の商品名が格納された配列
var vegename = ['玉ねぎ', 'にんじん', 'ピーマン', 'ほうれんそう', 'きゅうり', 'オクラ', 'なす', '大根', 'とうもろこし', 'じゃがいも', '白菜', 'ブロッコリー',
    '鮭', 'イカ', 'スルメイカ', 'タコ', 'ブリ', 'ホタテ', 'エビ', 'いわし', 'かに', 'あじ', '干物', '鮮魚',
    'てんぷら', '肉・魚天ぷら', 'えび天ぷら', 'かきあげ', 'コロッケ', 'フライ', 'とんかつ', 'ローストチキン', 'やきとり', 'さつまあげ', 'フライドチキン', '串あげ'
]
var price = [200, 100, 300, 200, 100, 300, 200, 100, 300, 200, 100, 300,
    200, 100, 300, 200, 100, 300, 200, 100, 300, 200, 100, 300,
    200, 100, 300, 200, 100, 300, 200, 100, 300, 200, 100, 300
]

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
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(0)"> ー </button>`;
    } else if (vegename[vegenumber] == 'にんじん') {
        //にんじんの時の処理
        document.getElementById('nin').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(1)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(1)"> ー </button>`;
    } else if (vegename[vegenumber] == 'ピーマン') {
        //ピーマンの時の処理
        document.getElementById('piman').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(2)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(2)"> ー </button>`;
    } else if (vegename[vegenumber] == 'ほうれんそう') {
        //ほうれんそうの時の処理
        document.getElementById('hou').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(3)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(3)"> ー </button>`;
    } else if (vegename[vegenumber] == 'きゅうり') {
        //きゅうりの時の処理
        document.getElementById('kyuu').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(4)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(4)"> ー </button>`;
    } else if (vegename[vegenumber] == 'オクラ') {
        //オクラの時の処理
        document.getElementById('okura').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(5)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(5)"> ー </button>`;
    } else if (vegename[vegenumber] == 'なす') {
        //なすの時の処理
        document.getElementById('nasu').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(6)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(6)"> ー </button>`;
    } else if (vegename[vegenumber] == '大根') {
        //大根の時の処理
        document.getElementById('daikon').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(7)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(7)"> ー </button>`;
    } else if (vegename[vegenumber] == 'とうもろこし') {
        //とうもろこしの時の処理
        document.getElementById('toumoro').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(8)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(8)"> ー </button>`;
    } else if (vegename[vegenumber] == 'じゃがいも') {
        //じゃがいもの時の処理
        document.getElementById('zyaga').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(9)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(9)"> ー </button>`;
    } else if (vegename[vegenumber] == '白菜') {
        //白菜の時の処理
        document.getElementById('haku').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(10)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(10)"> ー </button>`;
    } else if (vegename[vegenumber] == 'ブロッコリー') {
        //ブロッコリーの時の処理
        document.getElementById('buro').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(11)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(11)"> ー </button>`;
    } else if (vegename[vegenumber] == '鮭') {
        //鮭の時の処理
        document.getElementById('syake').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(12)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(12)"> ー </button>`;
    } else if (vegename[vegenumber] == 'イカ') {
        //イカの時の処理
        document.getElementById('ika').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(13)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(13)"> ー </button>`;
    } else if (vegename[vegenumber] == 'スルメイカ') {
        //スルメイカの時の処理
        document.getElementById('surume').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(14)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(14)"> ー </button>`;
    } else if (vegename[vegenumber] == 'タコ') {
        //タコの時の処理
        document.getElementById('tako').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(15)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(15)"> ー </button>`;
    } else if (vegename[vegenumber] == 'ブリ') {
        //ブリの時の処理
        document.getElementById('buri').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(16)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(16)"> ー </button>`;
    } else if (vegename[vegenumber] == 'ホタテ') {
        //鮭の時の処理
        document.getElementById('hotate').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(17)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(17)"> ー </button>`;
    } else if (vegename[vegenumber] == 'エビ') {
        //エビの時の処理
        document.getElementById('ebi').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(18)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(18)"> ー </button>`;
    } else if (vegename[vegenumber] == 'いわし') {
        //いわしの時の処理
        document.getElementById('iwashi').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(19)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(19)"> ー </button>`;
    } else if (vegename[vegenumber] == 'かに') {
        //かにの時の処理
        document.getElementById('kani').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(20)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(20)"> ー </button>`;
    } else if (vegename[vegenumber] == 'あじ') {
        //あじの時の処理
        document.getElementById('azi').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(21)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(21)"> ー </button>`;
    } else if (vegename[vegenumber] == '干物') {
        //干物の時の処理
        document.getElementById('himono').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(22)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(22)"> ー </button>`;
    } else if (vegename[vegenumber] == '鮮魚') {
        //鮮魚の時の処理
        document.getElementById('sengyo').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(23)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(23)"> ー </button>`;
    } else if (vegename[vegenumber] == 'てんぷら') {
        //てんぷらの時の処理
        document.getElementById('tenpura').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(24)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(24)"> ー </button>`;
    } else if (vegename[vegenumber] == '肉・魚天ぷら') {
        //肉・魚天ぷらの時の処理
        document.getElementById('nikusakana').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(25)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(25)"> ー </button>`;
    } else if (vegename[vegenumber] == 'えび天ぷら') {
        //えび天ぷらの時の処理
        document.getElementById('ebiten').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(26)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(26)"> ー </button>`;
    } else if (vegename[vegenumber] == 'かきあげ') {
        //かきあげの時の処理
        document.getElementById('kakiage').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(27)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(27)"> ー </button>`;
    } else if (vegename[vegenumber] == 'コロッケ') {
        //コロッケの時の処理
        document.getElementById('koro').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(28)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(28)"> ー </button>`;
    } else if (vegename[vegenumber] == 'フライ') {
        //フライの時の処理
        document.getElementById('hurai').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(29)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(29)"> ー </button>`;
    } else if (vegename[vegenumber] == 'とんかつ') {
        //とんかつの時の処理
        document.getElementById('tonkatu').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(30)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(30)"> ー </button>`;
    } else if (vegename[vegenumber] == 'ローストチキン') {
        //ローストチキンの時の処理
        document.getElementById('rosuto').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(31)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(31)"> ー </button>`;
    } else if (vegename[vegenumber] == 'やきとり') {
        //やきとりの時の処理
        document.getElementById('yakitori').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(32)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(32)"> ー </button>`;
    } else if (vegename[vegenumber] == 'さつまあげ') {
        //さつまあげの時の処理
        document.getElementById('satuma').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(33)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(33)"> ー </button>`;
    } else if (vegename[vegenumber] == 'フライドチキン') {
        //フライドチキンの時の処理
        document.getElementById('huraido').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(34)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(34)"> ー </button>`;
    } else if (vegename[vegenumber] == '串あげ') {
        //串あげの時の処理
        document.getElementById('kusiage').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(35)"> ー </button>`;
        document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(35)"> ー </button>`;
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
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(0)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('tama').innerHTML = "";
            document.getElementById('current').innerHTML = "";

        }
    } else if (vegename[vegenumber] == 'にんじん') {
        //にんじんの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('nin').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(1)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(1)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('nin').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'ピーマン') {
        //ピーマンの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('piman').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(2)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(2)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('piman').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'ほうれんそう') {
        //ほうれんそうの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('hou').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(3)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(3)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('hou').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'きゅうり') {
        //きゅうりの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('kyuu').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(4)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(4)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('kyuu').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'オクラ') {
        //オクラの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('okura').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(5)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(5)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('okura').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'なす') {
        //なすの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('nasu').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(6)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(6)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('nasu').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '大根') {
        //大根の時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('daikon').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(7)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(7)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('daikon').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'とうもろこし') {
        //とうもろこしの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('toumoro').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(8)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(8)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('toumoro').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'じゃがいも') {
        //じゃがいもの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('zyaga').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(9)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(9)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('zyaga').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '白菜') {
        //白菜の時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('haku').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(10)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(10)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('haku').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'ブロッコリー') {
        //ブロッコリーの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('buro').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(11)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(11)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('buro').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '鮭') {
        //鮭の時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('syake').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(12)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(12)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('syake').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'イカ') {
        //イカの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('ika').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(13)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(13)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('ika').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'スルメイカ') {
        //スルメイカの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('surume').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(14)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(14)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('surume').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'タコ') {
        //タコの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('tako').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(15)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(15)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('tako').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'ブリ') {
        //ブリの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('buri').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(16)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(16)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('buri').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'ホタテ') {
        //ホタテの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('hotate').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(17)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(17)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('hotate').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'エビ') {
        //エビの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('ebi').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(18)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(18)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('ebi').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'いわし') {
        //いわしの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('iwashi').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(19)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(19)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('iwashi').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'かに') {
        //かにの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('kani').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(20)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(20)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('kani').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'あじ') {
        //あじの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('azi').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(21)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(21)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('azi').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '干物') {
        //干物の時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('himono').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(22)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(22)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('himono').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '鮮魚') {
        //鮮魚の時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('sengyo').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(23)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(23)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('sengyo').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'てんぷら') {
        //てんぷらの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('tenpura').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(24)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(24)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('tenpura').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '肉・魚天ぷら') {
        //肉・魚天ぷらの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('nikusakana').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(25)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(25)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('nikusakana').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'えび天ぷら') {
        //えび天ぷらの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('ebiten').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(26)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(26)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('ebiten').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'かきあげ') {
        //かきあげの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('kakiage').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(27)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(27)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('kakiage').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'コロッケ') {
        //コロッケの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('koro').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(28)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(28)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('koro').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'フライ') {
        //フライの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('hurai').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(29)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(29)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('hurai').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'とんかつ') {
        //とんかつの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('tonkatu').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(30)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(30)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('tonkatu').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'ローストチキン') {
        //ローストチキンの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('rosuto').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(31)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(31)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('rosuto').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'やきとり') {
        //やきとりの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('yakitori').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(32)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(32)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('yakitori').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'さつまあげ') {
        //さつまあげの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('satuma').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(33)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(33)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('satuma').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == 'フライドチキン') {
        //フライドチキンの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('huraido').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(34)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(34)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('huraido').innerHTML = "";
            document.getElementById('current').innerHTML = "";
        }
    } else if (vegename[vegenumber] == '串あげ') {
        //串あげの時の処理
        if (vegecount[vegenumber] != 0) {
            //購入個数が1個以上なら個数に応じた表示を行う。
            document.getElementById('kusiage').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(35)"> ー </button>`;
            document.getElementById('current').innerHTML = `${vegename[vegenumber]}: ${vegecount[vegenumber]}個: ${vegeprice[vegenumber]}円　　<button onclick="minusclick(35)"> ー </button>`;
        } else {
            //購入個数が0になれば、表示を消す
            document.getElementById('kusiage').innerHTML = "";
            document.getElementById('current').innerHTML = "";
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
    document.getElementById('quantity').innerHTML = `合計:${totalcount}個`;
    document.getElementById('price').innerHTML = `会計:${totalprice}円`;
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
            + '<div class = "mojidiv">'
            + `<div>合計：${totalcount}個</div>`
            + `<div>会計：${totalprice}円</div>`
            + '</div>'
            + '<p>お間違えなければレジ番号を選択してください</p>'
            + '<div class="rezibuttondiv">'
            + '<button onclick="screenchange(1)"class="rezibutton">一番レジ</button>'
            + '<button onclick="screenchange(2)" class="rezibutton">二番レジ</button>'
            + '</div>'
            + '<div class = "closebuttondiv">'
            + '<input type="button" class="closebutton" onclick="closeDialog()" value="閉じる">'
            + '</div>'
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
    location.replace('/customerScreen.html?rezinumber=' + rezinumber + '&totalprice=' + totalprice + '&totalcount=' + totalcount)
    // location.href = '/test2.html?rezinumber=' + rezinumber + '&totalprice=' + totalprice + '&totalcount=' + totalcount;
}

// タブ切り替え
{ /* ローカルスコープ */

    // DOM取得
    const tabMenus = document.querySelectorAll('.tab__menu-item');
    console.log(tabMenus);

    // イベント付加
    tabMenus.forEach((tabMenu) => {
        tabMenu.addEventListener('click', tabSwitch);
    })

    // イベントの処理
    function tabSwitch(e) {

        // クリックされた要素のデータ属性を取得
        const tabTargetData = e.currentTarget.dataset.tab;
        // クリックされた要素の親要素と、その子要素を取得
        const tabList = e.currentTarget.closest('.tab__menu');
        console.log(tabList);
        const tabItems = tabList.querySelectorAll('.tab__menu-item');
        console.log(tabItems);
        // クリックされた要素の親要素の兄弟要素の子要素を取得
        const tabPanelItems = tabList.
            nextElementSibling.querySelectorAll('.tab__panel-box');
        console.log(tabPanelItems);

        // クリックされたtabの同階層のmenuとpanelのクラスを削除
        tabItems.forEach((tabItem) => {
            tabItem.classList.remove('is-active');
        })
        tabPanelItems.forEach((tabPanelItem) => {
            tabPanelItem.classList.remove('is-show');
        })

        // クリックされたmenu要素にis-activeクラスを付加
        e.currentTarget.classList.add('is-active');
        // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
        tabPanelItems.forEach((tabPanelItem) => {
            if (tabPanelItem.dataset.panel === tabTargetData) {
                tabPanelItem.classList.add('is-show');
            }
        })

    }

}