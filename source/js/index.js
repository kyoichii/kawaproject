//フロント画面へ行くための処理(ここに画面遷移の処理を書いてください)
function buttonClick(number) {
    switch (number) {
        case 1:
            // alert("レジ画面1クリック！");
            //画面遷移方法。
            window.location.href = './clerkScreen.html'; // 通常の遷移
            // window.open('パス名', '_blank'); // 新しいタブを開き、ページを表示
            break;
        case 2:
            alert("レジ画面2クリック！");
            break;
        case 3:
            // alert("レジ会計画面1クリック！");
            //画面遷移方法。
            window.location.href = './customerScreen.html'; // 通常の遷移
            break;
        case 4:
            alert("レジ会計画面2クリック！");
            break;
        default:
            alert("エラー！");
    }
}