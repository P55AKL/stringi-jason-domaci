class Auto {
    constructor(marka) {
      this.marka = marka;
    }
    getImam() {
      return 'Imam auto marke' + this.marka ;
    }
  }
  
  class Model extends Auto {
    constructor(marka, model) {
      super(marka);
      this.model = model;
    }
    getImam() {
      return this.present() + ', model je' + this.model;
    }
  }
  var objektAuto = new Auto("Volvo", "S90");
console.log(objektAuto.getImam());



const tecaj1 = {
    "ime_tecaja": "Web programiranje",
    "voditeljica": "Tina Vicković",
    "broj polaznika": 5,
    "grad" : "Split",
    "polaznici": ["Antonio", "Diana", "Marija", "Luka", "Petra"]
}
console.log(tecaj1);
console.log("ime_tecaja", tecaj1.ime_tecaja);

console.log(tecaj1);
console.log("polaznici", tecaj1.polaznici);

tecaj1.trajanje = "tri_mjeseca";
console.log("trajanje", tecaj1.trajanje);

const jsonString = JSON.stringify(tecaj1);
console.log(jsonString);


const jsonObjekt = JSON.parse(jsonString);
console.log(jsonObjekt);


// korištenje biblioteke po izboru
const script = document.createElement('script');
script.src = 'https://unpkg.com/lodash@4.17.21/lodash.min.js';

script.onload = function() {
  const osobe = [
    { ime: 'Ana', prezime: 'Anić', godine: 25 },
    { ime: 'Nika', prezime: 'Katić', godine: 35 },
    { ime: 'Lucija', prezime: 'Matić', godine: 26 },
    { ime: 'Mislav', prezime: 'Latić', godine: 38 },
    { ime: 'Mario', prezime: 'Bosković', godine: 18 },
    { ime: 'Petra', prezime: 'Ružić', godine: 27 },
    { ime: 'Luka', prezime: 'Pranjić', godine: 45 },
    { ime: 'Katarina', prezime: 'Ivkošić', godine: 32 },
    { ime: 'Iva', prezime: 'Pocrnjić', godine: 37 }
  ];

  const starijeOsobe = _.filter(osobe, (osoba) => osoba.godine > 20);
  console.log('Starije osobe:', starijeOsobe);

  const sortiraneOsobe = _.sortBy(osobe, 'ime');
  console.log('Sortirane osobe:', sortiraneOsobe);

  const grupiraneOsobe = _.groupBy(osobe, 'godine');
  console.log('Grupirane osobe:', grupiraneOsobe);
};
document.head.appendChild(script);