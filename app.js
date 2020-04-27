function gID(name) {
    return document.getElementById(name);
}

class Osoba {
    constructor() {
        this._imie;
        this._nazwisko;
    }

    wprowadz() {
        this._imie = gID("uczen_imie").value;
        this._nazwisko = gID("uczen_nazwisko").value;
    }

    wypisz(w) {
        if(w == 'u') {
            gID("lista_uczniowie").innerHTML += `<div>${this._imie} ${this._nazwisko}</div>`;
        } else if(w=='n') {
            gID("lista_nauczyciele").innerHTML += `<div>${this._imie} ${this._nazwisko}</div>`;
        }
    }
}

class Uczen extends Osoba {
    constructor() {
        super();
        this._klasa;
        this._numerDziennika;
    }

    wprowadz_ucznia() {
        this.wprowadz();
        this._klasa = gID("uczen_klasa").value;
        this._numerDziennika = gID("uczen_numer").value;
    }

    wypisz_ucznia() {
        console.log("test");
        this.wypisz("u");
        console.log("test2");
        gID("lista_uczniowie").innerHTML += `<div>Klasa ${this._klasa}, numer ${this._numerDziennika}</div>`;
    }
}

class Nauczyciel extends Osoba {
    constructor() {
        super();
        this._przedmiot;
        this._wychowawca;
    }

    wprowadz_nauczyciela() {
        this.wprowadz();
        this._przedmiot = gID("nauczyciel_przedmiot").value;
        this._wychowawca = gID("nauczyciel_klasa").value;
    }

    wypisz_nauczyciela() {
        this.wypisz("n");
        gID("lista_nauczyciele").innerHTML += `<div>${this._przedmiot}, Wychowawca ${this._wychowawca}</div>`;
    }
}


let uczniowie = [];
gID("uczen_dodaj").addEventListener("click", () => {
    let u = new Uczen();
    u.wprowadz_ucznia();
    console.log(u);
    uczniowie.push(u);

    refresh();
});

let nauczyciele = [];
gID("nauczyciel_dodaj").addEventListener("click", () => {
    let n = new Nauczyciel();
    n.wprowadz_nauczyciela();
    nauczyciele.push(n);

    refresh();
});



function refresh() {
    gID("lista_uczniowie").innerHTML = "";
    gID("lista_nauczyciele").innerHTML = "";
    for(let i=0;i<uczniowie.length;i++) {
        uczniowie[i].wypisz_ucznia();
    }
    
    for(let i=0;i<nauczyciele.length;i++) {
        nauczyciele[i].wypisz_nauczyciela();
    }
}
