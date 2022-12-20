class Ninja {
	constructor(nombre) {
		this.nombre=nombre;
		this.salud=100; //?
		this.velocidad=3;
		this.fuerza=3;
	}

	sayName() {
		console.log(this.name);
	}

	showStats() {
		//console.log(this);
		console.log("Nombre: "+this.nombre+", Salud: "+this.salud+", Velocidad: "+this.velocidad+", Fuerza: "+this.fuerza);
	}

	drinkSake() {
		this.salud+=10;
	}
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

