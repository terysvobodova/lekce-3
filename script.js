//------------------prompt--vyskakovací okno------------------
//------------------konverze u čísel------------------------

//const hodinovka = 300
//const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance","160")) //160 jen jako příklad nemusí tam být
//const premie  = Number(prompt("Zadej mimoradnou odmenu v Kc"))
//const plat = (hodinovka * pocetHodin) + premie


//prompt bere typ jako string "10000" a tak připočte čísla jako text 
//musíme z toho udělat číslo Number - konverze hodnot
//NaN hodnota se zobrazí pokud je vložen text místo čísla do rámečku

//document.body.innerHTML = "<p>Pepa Novak si vydelal: " + plat + " Kc</p>"


//----------------objekty ------------------------
// více proměných jde uložit do jednoho objektu: klíč a hodnota oddělují se čárkou
//více knih změním v objektu jen nazev za unikatní ale nemusím ostatní


const kniha = {
    nazev: "Kniha 1",
    autor: "Michal Kucera",
    cena: "400",
    NaSklade: true,
}

const kniha2 = {
    nazev: "Kniha 2",
    autor: "Michal Kucera",
    cena: "450",
    naSklade: true,
}

kniha.autor = "Jana"
kniha.jazyk = "čeština" //přidá se to do objektu a vidím to v consoli, network hledat kniha a tam je i jazyk čeština


document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha2.nazev + ", autor: " + kniha2.autor + "</p>"