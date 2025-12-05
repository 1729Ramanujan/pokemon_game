const view = document.querySelector(".view");
const map = document.querySelector(".map");
const player = document.querySelector(".player");
const savedPlayerPosition = JSON.parse(localStorage.getItem("userPosition"));
var playerPosition = [];
let playerX, playerY;

// 画面のサイズを定義
const view_width = view.clientWidth;
const view_height = view.clientHeight;

// 地図の大きさを定義
const map_width = map.clientWidth;
const map_height = map.clientHeight;


if (savedPlayerPosition === null) {
    playerX = map_width / 2;
    playerY = map_height / 2;
} else {
    playerX = savedPlayerPosition[0];
    playerY = savedPlayerPosition[1];
}

// プレイヤーの大きさを定義
const player_width = player.clientWidth;
const player_height = player.clientHeight;

// 一歩でどれくらい動くのかを定義（歩幅の大きさ）
const STEP = 32;

// カメラのマップ上での位置(カメラボックスの左上の位置をその位置としてる)
let cameraX = playerX - view_width / 2;
let cameraY = playerY - view_height / 2;

// 最初のカメラ位置を反映
updateView();

// ===== キー入力処理 =====
document.addEventListener("keydown", (e) => {
    let dx = 0;
    let dy = 0;

    switch (e.key) {
        case "ArrowUp":
            dy -= STEP;
            break;
        case "ArrowDown":
            dy += STEP;
            break;
        case "ArrowLeft":
            dx -= STEP;
            break;
        case "ArrowRight":
            dx += STEP;
            break;
        default:
            return; // 他のキーは無視
    }

    // 画面スクロールを防ぐ（ブラウザのデフォルト動作を止める）
    e.preventDefault();

    movePlayer(dx, dy);
    playerPosition = [playerX, playerY];
});

function movePlayer(dx, dy) {
    playerX += dx;
    playerY += dy;

    playerX = Math.max(player_width, Math.min(playerX, map_width - player_width / 2));
    playerY = Math.max(player_height, Math.min(playerY, map_height - player_height / 2));

    let idealCameraX = playerX - view_width / 2;
    let idealCameraY = playerY - view_height / 2;

    cameraX = Math.max(0, Math.min(idealCameraX, map_width - view_width));
    cameraY = Math.max(0, Math.min(idealCameraY, map_height - view_height));

    updateView();
    blackholeStartEvent();
    rockStartEvent();
    grassStartEvent();

}

// カメラ更新関数
function updateView() {
    // カメラの左上座標（マップ上）
    let screenX = playerX - cameraX;
    let screenY = playerY - cameraY;

    // マップを逆方向にずらして、プレイヤーが中央に見えるようにする
    map.style.transform = `translate(${-cameraX}px, ${-cameraY}px)`;

    player.style.left = (screenX - player_width / 2) + "px";
    player.style.top = (screenY - player_height / 2) + "px";
}


const grassAreas = [
    { x1: 0, y1: 0, x2: 288, y2: 288 }
];

const rockAreas = [
    { x1: 0, y1: 736, x2: 288, y2: 1024 }
];

const blackholeAreas = [
    { x1: 1504, y1: 768, x2: 1536, y2: 800 }
];

function isInRect(x, y, rect) {
    return (
        x >= rect.x1 &&
        x <= rect.x2 &&
        y >= rect.y1 &&
        y <= rect.y2
    );
}

// いずれかの長方形に入っていれば「草むら」とみなす
function isInGrass(x, y) {
    return grassAreas.some(rect => isInRect(x, y, rect));
}
function isInRock(x, y) {
    return rockAreas.some(rect => isInRect(x, y, rect));
}
function isInBlackhole(x, y) {
    return blackholeAreas.some(rect => isInRect(x, y, rect));
}


function grassStartEvent() {
    // 草むらにいるときだけ判定
    if (!isInGrass(playerX, playerY)) {
        return;
    }

    // ランダムで判定
    if (Math.random() < 0.03) {
        localStorage.setItem("userPosition", JSON.stringify(playerPosition));
        location.href = "grass_wild_battle.html";
    }
}

function rockStartEvent() {
    // 草むらにいるときだけ判定
    if (!isInRock(playerX, playerY)) {
        return;
    }

    // ランダムで判定
    if (Math.random() < 0.05) {
        localStorage.setItem("userPosition", JSON.stringify(playerPosition));
        location.href = "rock_wild_battle.html";
    }
}
function blackholeStartEvent() {
    // 草むらにいるときだけ判定
    if (!isInBlackhole(playerX, playerY)) {
        return;
    }
    userPosition = [map_width / 2, map_height / 2];
    localStorage.setItem("userPosition", JSON.stringify(playerPosition));
    location.href = "legend_battle.html";
}




