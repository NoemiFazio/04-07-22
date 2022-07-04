// Spread:
// scrivere una funzione che unisce le proprietà di due oggetti

const obj1 = { foo: "bar" };
const obj2 = { name: "Mio nome" };
const somma = (a, b) => {
  return { ...a, ...b };
};
console.log(somma(obj1, obj2));

// obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }
// Opzionale Miglioriamo la funzione e aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
// const obj1 = {foo: 'bar'};
// const obj2 = {name: 'Mio nome'};
// // obj1 + obj2 = { foo: 'bar', name: 'Mio nome', altraProp: 'value' };

const somma2 = (a, b, c) => {
  return { ...a, ...b, c };
};

const surname = "Mio cognome";
somma2.value = surname;
console.log(somma2(obj1, obj2, somma2.value));

console.clear();

/////////////////////////////////////////////////////////////////////

// Destructuring:
// Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructuring per prendere la length

const shoppingBag = [
  "evidenziatore",
  "quaderno",
  "pennello",
  "raccoglitore",
  "matita",
].filter((string) => {
  return string.length > 10;
});

console.log(shoppingBag);
console.clear();
////////////////////////////////////////////////////////////////////////7
// Get/Set
// Creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:

// leggere _products nel getter
// sovrascrivere _products nel setter
// contestualmente quando usiamo il setter mostriamo tutti i prodotti in innerHTML di body
// shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
// // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>

// const shop = {
//   _products: [],
//   get products() {

//   },
//   set products(val) {

//   }
// }

let shop = {
  _products: [
    { id: 1, name: "TV", price: 80 },
    { id: 2, name: "PC", price: 30 },
  ],

  get getProd() {
    return this._products;
  },
  set setProd(val) {
    return (this._products = [...this._products, val]);
  },
};

console.log(shop.getProd);
shop.setProd = { id: 3, name: "Lavatrice", price: 150 };
console.log(shop.getProd);

const body = document.querySelector("body");
body.innerHTML = `
<h1>Shopping list</h1>
<ul>
<li> <p>Prodotto n° ${shop.getProd[0].id}</p>  <p> Nome: ${shop.getProd[0].name}</p> <p>Prezzo: ${shop.getProd[0].price}</p> </li>
<li> <p>Prodotto n°  ${shop.getProd[1].id}</p>  <p> Nome: ${shop.getProd[1].name}</p> <p>Prezzo: ${shop.getProd[1].price}</p> </li>
<li> <p>Prodotto n°  ${shop.getProd[2].id}</p>  <p> Nome: ${shop.getProd[2].name}</p> <p>Prezzo: ${shop.getProd[2].price}</p> </li>
</ul>`;
