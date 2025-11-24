// レックウザのアニメーション関数
function rayquaza() {

    const rayquaza1 = document.getElementById("rayquaza1");
    const rayquaza2 = document.getElementById("rayquaza2");
    const rayquaza3 = document.getElementById("rayquaza3");
    const rayquaza4 = document.getElementById("rayquaza4");

    rayquaza1.classList.add("show");

    setTimeout(() => rayquaza1.classList.remove("show"), 800);

    setTimeout(() => rayquaza2.classList.add("show"), 800);
    setTimeout(() => rayquaza2.classList.remove("show"), 1600);

    setTimeout(() => rayquaza3.classList.add("show"), 1600);
    setTimeout(() => rayquaza3.classList.remove("show"), 2400);

    setTimeout(() => rayquaza4.classList.add("show"), 2400);
    setTimeout(() => rayquaza4.classList.remove("show"), 3200);
}
// ディアルガのアニメーション関数
function dialga() {
    const dialga1 = document.getElementById("dialga1");
    const dialga2 = document.getElementById("dialga2");
    const dialga3 = document.getElementById("dialga3");
    const dialga4 = document.getElementById("dialga4");
    const dialga5 = document.getElementById("dialga5");

    dialga1.classList.add("show");

    setTimeout(() => dialga1.classList.remove("show"), 800);

    setTimeout(() => dialga2.classList.add("show"), 800);
    setTimeout(() => dialga2.classList.remove("show"), 1600);

    setTimeout(() => dialga3.classList.add("show"), 1600);
    setTimeout(() => dialga3.classList.remove("show"), 2400);

    setTimeout(() => dialga4.classList.add("show"), 2400);
    setTimeout(() => dialga4.classList.remove("show"), 3200);

    setTimeout(() => dialga5.classList.add("show"), 3200);
    setTimeout(() => dialga5.classList.remove("show"), 4000);
}