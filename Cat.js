function Cat(name) {
	this.name = name;
	this.dead = false;
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}
 module.exports = Cat;
