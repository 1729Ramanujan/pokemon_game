var bonus = document.getElementById("bonus");

document.getElementById("bgm_pokemon_battle").volume = 0.35;

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

const keys = Object.keys(pokemontable);
const index = Math.floor(Math.random() * keys.length);
const wildpokemon_id = keys[index]
var opp_party = [duplicate(pokemontable[wildpokemon_id], Math.floor(Math.random() * (21)) + 30)];

function restoredata(saved) {
    user_party = [];
    for (i = 0; i < saved.length; i++) {
        var template = pokemontable[saved[i].id];
        user_party.push(duplicate(template, saved[i].lv));
    }

}

const saved = JSON.parse(localStorage.getItem("saveData"));
if (saved !== null) {
    restoredata(saved)
    savedata = saved.slice();
} else {
    var user_party = [duplicate(squirtleTemplate, 50)];
    var savedata = [
        { id: "squirtle", lv: 50 }
    ]
}
var movebuttons = [
    document.getElementById("move1"),
    document.getElementById("move2"),
    document.getElementById("move3"),
    document.getElementById("move4")
];
var pokemonbuttons = [
    document.getElementById("pokemon1"),
    document.getElementById("pokemon2"),
    document.getElementById("pokemon3"),
    document.getElementById("pokemon4"),
    document.getElementById("pokemon5"),
    document.getElementById("pokemon6")
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
        id: template.id,
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
        moves: template.moves.map(id => ({
            name: movetable[id].name,
            action: movetable[id].action,
        }))
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
    for (let i = 0; i < user.length; i++) {
        var pokemon = document.getElementById(`pokemon${i + 1}`);
        pokemon.textContent = user_party[i].name;
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
            $(".explanation").text("やせいの" + opp_pokemon.name + "はたおれた！");
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
        }, 1000);

    }
    return false;
}

function pokemonSwitch(index) {
    $(".explanation").text(user_pokemon.name + "よくがんばった！！");
    user_pokemon = user_party[index];
    updatePokemon(user_pokemon, opp_pokemon);
    updateHP(user_pokemon, opp_pokemon);
    updatestatus(user_party, opp_party);
    setTimeout(() => {
        $(".explanation").text(user_pokemon.name + "をくりだした！");
    }, 1000)

}

function oppmove() {
    takeTurn(opp_pokemon, user_pokemon, Math.floor(Math.random() * opp_pokemon.moves.length))
    if (fainted(user_pokemon)) {
        setTimeout(() => {
            processFaint(true);
        }, 1000)
    }
}

function pokecatch(ratio) {
    if (Math.random() <= ratio) {
        user_party.push(opp_pokemon);
        console.log(user_party);
        $(".options").removeClass("hidden");
        $(".tool").addClass("hidden");
        savedata.push({ id: opp_pokemon.id, lv: opp_pokemon.lv })
        localStorage.setItem("saveData", JSON.stringify(savedata));
        $(".explanation").text(opp_pokemon.name + "をつかまえた！");
        var enemy = document.getElementById("opppokemon");
        enemy.classList.add("hidden");
        var enemy1 = document.getElementById("enemy");
        enemy1.classList.add("hidden");
        disableButtons();
    } else {
        $(".explanation").text(opp_pokemon.name + "はボールから逃げ出した！");
        setTimeout(() => {
            oppmove();
        }, 2000)
    }
    $(".options").removeClass("hidden");
    $(".tool").addClass("hidden");
}

function battlestart() {
    $(".movebox").addClass("hidden");
    $(".pokemon").addClass("hidden");
    $(".tool").addClass("hidden");
    disableButtons();
    updateHP(user_pokemon, opp_pokemon);
    updatePokemon(user_pokemon, opp_pokemon);
    updatestatus(user_party, opp_party);
    $(".explanation").text("やせいの" + opp_pokemon.name + "がとびだしてきた！");
    setTimeout(() => {
        $(".explanation").text("いけ！" + user_pokemon.name + "!!");
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
                    setTimeout(() => {
                        enableButtons();
                        $(".options").removeClass("hidden");
                        $(".movebox").addClass("hidden");
                    }, 3000);
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
                    setTimeout(() => {
                        enableButtons();
                        $(".options").removeClass("hidden");
                        $(".movebox").addClass("hidden");
                    }, 1000);
                }
            }, 2000);
        };
    });
    // たたかうボタンが押されたとき
    $("#fight").on("click", function (event) {
        $(".movebox").removeClass("hidden");
        $(".options").addClass("hidden");
    });
    // どうぐボタンが押された時
    $("#tools").on("click", function (event) {
        $(".tool").removeClass("hidden");
        $(".options").addClass("hidden");
    });
    // モンスターボールが押された時
    $("#tool1").on("click", function (event) {
        pokecatch(0.3);
    });
    // スーパーボールが押された時
    $("#tool3").on("click", function (event) {
        pokecatch(0.5);
    });
    // ハイパーボールが押された時
    $("#tool5").on("click", function (event) {
        pokecatch(0.7);
    });
    // マスターボールが押された時
    $("#tool2").on("click", function (event) {
        pokecatch(1);
    });
    // きずぐすりが押された時
    $("#tool4").on("click", function (event) {
        user_pokemon.hp += 20;
        if (user_pokemon.hp >= user_pokemon.maxhp) {
            user_pokemon.hp = user_pokemon.maxhp;
        }
        updateHP(user_pokemon, opp_pokemon);
        $(".explanation").text("キズぐすりをつかった！！");
        setTimeout(() => {
            oppmove();
        }, 2000)
        $(".options").removeClass("hidden");
        $(".tool").addClass("hidden");
    });
    // いいきずぐすりが押された時
    $("#tool6").on("click", function (event) {
        user_pokemon.hp += 50;
        if (user_pokemon.hp >= user_pokemon.maxhp) {
            user_pokemon.hp = user_pokemon.maxhp;
        }
        updateHP(user_pokemon, opp_pokemon);
        $(".explanation").text("いいキズぐすりをつかった！！");
        setTimeout(() => {
            oppmove();
        }, 2000)
        $(".options").removeClass("hidden");
        $(".tool").addClass("hidden");
    });
    // ポケモンボタンが押されたとき
    $("#switch").on("click", function (event) {
        $(".pokemon").removeClass("hidden");
        $(".options").addClass("hidden");
    });
    // ポケモンの交代ボタンを押した時
    pokemonbuttons.forEach((btn, index) => {
        btn.onclick = () => {
            $(".options").removeClass("hidden");
            $(".pokemon").addClass("hidden");
            pokemonSwitch(index)
            setTimeout(() => {
                oppmove();
            }, 2000)

        };
    });

}
$(document).one("click", function (event) {
    battlestart();
    document.getElementById("bgm_pokemon_battle").play();
});

