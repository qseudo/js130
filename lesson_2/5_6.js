function Pet(name, image) {
  this.name = name;
  this.image =  image;
} // function declaration & function body hoisted

let Image;
var catImage; // undefined
var pudding; // undefined

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
}; // instance method on Pet type

Image = class {
  constructor(file) {
    this.file = file;
  }
}; // class declaration hoisted, but not the definition

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);