
function disableButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`move${i}`).classList.add("hidden");
    }

}

function enableButtons() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`move${i}`).classList.remove("hidden");
    }

}

function updateHP(user, opp) {
    document.querySelector(".hpcontentuser").style.width = user.hp / user.maxhp * 100 + "%";
    document.querySelector(".hpcontentopp").style.width = opp.hp / opp.maxhp * 100 + "%";
    $(".hpnumberuser").text(user.hp + "/" + user.maxhp);
    $(".hpnumberopp").text(opp.hp + "/" + opp.maxhp);
    $(".friend").text(user.name + "  lv." + user.lv);
    $(".enemy").text(opp.name + "  lv." + opp.lv);
}

var opp_party = [
    duplicate(darkraiTemplate, 50),
    duplicate(venusaurTemplate, 50),
    duplicate(sceptileTemplate, 50),
    duplicate(bulbasaurTemplate, 50),
    duplicate(rayquazaTemplate, 50),
    duplicate(hydreigonTemplate, 50)
];
var user_party = [
    duplicate(rayquazaTemplate, 50),
    duplicate(squirtleTemplate, 50),
    duplicate(serperiorTemplate, 50),
    duplicate(greninjaTemplate, 50),
    duplicate(dialgaTemplate, 50),
    duplicate(zacianTemplate, 50)
];
var movebuttons = [
    document.getElementById("move1"),
    document.getElementById("move2"),
    document.getElementById("move3"),
    document.getElementById("move4")
];
var currentuser_index = Math.floor(Math.random() * user_party.length);
var currentopp_index = Math.floor(Math.random() * opp_party.length);
var user_pokemon = user_party[currentuser_index];
var opp_pokemon = opp_party[currentopp_index];

function statusCalculation(base, level) {
    return Math.floor((2 * base * level / 100) + 5);
}
function HPstatusCalculation(base, level) {
    return Math.floor((2 * base * level / 100) + level + 10);
}
function duplicate(template, level) {
    return {
        name: template.name,
        maxhp: HPstatusCalculation(template.maxhp, level),
        hp: HPstatusCalculation(template.maxhp, level),
        a: statusCalculation(template.a, level),
        d: statusCalculation(template.d, level),
        sa: statusCalculation(template.sa, level),
        sd: statusCalculation(template.sd, level),
        s: statusCalculation(template.s, level),
        lv: level,
        img: template.img,
        moves: template.moves
    };
}

function updatePokemon(user, opp) {
    for (let i = 0; i < 4; i++) {
        // ボタンに技名を代入してポケモンに応じて技名が変わるように
        movebuttons[i].textContent = user.moves[i].name;
    }
    // ポケモンの画像の更新
    document.getElementById("userpokemon").src = user.img;
    document.getElementById("opppokemon").src = opp.img;
}
// モンスターボールで手持ちのポケモンの個数を表す部分
function updatestatus(user, opp) {
    for (let i = 0; i <= 5; i++) {
        const ball = document.getElementById(`pokeball${i + 1}`);

        if (i < user.length && user[i].hp > 0) {
            ball.src = "img/pokeball.png";
        } else {
            ball.src = "img/pokeball_fainted.png";
        }
    }
    for (let i = 0; i <= 5; i++) {
        const ball = document.getElementById(`pokeball${i + 7}`);

        if (i < opp.length && opp[i].hp > 0) {
            ball.src = "img/pokeball.png";
        } else {
            ball.src = "img/pokeball_fainted.png";
        }
    }
}

// 敵・味方が攻撃する時の関数
function takeTurn(attacker, defender, moveIndex) {
    attacker.moves[moveIndex].action(attacker, defender);
    updateHP(user_pokemon, opp_pokemon);
}
// ポケモンが倒れたかどうかを判定する関数
function fainted(pokemon) {
    if (pokemon.hp <= 0) {
        return true;
    } else {
        return false;
    }
}
// 新しいポケモンが出る時に、手持ちのポケモンを更新して新しいポケモンをランダムに決める関数
function switchPokemon(party) {
    party = party.filter(p => p.hp > 0);
    return party[Math.floor(Math.random() * party.length)];
}

function processFaint(isUser) {
    // もし倒されたポケモンがユーザーのものなら
    if (isUser === true) {
        setTimeout(() => {
            disableButtons();
            $(".explanation").text(user_pokemon.name + "はたおれた！");
            // 手持ちのポケモンを更新
            user_party = user_party.filter(p => p.hp > 0);

            if (user_party.length === 0) {
                setTimeout(() => $(".explanation").text("たたかえるポケモンはもういない..."), 500);
                updatestatus(user_party, opp_party);
                var user = document.getElementById("userpokemon");
                user.classList.add("hidden");
                var user1 = document.getElementById("friend");
                user1.classList.add("hidden");
                // setTimeout(() => showscreen(start), 1500);
                return true;
            }

            user_pokemon = switchPokemon(user_party);
            setTimeout(() => {
                $(".explanation").text(user_pokemon.name + "をくりだした！");
                updatePokemon(user_pokemon, opp_pokemon);
                updateHP(user_pokemon, opp_pokemon);
                updatestatus(user_party, opp_party);
                enableButtons();
            }, 2000);
        }, 1000);
    } else {
        setTimeout(() => {
            $(".explanation").text("あいての" + opp_pokemon.name + "はたおれた！");
            opp_party = opp_party.filter(p => p.hp > 0);

            if (opp_party.length === 0) {
                setTimeout(() => {
                    $(".explanation").text("あいてを倒した！");
                    updatestatus(user_party, opp_party);
                    var enemy = document.getElementById("opppokemon");
                    enemy.classList.add("hidden");
                    var enemy1 = document.getElementById("enemy");
                    enemy1.classList.add("hidden");
                    // setTimeout(() => { showscreen(start); }, 2000);
                }, 1000);
                return true;
            }

            opp_pokemon = switchPokemon(opp_party);
            setTimeout(() => {
                $(".explanation").text("あいては" + opp_pokemon.name + "をくりだした！");
                updatePokemon(user_pokemon, opp_pokemon);
                updateHP(user_pokemon, opp_pokemon);
                updatestatus(user_party, opp_party);
                enableButtons();
            }, 2000);
        }, 1000);

    }
    return false;
}

function battlestart() {
    disableButtons();
    updateHP(user_pokemon, opp_pokemon);
    updatePokemon(user_pokemon, opp_pokemon);
    updatestatus(user_party, opp_party);

    $(".explanation").text(user_pokemon.name + "をくりだした！");
    setTimeout(() => {
        $(".explanation").text("あいては" + opp_pokemon.name + "をくりだした！");
        enableButtons();
    }, 2000);

    movebuttons.forEach((btn, index) => {
        btn.onclick = () => {
            disableButtons();

            let first, second;
            if (user_pokemon.s >= opp_pokemon.s) {
                // 先行と後攻を決めている
                first = { p: user_pokemon, o: opp_pokemon, isUser: true };
                second = { p: opp_pokemon, o: user_pokemon, isUser: false };
            } else {
                first = { p: opp_pokemon, o: user_pokemon, isUser: false };
                second = { p: user_pokemon, o: opp_pokemon, isUser: true };
            }

            // 
            takeTurn(first.p, first.o, first.isUser ? index : Math.floor(Math.random() * first.p.moves.length));
            // 
            if (fainted(first.o) === true) {


                let battleContinues = processFaint(!first.isUser);
                if (battleContinues === false) {
                    setTimeout(() => { enableButtons(); }, 3000);
                }

                return;


            }

            // 
            setTimeout(() => {
                takeTurn(second.p, second.o, second.isUser ? index : Math.floor(Math.random() * second.p.moves.length));
                if (fainted(second.o)) {
                    setTimeout(() => {
                        processFaint(!second.isUser);
                    }, 1000)
                } else {
                    setTimeout(() => { enableButtons(); }, 1000);
                }
            }, 2000);
        };
    });
}
$(document).one("click", function (event) {
    battlestart();
    document.getElementById("bgm_pokemon_battle").play();
});
