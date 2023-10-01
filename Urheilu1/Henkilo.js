class Henkilo {
  constructor(etunimet, sukunimet, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimet = sukunimet;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(linkki, omapaino, laji, saavutukset) {
    super();
    this.linkki = linkki;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  set fName(arvo) {
    this.etunimet = arvo;
  }
  get fName() {
    return this.etunimet;
  }
  set lName(arvo) {
    this.sukunimet = arvo;
  }
  get lName() {
    return this.sukunimet;
  }
  set syntymavuosi(arvo) {
    const pvm = new Date(arvo);
    this._syntymavuosi = pvm;
  }
  get syntymavuosi() {
    return this._syntymavuosi;
  }
}

const urheilija1 = new Urheilija("linkki", "90kg", "Jääkiekko", "MM kultaa");
//asetetaan setterit
urheilija1.fName = "Matti";
urheilija1.lName = "Meikäläinen";
urheilija1.syntymavuosi = "1999-1-1";
//kutsutaan getterit
console.log(urheilija1.fName);
console.log(urheilija1.lName);
console.log(urheilija1.syntymavuosi);
//tulostetaan olio
console.log(urheilija1);

const urheilija2 = new Urheilija();
urheilija2.fName = "Joku";
urheilija2.lName = "Toinen";
urheilija2.syntymavuosi = new Date();
console.log(urheilija2);
