// ここからは技のデータを保存する場所
// 物理ダメージが発生する技の時に、具体的にどれくらいのダメージが生じるのかを計算する関数
function damagecalculation(status, user, opp, damage) {
    if (status === physical) {
        opp.hp -= Math.floor((22 * damage * user.a / opp.d / 50) + 2);
        if (opp.hp <= 0) {
            opp.hp = 0;
        }
    } else if (status === special){
        opp.hp -= Math.floor((22 * damage * user.sa / opp.sa / 50) + 2);
        if (opp.hp <= 0) {
            opp.hp = 0;
        }
    }

}
// かいふく技の使用時の時に、どれくらいのHPが回復するのかを計算する関数
function healcalculation(user, opp, ratio) {
    user.hp += Math.floor(user.maxhp * ratio);
    if (user.hp >= user.maxhp) {
        user.hp = user.maxhp;
    }
}

// アクアリング
function aquaring(user, opp) {
    healcalculation(user, opp, 0.2);
    $(".explanation").text(user.name + "のアクアリング！");
}

// あくうせつだん
function spacialrend(user, opp) {
    damagecalculation(special, user, opp, 100);
    $(".explanation").text(user.name + "のあくうせつだん！");
    document.getElementById("bgm_attack").play();
}

// あくのはどう
function darkpulse(user, opp) {
    damagecalculation(special, user, opp, 80);
    $(".explanation").text(user.name + "のあくのはどう！");
    document.getElementById("bgm_attack").play();
}

// かたくなる
function harden(user, opp) {
    user.d = user.d * 1.5;
    $(".explanation").text(user.name + "のかたくなる！");
    setTimeout(() => {
        $(".explanation").text(user.name + "のぼうぎょがあがった！");
    }, 1000);
}

// かみつく
function bite(user, opp) {
    damagecalculation(physical, user, opp, 60);
    $(".explanation").text(user.name + "のかみつく！");
    document.getElementById("bgm_attack").play();
}

// ガリョウテンセイ
function dragonascent(user, opp) {
    damagecalculation(physical, user, opp, 120);
    $(".explanation").text(user.name + "のガリョウテンセイ！！！");
    document.getElementById("bgm_rayquaza").play();
    rayquaza();
}

// きょじゅうざん
function behemothblade(physical, user, opp) {
    damagecalculation(user, opp, 100);
    $(".explanation").text(user.name + "のきょじゅうざん！！！");
    document.getElementById("bgm_attack").play();
}

// きりさく
function slash(user, opp) {
    damagecalculation(physical, user, opp, 70);
    $(".explanation").text(user.name + "のきりさく！");
    document.getElementById("bgm_attack").play();
}

// こうごうせい
function synthesis(user, opp) {
    healcalculation(user, opp, 0.25);
    $(".explanation").text(user.name + "のこうごうせい！");
    document.getElementById("bgm_attack").play();
}

// ゴーストダイブ
function phantomforce(user, opp) {
    damagecalculation(physical, user, opp, 90);
    $(".explanation").text(user.name + "のゴーストダイブ！");
    document.getElementById("bgm_attack").play();
}

// シャドークロー
function shadowclaw(user, opp) {
    damagecalculation(physical, user, opp, 70);
    $(".explanation").text(user.name + "のシャドークロー！");
    document.getElementById("bgm_attack").play();
}

// じしん
function earthquake(user, opp) {
    damagecalculation(physical, user, opp, 100);
    $(".explanation").text(user.name + "のじしん！");
    document.getElementById("bgm_attack").play();
}

// ソーラービーム
function solarbeam(user, opp) {
    damagecalculation(special, user, opp, 120);
    $(".explanation").text(user.name + "のソーラービーム！");
    document.getElementById("bgm_attack").play();
}

// たいあたり
function tackle(user, opp) {
    damagecalculation(physical, user, opp, 40);
    $(".explanation").text(user.name + "のたいあたり！");
    document.getElementById("bgm_attack").play();
}

// つるぎのまい
function swoardsdance(user, opp) {
    user.a = user.a * 1.5;
    $(".explanation").text(user.name + "のつるぎのまい！");
    document.getElementById("bgm_swoarddance").play();
    setTimeout(() => {
        $(".explanation").text(user.name + "のこうげきがあがった！");
    }, 500);
}

// つるのむち
function vinewhip(user, opp) {
    damagecalculation(physical, user, opp, 45);
    $(".explanation").text(user.name + "のつるのむち！");
    document.getElementById("bgm_attack").play();
}

// ときのほうこう
function roaroftime(user, opp) {
    damagecalculation(physical, user, opp, 150);
    $(".explanation").text(user.name + "のときのほうこう！");
    document.getElementById("bgm_rayquaza").play();
    setTimeout(() => { document.getElementById("bgm_dialga").play(); }, 3200);
    dialga();
}

// ドラゴンクロー
function dragonclaw(user, opp) {
    damagecalculation(physical, user, opp, 80);
    $(".explanation").text(user.name + "のドラゴンクロー！");
    document.getElementById("bgm_attack").play();
}

// ハイドロポンプ
function hydropump(user, opp) {
    damagecalculation(special, user, opp, 80);
    $(".explanation").text(user.name + "のハイドロポンプ！");
    document.getElementById("bgm_attack").play();
}

// ひっかく
function scratch(user, opp) {
    damagecalculation(physical, user, opp, 40);
    $(".explanation").text(user.name + "のひっかく！");
    document.getElementById("bgm_attack").play();
}

// ひのこ
function ember(user, opp) {
    damagecalculation(special, user, opp, 40);
    $(".explanation").text(user.name + "のひのこ！");
    document.getElementById("bgm_attack").play();
}

// みずしゅりけん
function watershuriken(user, opp) {
    damagecalculation(special, user, opp, 40);
    $(".explanation").text(user.name + "のみずしゅりけん！");
    document.getElementById("bgm_attack").play();
}

// みずでっぽう
function watergun(user, opp) {
    damagecalculation(special, user, opp, 40);
    $(".explanation").text(user.name + "のみずでっぽう！");
    document.getElementById("bgm_attack").play();
}

// リーフストーム
function leafstorm(user, opp) {
    damagecalculation(special, user, opp, 130);
    $(".explanation").text(user.name + "のリーフストーム！");
    document.getElementById("bgm_attack").play();
}

// リーフブレード
function leafblade(user, opp) {
    damagecalculation(physical, user, opp, 90);
    $(".explanation").text(user.name + "のリーフブレード！");
    document.getElementById("bgm_attack").play();
}

// りゅうせいぐん
function dracometeor(user, opp) {
    damagecalculation(special, user, opp, 130);
    $(".explanation").text(user.name + "のりゅうせいぐん！");
    document.getElementById("bgm_attack").play();
}

// りゅうのまい
function dragondance(user, opp) {
    user.a = user.a * 1.33;
    user.d = user.d * 1.33;
    $(".explanation").text(user.name + "のりゅうのまい！");
    setTimeout(() => {
        $(".explanation").text(user.name + "のこうげきとぼうぎょがすこしあがった！");
    }, 1000);
    document.getElementById("bgm_dragondance").play();
}
