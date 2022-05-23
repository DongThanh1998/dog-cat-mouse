function Dog(name){
	this.name = name;
	this.isDead = false;
	this.stomach = [];
}

Dog.prototype.die = function() {
	this.isDead = true;
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
}

module.exports = Dog;