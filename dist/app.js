var message = "Help Me Your Fucker";
console.log(message);
// As variaveis tem tipagem no typescript...
var episode = 4;
console.log("This is episode: " + episode);
episode = episode + 1;
console.log("Next episode: " + episode);
// Essa variavel recebe como tipo o "any", ou seja, qqr valor pode ser setado.
var favoriteDroid;
favoriteDroid = "BB-8";
console.log(favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
