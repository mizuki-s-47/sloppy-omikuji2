function buttonClick() {
    let val = randomValue();
    var res = document.getElementById("res");
    var mag = document.getElementById("msg");

    if (val < 5) {
        res.innerHTML = "大大吉";
        msg.innerHTML = "ラッキー、この運をガチャでも発揮できたらいいのにね";
    } else if (val < 15) {
        res.innerHTML = "大吉";
        msg.innerHTML = "多分今日はちょっといい日になる、保証はしないけど";
    } else if (val < 30) {
        res.innerHTML = "中吉";
        msg.innerHTML = "実は中吉って吉より悪い運勢とするのが一般的らしい";
    } else if (val < 60) {
        res.innerHTML = "吉";
        msg.innerHTML = "良くも悪くもない、でもこれくらいがちょうどいいのかもしれない";
    } else if (val < 90) {
        res.innerHTML = "凶";
        msg.innerHTML = "凶なんてよくでるし、気にしない。大凶よりはまし";
    } else {
        res.innerHTML = "大凶";
        msg.innerHTML = "まあ、そんな日もある";
    }
}

function randomValue() {
    var random = Math.floor(Math.random() * 101);
    return random;
}