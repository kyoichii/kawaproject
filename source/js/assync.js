var check = true    //カゴ有無判定変数

var wait = function (sec) {
    return function () {
        return new Promise(function (resolve/*, reject*/) {
            setTimeout(resolve, sec * 1000)
        });
    }
};

Promise.resolve()
    .then(wait(3)) //3秒待った後に、非同期処理を開始する。
    .then(async function () {
        while (true) {
            await fetch("http://localhost:90/php/yomikomi.php")
                .then((res) => res.text())
                .then((apiData) => {
                    if (check == true && apiData == 1) {
                        fetch("http://localhost:90/php/buzzer.php")
                        // 入力ダイアログを表示 ＋ 入力内容を user に代入
                        user = window.prompt("買い物カゴがレジ付近から離れました。", "");
                        if (user == 7890) {
                            //店員サイドがパスワードを入力後、なっているサウンドを消す。
                            //本来はレジサイドで何らかの操作を行うが、建前としてパスワード入力を行う。
                            fetch("http://localhost:90/php/warning1.php")
                            fetch("http://localhost:90/php/buzzercheck.php")
                            check = false
                        }
                    } else {
                        console.log("警告なし")
                        check = true
                    }
                });
        }
    })
    .catch(function (err) {
        console.error(err);
        self.result_message = error;
    });