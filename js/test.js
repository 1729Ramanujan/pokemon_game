
// 画面を表示させるように設定する関数
function showscreen(screen) {
    // 最初に全てのbgmは止める
    document.getElementById("bgm_pokemon_battle").pause();

    // もし音楽が流れているなら、音楽の最初に戻る様に設定
    document.getElementById("bgm_pokemon_battle").currentTime = 0;

    // 全ての画面からactiveを取り除いて非表示にしている
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    // 最初に入力されてるscreenに.activeを追加する→表示させたいやつだけが表示する様になる
    setTimeout(() => {
        screen.classList.add("active");
    }, 1000);
    // どの画面にいるのかに応じて背景の画像とbgmを変更している！
    if (screen.id === "bonus") {
        document.body.style.backgroundImage = "url('img/background4.jpeg')";
        document.getElementById("bgm_pokemon_battle").play();
    }
}

window.onload = () => {
    showscreen(battle);
};

// // 最初にクリックされたらbgmが流れるように設定
// window.addEventListener("click", function initAudio() {
//     //  クリック時の再生
//     document.getElementById("").play();
//     // クリックに応じて何回も再生されたらやばいので、一度だけ実行する
//     window.removeEventListener("click", initAudio);
// });




