// ここからは技のデータを保存する場所
var physical = "physical";
var special = "special";
// 物理ダメージが発生する技の時に、具体的にどれくらいのダメージが生じるのかを計算する関数
function damagecalculation(status, user, opp, damage) {
    if (status === physical) {
        opp.hp -= Math.floor((22 * damage * user.a / opp.d / 50) + 2);
        if (opp.hp <= 0) {
            opp.hp = 0;
        }
    } else if (status === special) {
        opp.hp -= Math.floor((22 * damage * user.sa / opp.sd / 50) + 2);
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
// アシッドボム
function acidspray(user, opp) {
    damagecalculation(special, user, opp, 40);
    $(".explanation").text(user.name + "のアシッドボム！");
    document.getElementById("bgm_attack").play();
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

// アクロバット
function acrobatics(user, opp) {
    damagecalculation(special, user, opp, 55);
    $(".explanation").text(user.name + "のアクロバット！");
    document.getElementById("bgm_attack").play();
}

// エアカッター
function aircutter(user, opp) {
    damagecalculation(special, user, opp, 60);
    $(".explanation").text(user.name + "のエアカッター");
    document.getElementById("bgm_attack").play();
}
// エアスラッシュ
function airslash(user, opp) {
    damagecalculation(special, user, opp, 80);
    $(".explanation").text(user.name + "のエアスラッシュ！");
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
// かみくだく
function crunch(user, opp) {
    damagecalculation(physical, user, opp, 80);
    $(".explanation").text(user.name + "のかみくだく！");
    document.getElementById("bgm_attack").play();
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
function behemothblade(user, opp) {
    damagecalculation(physical, user, opp, 100);
    $(".explanation").text(user.name + "のきょじゅうざん！！！");
    document.getElementById("bgm_attack").play();
    zacian();
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

// こおりのきば
function icefang(user, opp) {
    damagecalculation(physical, user, opp, 65);
    $(".explanation").text(user.name + "のこおりのきば！");
    document.getElementById("bgm_attack").play();
}

// ゴーストダイブ
function phantomforce(user, opp) {
    damagecalculation(physical, user, opp, 90);
    $(".explanation").text(user.name + "のゴーストダイブ！");
    document.getElementById("bgm_attack").play();
    darkrai();
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
// そらをとぶ
function fly(user, opp) {
    damagecalculation(physical, user, opp, 90);
    $(".explanation").text(user.name + "のそらをとぶ！");
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
// どくづき
function poisonjab(user, opp) {
    damagecalculation(physical, user, opp, 80);
    $(".explanation").text(user.name + "のどくづき！");
    document.getElementById("bgm_attack").play();
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

// ブレイブバード
function bravebird(user, opp) {
    damagecalculation(physical, user, opp, 40);
    $(".explanation").text(user.name + "のブレイブバード！");
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
var movetable = {
    aquaring: { name: "アクアリング", action: (user, opponent) => aquaring(user, opponent) },
    spacialrend: { name: "あくうせつだん", action: (user, opponent) => spacialrend(user, opponent) },
    darkpulse: { name: "あくのはどう", action: (user, opponent) => darkpulse(user, opponent) },
    harden: { name: "かたくなる", action: (user, opponent) => harden(user, opponent) },
    bite: { name: "かみつく", action: (user, opponent) => bite(user, opponent) },
    dragonascent: { name: "ガリョウテンセイ", action: (user, opponent) => dragonascent(user, opponent) },
    behemothblade: { name: "きょじゅうざん", action: (user, opponent) => behemothblade(user, opponent) },
    slash: { name: "きりさく", action: (user, opponent) => slash(user, opponent) },
    synthesis: { name: "こうごうせい", action: (user, opponent) => synthesis(user, opponent) },
    phantomforce: { name: "ゴーストダイブ", action: (user, opponent) => phantomforce(user, opponent) },
    shadowclaw: { name: "シャドークロー", action: (user, opponent) => shadowclaw(user, opponent) },
    earthquake: { name: "じしん", action: (user, opponent) => earthquake(user, opponent) },
    solarbeam: { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) },
    tackle: { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
    swoardsdance: { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
    vinewhip: { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
    roaroftime: { name: "ときのほうこう", action: (user, opponent) => roaroftime(user, opponent) },
    dragonclaw: { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) },
    hydropump: { name: "ハイドロポンプ", action: (user, opponent) => hydropump(user, opponent) },
    scratch: { name: "ひっかく", action: (user, opponent) => scratch(user, opponent) },
    ember: { name: "ひのこ", action: (user, opponent) => ember(user, opponent) },
    watershuriken: { name: "みずしゅりけん", action: (user, opponent) => watershuriken(user, opponent) },
    watergun: { name: "みずでっぽう", action: (user, opponent) => watergun(user, opponent) },
    leafstorm: { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
    leafblade: { name: "リーフブレード", action: (user, opponent) => leafblade(user, opponent) },
    dracometeor: { name: "りゅうせいぐん", action: (user, opponent) => dracometeor(user, opponent) },
    fly: { name: "そらをとぶ", action: (user, opponent) => fly(user, opponent) },
    airslash: { name: "エアスラッシュ", action: (user, opponent) => airslash(user, opponent) },
    aircutter: { name: "エアカッター", action: (user, opponent) => aircutter(user, opponent) },
    bravebird: { name: "ブレイブバード", action: (user, opponent) => bravebird(user, opponent) },
    crunch: { name: "かみくだく", action: (user, opponent) => crunch(user, opponent) },
    acidspray: { name: "アシッドボム", action: (user, opponent) => acidspray(user, opponent) },
    icefang: { name: "こおりのきば", action: (user, opponent) => icefang(user, opponent) },
    poisonjab: { name: "どくづき", action: (user, opponent) => poisonjab(user, opponent) },
    acrobatics: { name: "アクロバット", action: (user, opponent) => acrobatics(user, opponent) },
    dragondance: { name: "りゅうのまい", action: (user, opponent) => dragondance(user, opponent) }
}