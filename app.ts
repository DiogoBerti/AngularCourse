let message: string = "Help Me Your Fucker";

console.log(message);
// As variaveis tem tipagem no typescript...
let episode: number = 4;

console.log("This is episode: " + episode);
episode = episode + 1;
console.log("Next episode: " + episode);

// Essa variavel recebe como tipo o "any", ou seja, qqr valor pode ser setado.
let favoriteDroid;
favoriteDroid = "BB-8";
console.log(favoriteDroid);


let isEnoughToBeatMF = function(parsecs: number): boolean{
	return parsecs < 12;
};

let distance = 11;

console.log(`Is ${distance} parsecs enough to beat millenium Falcon? ${isEnoughToBeatMF(distance) ? 'Yes': 'No'}`);