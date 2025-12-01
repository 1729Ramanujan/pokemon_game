// ポケモンの名前、画像、ステータスを保存する場所
var bulbasaurTemplate = {
    id: "bulbasaur",
    name: "フシギダネ",
    maxhp: 45,
    a: 49,
    d: 49,
    sa: 65,
    sd: 65,
    s: 45,
    img: "./img/pokemon/bulbasaur.png",
    moves: ["tackle", "harden", "vinewhip", "scratch"]
};
var serperiorTemplate = {
    id: "serperior",
    name: "ジャローダ",
    maxhp: 75,
    a: 75,
    d: 95,
    sa: 75,
    sd: 95,
    s: 113,
    img: "./img/pokemon/serperior.png",
    moves: ["vinewhip", "leafstorm", "leafblade", "solarbeam"]
};
var greninjaTemplate = {
    id: "greninja",
    name: "ゲッコウガ",
    maxhp: 72,
    a: 95,
    d: 67,
    sa: 103,
    sd: 71,
    s: 122,
    img: "./img/pokemon/greninja.png",
    moves: ["watershuriken", "swoardsdance", "hydropump", "watergun"]
};
var charmanderTemplate = {
    id: "charmander",
    name: "ヒトカゲ",
    maxhp: 39,
    a: 52,
    d: 43,
    sa: 60,
    sd: 50,
    s: 65,
    img: "./img/pokemon/charmander.png",
    moves: ["scratch", "tackle", "ember", "slash"]
};
var squirtleTemplate = {
    id: "squirtle",
    name: "ゼニガメ",
    maxhp: 44,
    a: 48,
    d: 65,
    sa: 50,
    sd: 64,
    s: 43,
    img: "./img/pokemon/squirtle.png",
    moves: ["tackle", "harden", "aquaring", "watergun"]
};
var venusaurTemplate = {
    id: "venusaur",
    name: "フシギバナ",
    maxhp: 80,
    a: 82,
    d: 83,
    sa: 100,
    sd: 100,
    s: 80,
    img: "./img/pokemon/venusaur.png",
    moves: ["vinewhip", "earthquake", "leafstorm", "solarbeam"]
};
var darkraiTemplate = {
    id: "darkrai",
    name: "ダークライ",
    maxhp: 70,
    a: 90,
    d: 90,
    sa: 135,
    sd: 90,
    s: 125,
    img: "./img/pokemon/darkrai.png",
    moves: ["darkpulse", "shadowclaw", "swoardsdance", "phantomforce"]
};
var dialgaTemplate = {
    id: "dialga",
    name: "ディアルガ",
    maxhp: 100,
    a: 120,
    d: 120,
    sa: 150,
    sd: 100,
    s: 90,
    img: "./img/pokemon/dialga.png",
    moves: ["roaroftime", "swoardsdance", "spacialrend", "dragonclaw"]
};
var rayquazaTemplate = {
    id: "rayquaza",
    name: "レックウザ",
    maxhp: 105,
    a: 150,
    d: 90,
    sa: 150,
    sd: 90,
    s: 95,
    img: "./img/pokemon/rayquaza.png",
    moves: ["dragonclaw", "dragonascent", "dragondance", "dracometeor"]
};
var sceptileTemplate = {
    id: "sceptile",
    name: "ジュカイン",
    maxhp: 70,
    a: 85,
    d: 65,
    sa: 105,
    sd: 85,
    s: 120,
    img: "./img/pokemon/sceptile.png",
    moves: ["leafblade", "swoardsdance", "leafstorm", "solarbeam"]
};
var hydreigonTemplate = {
    id: "hydreigon",
    name: "サザンドラ",
    maxhp: 92,
    a: 105,
    d: 90,
    sa: 125,
    sd: 90,
    s: 98,
    img: "./img/pokemon/hydreigon.png",
    moves: ["dragonclaw", "dragondance", "dracometeor", "shadowclaw"]
};
var zacianTemplate = {
    id: "zacian",
    name: "ザシアン",
    maxhp: 92,
    a: 170,
    d: 115,
    sa: 80,
    sd: 115,
    s: 148,
    img: "./img/pokemon/zacian.png",
    moves: ["behemothblade", "swoardsdance", "bite", "slash"]
};

var pokemontable={
    bulbasaur: bulbasaurTemplate,
    serperior: serperiorTemplate,
    greninja: greninjaTemplate,
    charmander: charmanderTemplate,
    squirtle: squirtleTemplate,
    venusaur: venusaurTemplate,
    darkrai: darkraiTemplate,
    dialga: dialgaTemplate,
    rayquaza: rayquazaTemplate,
    sceptile: sceptileTemplate,
    hydreigon: hydreigonTemplate,
    zacian: zacianTemplate
}


