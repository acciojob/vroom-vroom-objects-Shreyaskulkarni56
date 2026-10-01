// Complete the js code
function Car(make, model) {
		this.make= make;
		this.model= model;
}

car.prototype.getmakemodel=function() {
	return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	car.call(this,make,model);
	this.topspeed=topSpeed;
	
}
SportsCar.prototype = Object.create(car.prototype);
SportsCar.prototype.constructors=SportsCar;

SportsCar.prototype.getTopSpeed=function() {
	return this.topspeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
