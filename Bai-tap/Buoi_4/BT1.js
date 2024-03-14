// This
function global() {
    console.log(this + "<br/>");
}

var o = {
    "local": function () {
        console.log(this + this.x + "<br/>");
    },
    "x": 10
};

global;
o.local;

var student = {
    name: "Nguyen Phuc Hiep",
    getname: function () {
        console.log(this.name);
        return this.name;
    }
};

var _deStudent = student.getname();

// call & apply
var person1 = { name: 'Nhat Minh', age: 12 };
var person2 = { name: 'Huu Trung', age: 32 };

var sayHello = function () { console.log('Hello, ' + this.name) };
var sayGoodbye = function () { console.log('Goodbye, ' + this.name) };

sayHello.call(person1);
sayHello.apply(person2);

// chain
function step1() {
    console.log(te);
}


function step2() {
    te = 2;
    step1();
}

var te;
step2();

var te = "Global variables";

// bind
var checkNumericRange = function (value) {
    if (typeof (value) != 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
}

var range = { minimum: 10, maximum: 20 };
var range1 = { minimum: 15, maximum: 20 };

var x = checkNumericRange.bind(range);
console.log(x(10), x(21));
var y = checkNumericRange.bind(range1);
console.log(y(10), y(15));

// lexical
function fOuter() {
    var x = 'Hello';
    function fInter() {
        x = 'world';
    }
    fInter();
    return x;
}

console.log(fOuter());

var myFunction = function () {
    var name = 'Ha Thi';
    var myOtherFunction = function () {
        console.log('I am ' + name);
    };
    console.log(name);
    myOtherFunction();
}

myFunction();

// closures
function outerF() {
    var x = 'World';
    function interFsetX(val) {
        x = val;
        return x;
    }
    return interFsetX;
}

var a = outerF();
console.log(a("Hello"));

var sayBye = function (name) {
    var text = 'Bye, ' + name;
    return () => {
        console.log(text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe;

var registrations = {
    class: "Databases",
    students: [
        { studentId: "001", name: "Mai Ha Thi" },
        { studentId: "002", name: "Nguyen Van A" },
        { studentId: "003", name: "Mai An Thuy" }],
    clickEnrollment: function () {
        const _this = this;
        this.students.forEach(function (student) {
            console.log(student.name + " already enrolled class " + _this.class);
        })
    }
};

registrations.clickEnrollment();

// curry
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3));

function addCurries(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(addCurries(1)(2)(3));

const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);
console.log(ad3);

// class
class square {
    constructor(width) {
        this.width = width;
    }
    getArea() {
        console.log(`Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}

class cube extends square {
    constructor(width) {
        super(width);
    }

    squareArea = this.getArea();

    getVolumn() {
        console.log(`Volumn of this ${this.squareArea * this.width}`);
        return this.squareArea * this.width;
    }
}

var myCube = new cube(5);
myCube.getVolumn;