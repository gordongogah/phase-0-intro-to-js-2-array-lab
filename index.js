// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

//cats.push("Cat");
//cats.unshift("Cat")
//console.log(cats)
function destructivelyAppendCat(name){
   name = cats.push("Cat")
};

function destructivelyPrependCat(name){
    name = cats.unshift("Cat")
};
function destructivelyRemoveLastCat(){
    cats.pop()
};
function destructivelyRemoveFirstCat(){
    cats.shift()
};
function appendCat(name){
    name = 'cat'
}
function removeLastCat(){
    cats.pop('cat')
};
function removeFirsttCat(){
    cats.shift()
}
//console.log(destructivelyAppendCat)
//console.log(typeof(cats))
