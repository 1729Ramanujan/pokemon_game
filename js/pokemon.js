// ポケモンの名前、画像、ステータスを保存する場所
var bulbasaurTemplate = {
    name: "フシギダネ",
    maxhp: 45,
    a: 49,
    d: 49,
    sa: 65,
    sd: 65,
    s: 45,
    img: "./img/pokemon/bulbasaur.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "かたくなる", action: (user, opponent) => harden(user, opponent) },
        { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
        { name: "ひっかく", action: (user, opponent) => scratch(user, opponent) }
    ]
};
var serperiorTemplate = {
    name: "ジャローダ",
    maxhp: 75,
    a: 75,
    d: 95,
    sa: 75,
    sd: 95,
    s: 113,
    img: "./img/pokemon/serperior.png",
    moves: [
        { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "リーフブレード", action: (user, opponent) => leafblade(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var greninjaTemplate = {
    name: "ゲッコウガ",
    maxhp: 72,
    a: 95,
    d: 67,
    sa: 103,
    sd: 71,
    s: 122,
    img: "./img/pokemon/greninja.png",
    moves: [
        { name: "みずしゅりけん", action: (user, opponent) => watershuriken(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "ハイドロポンプ", action: (user, opponent) => hydropump(user, opponent) },
        { name: "みずでっぽう", action: (user, opponent) => watergun(user, opponent) }
    ]
};
var charmanderTemplate = {
    name: "ヒトカゲ",
    maxhp: 39,
    a: 52,
    d: 43,
    sa: 60,
    sd: 50,
    s: 65,
    img: "./img/pokemon/charmander.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "ひっかく", action: (user, opponent) => scratch(user, opponent) },
        { name: "ひのこ", action: (user, opponent) => ember(user, opponent) },
        { name: "きりさく", action: (user, opponent) => slash(user, opponent) }
    ]
};
var squirtleTemplate = {
    name: "ゼニガメ",
    maxhp: 44,
    a: 48,
    d: 65,
    sa: 50,
    sd: 64,
    s: 43,
    img: "./img/pokemon/squirtle.png",
    moves: [
        { name: "たいあたり", action: (user, opponent) => tackle(user, opponent) },
        { name: "かたくなる", action: (user, opponent) => harden(user, opponent) },
        { name: "アクアリング", action: (user, opponent) => aquaring(user, opponent) },
        { name: "みずでっぽう", action: (user, opponent) => watergun(user, opponent) }
    ]
};
var venusaurTemplate = {
    name: "フシギバナ",
    maxhp: 80,
    a: 82,
    d: 83,
    sa: 100,
    sd: 100,
    s: 80,
    img: "./img/pokemon/venusaur.png",
    moves: [
        { name: "つるのむち", action: (user, opponent) => vinewhip(user, opponent) },
        { name: "じしん", action: (user, opponent) => earthquake(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var darkraiTemplate = {
    name: "ダークライ",
    maxhp: 70,
    a: 90,
    d: 90,
    sa: 135,
    sd: 90,
    s: 125,
    img: "./img/pokemon/darkrai.png",
    moves: [
        { name: "あくのはどう", action: (user, opponent) => darkpulse(user, opponent) },
        { name: "シャドークロー", action: (user, opponent) => shadowclaw(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "ゴーストダイブ", action: (user, opponent) => phantomforce(user, opponent) }
    ]
};
var dialgaTemplate = {
    name: "ディアルガ",
    maxhp: 100,
    a: 120,
    d: 120,
    sa: 150,
    sd: 100,
    s: 90,
    img: "./img/pokemon/dialga.png",
    moves: [
        { name: "ときのほうこう", action: (user, opponent) => roaroftime(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "あくうせつだん", action: (user, opponent) => spacialrend(user, opponent) },
        { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) }
    ]
};
var rayquazaTemplate = {
    name: "レックウザ",
    maxhp: 105,
    a: 150,
    d: 90,
    sa: 150,
    sd: 90,
    s: 95,
    img: "./img/pokemon/rayquaza.png",
    moves: [
        { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) },
        { name: "ガリョウテンセイ", action: (user, opponent) => dragonascent(user, opponent) },
        { name: "りゅうのまい", action: (user, opponent) => dragondance(user, opponent) },
        { name: "りゅうせいぐん", action: (user, opponent) => dracometeor(user, opponent) }
    ]
};
var sceptileTemplate = {
    name: "ジュカイン",
    maxhp: 70,
    a: 85,
    d: 65,
    sa: 105,
    sd: 85,
    s: 120,
    img: "./img/pokemon/sceptile.png",
    moves: [
        { name: "リーフブレード", action: (user, opponent) => leafblade(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "リーフストーム", action: (user, opponent) => leafstorm(user, opponent) },
        { name: "ソーラービーム", action: (user, opponent) => solarbeam(user, opponent) }
    ]
};
var hydreigonTemplate = {
    name: "サザンドラ",
    maxhp: 92,
    a: 105,
    d: 90,
    sa: 125,
    sd: 90,
    s: 98,
    img: "./img/pokemon/hydreigon.png",
    moves: [
        { name: "ドラゴンクロー", action: (user, opponent) => dragonclaw(user, opponent) },
        { name: "りゅうのまい", action: (user, opponent) => dragondance(user, opponent) },
        { name: "りゅうせいぐん", action: (user, opponent) => dracometeor(user, opponent) },
        { name: "シャドークロー", action: (user, opponent) => shadowclaw(user, opponent) }
    ]
};
var zacianTemplate = {
    name: "ザシアン",
    maxhp: 92,
    a: 170,
    d: 115,
    sa: 80,
    sd: 115,
    s: 148,
    img: "./img/pokemon/zacian.png",
    moves: [
        { name: "きょじゅうざん", action: (user, opponent) => behemothblade(user, opponent) },
        { name: "つるぎのまい", action: (user, opponent) => swoardsdance(user, opponent) },
        { name: "かみつく", action: (user, opponent) => bite(user, opponent) },
        { name: "きりさく", action: (user, opponent) => slash(user, opponent) }
    ]
};


