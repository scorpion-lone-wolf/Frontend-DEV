// create a prototypal inheritance hierarchy

function Parent(name, age) {
    this.name = name;
    this.age = age;
}

Parent.prototype.getAge = function () {
    return this.age;
};
Parent.prototype.getName = function () {
    return this.name;
};

function Child(name, age, height) {
    Parent.call(this, name, age);
    this.height = height;
}

// creating inheritance hierarchy
Child.prototype = Object.create(Parent.prototype);
Child.prototype = Object.create(Parent.prototype);

Child.constructor = Child;

Child.prototype.getHeight = function () {
    return this.height;
}

const obj1 = new Child("rahul", 26, 5.4);
console.log(obj1.getName());
console.log(obj1.getAge());
console.log(obj1.getHeight());
console.log(obj1.__proto__);



