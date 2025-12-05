
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

const keys = Object.keys(legendpokemontable);
const index = Math.floor(Math.random() * keys.length);
const wildpokemon_id = keys[index]
var opp_level = Math.floor(Math.random() * (21)) + 30;
var opp_party = [duplicate(legendpokemontable[wildpokemon_id], opp_level, HPstatusCalculation(legendpokemontable[wildpokemon_id].maxhp, opp_level))];

function restoredata(saved) {
    user_party = [];
    for (i = 0; i < saved.length; i++) {
        var template = legendpokemontable[saved[i].id];
        user_party.push(duplicate(template, saved[i].lv, saved[i].hp));
    }

}
const savedUserParty = JSON.parse(localStorage.getItem("userParty"));
var userPokebox = JSON.parse(localStorage.getItem("userPokebox"));
if (userPokebox === null) {
    userPokebox = [];
}
if (savedUserParty !== null) {
    restoredata(savedUserParty)
    userParty = savedUserParty.slice();
} else {
    var user_party = [duplicate(squirtleTemplate, 50, HPstatusCalculation(squirtleTemplate.maxhp, 50))];
    var userParty = [
        { id: "squirtle", lv: 50, hp: HPstatusCalculation(squirtleTemplate.maxhp, 50) }
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
function duplicate(template, level, hp) {
    return {
        id: template.id,
        name: template.name,
        maxhp: HPstatusCalculation(template.maxhp, level),
        hp: hp,
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
                setTimeout(() => {
                    location.href = "index.html";
                }, 1000)
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
                    setTimeout(() => {
                        location.href = "index.html";
                    }, 1000)
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

function updatePartyData() {
    userParty = [];
    for (i = 0; i < user_party.length; i++) {
        userParty.push({ id: user_party[i].id, lv: user_party[i].lv, hp: user_party[i].hp });
        console.log(userParty);
    }
}

function pokecatch(ratio) {
    $(".tool").addClass("hidden");
    // まず相手のポケモンの姿を隠す
    var enemy = document.getElementById("opppokemon");
    enemy.classList.add("hidden");
    setTimeout(() => {
        if (Math.random() <= ratio) {
            if (user_party.length <= 5) {
                var enemy1 = document.getElementById("enemy");
                enemy1.classList.add("hidden");
                user_party.push(opp_pokemon);
                updatePartyData();
                // 確認用
                console.log(user_party);
                // ローカルストレージの手持ちのところに情報を保存
                localStorage.setItem("userParty", JSON.stringify(userParty));
                var isBox = false;
            } else {
                userPokebox.push({ id: opp_pokemon.id, lv: opp_pokemon.lv, hp: opp_pokemon.hp });
                localStorage.setItem("userPokebox", JSON.stringify(userPokebox));
            }
            $(".explanation").text(opp_pokemon.name + "をつかまえた！");
            setTimeout(() => {
                $(".explanation").text(opp_pokemon.name + "の情報が図鑑に登録されます！");
                setTimeout(() => {
                    if (isBox === false) {
                        $(".explanation").text(opp_pokemon.name + "はてもちに加えられた！");
                    } else {
                        $(".explanation").text(opp_pokemon.name + "はボックスに送られた！");
                    }
                    setTimeout(() => {
                        location.href = "index.html";
                    }, 1000)
                }, 2000)
            }, 1000)
        } else {
            $(".explanation").text(opp_pokemon.name + "はボールから逃げ出した！");
            enemy.classList.remove("hidden");
            setTimeout(() => {
                oppmove();
                $(".options").removeClass("hidden");
                $(".tool").addClass("hidden");
            }, 2000)
        }
    }, 2000)

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
        $(".explanation").text("モンスターボールを使った！！");
        setTimeout(() => {
            pokecatch(0.3);
        }, 1000)
    });
    // スーパーボールが押された時
    $("#tool3").on("click", function (event) {
        $(".explanation").text("スーパーボールを使った！！");
        pokecatch(0.5);
    });
    // ハイパーボールが押された時
    $("#tool5").on("click", function (event) {
        $(".explanation").text("ハイパーボールを使った！！");
        pokecatch(0.7);
    });
    // マスターボールが押された時
    $("#tool2").on("click", function (event) {
        $(".explanation").text("マスターボールを使った！！");
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

