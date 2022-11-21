$(function () {

    var timer = null,
        textObj = null,
        execBtn = null,
        clearBtn = null,
        n = 0;

    //タイマー開始ボタン
    var startIntervalFunc = function () {
        if (!timer) timer = setInterval(execIntervalFunc, 1000);
    };

    //タイマー開始中に実行
    var execIntervalFunc = function () {
        n++;
        textObj.value = n;
    };

    //タイマーの停止ボタン
    var clearIntervalFunc = function () {
        // setIntervalの停止
        clearInterval(timer);
        time = null;
        n = 0;
        textObj.value = n;
    };

    textObj = document.getElementById('text');
    execBtn = document.getElementById('exec');
    clearBtn = document.getElementById('clear');

    execBtn.onclick = startIntervalFunc;
    clearBtn.onclick = clearIntervalFunc;

    $('#button').click(function () {
        console.log("クリック！！！")
        $.ajax({
            url: './test.py',
            type: 'post',
            data: { data: 'テスト' }
        }).done(function (data) {
            console.log(data);
        }).fail(function () {
            console.log('failed');
        });
    })

});