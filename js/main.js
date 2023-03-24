

// 1. Button #dodaj - po jego kliknięciu w paragrafie powinien pojawić się przykładowy tekst.
// 2. Button #usun - po kliknięciu tekst w paragrafie ma znikać


let bttAdd = document.getElementById("dodaj")
let bttDel = document.getElementById("usun")
let txt1 = "dodano dowolny tekst do paragrafu"


bttAdd.onclick = function() {
    tekst.textContent = txt1;
}      


bttDel.onclick = function() {
    tekst.textContent = "";
}      






