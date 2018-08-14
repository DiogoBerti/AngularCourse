class Spacecraft{

	// Construtor reduzido (enxuto)
	// define que a classe possui um atributo propulsor
	// que recebe uma string...
	constructor(public propulsor: string){}

	// Atributos de classe não precisam da keyword function...
	jumpIntoHyperSpace(){
		console.log(`Entering Hyperspace with ${this.propulsor}`);
	};
};

let ship = new Spacecraft('Hyperdrive');
ship.jumpIntoHyperSpace();


class MilleniumFalcion extends Spacecraft implements Containership{
	
	cargoContainers: number;

	constructor(){
		super('Hyperdrive');
		this.cargoContainers = 4;
	};

	jumpIntoHyperSpace(){
		if(Math.random() >= 0.5){
			super.jumpIntoHyperSpace();
		}else{
			console.log(`Failed!`);
		};
	};
};

let millenium = new MilleniumFalcion();
millenium.jumpIntoHyperSpace();


interface Containership{

	cargoContainers: number;

};

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;

console.log(`Is Falcon good for the job? ${goodForTheJob(millenium)}`);
