// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
   }

function destructivelyRemoveLastCat(){
    cats.pop();
    
}

function destructivelyRemoveFirstCat(){
 cats.shift();


}//solutions
function destructivelyPrependCat(name){
    cats.unshift(name);
} 
function appendCat(name){
    const appendNewCat = [...cats, name];
    return appendNewCat;
}
function prependCat(name){
    const preNewCat = [name, ...cats];
    return preNewCat;
}
function removeLastCat(){
    const newCats = cats.slice(0, cats.length-1);
    return newCats;
}
function removeFirstCat(){
    const otherCats = cats.slice(1, cats.lengthcdj);
    return otherCats;
}
// Write your solution here
