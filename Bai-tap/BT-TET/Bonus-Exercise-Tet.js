//if-else rút gọn bằng cách dùng toán tử 3 ngôi
{
    const x = 100;

    let result;
    if (x < 1000) {
        result = "nhỏ hơn 1000";
    }
    else
        result = "lớn hơn hoặc bằng 1000";

    console.log(result);

    console.log(x < 1000 ? "nhỏ hơn 1000" : "lớn hơn hoặc bằng 1000");
}
console.clear();

//Shorthand Evaluated
{
    {
        let v1;
        let v2 = v1 != null || v1 != undefined || v1 != '' ? "*rỗng" : v1;
        console.log(v2);
    }

    {
        let v1;
        let v2 = v1 || "*rỗng";
        console.log(v2);
    }
}
console.clear();

//Variable declaration
{
    {
        let x;
        let y;
        let z = 3;
        console.log(x, y, z);
    }

    {
        let x, y, z = 3;
        console.log(x, y, z);
    }
}
console.clear();

//If Comparison
{
    let isTurnOn = true;
    if (isTurnOn = true)
        console.log("true")

    if (isTurnOn)
        console.log("true")
}
console.clear();

//For loop
{
    let sampleArr = ["chó", "mèo"];
    for (let i = 0; i < sampleArr.length; ++i)
        console.log(sampleArr[i]);

    for (let item in sampleArr)
        console.log(sampleArr[item])
}
console.clear();

//For loop with decimal base
{
    for (let i = 0; i < 100000; ++i) { }
    for (let i = 0; i < 1e5; ++i) { }

    1e0 === 1 ? console.log("1e0 === 1") : console.log("1e0 !== 1");
    1e1 === 10 ? console.log("1e1 === 10") : console.log("1e1 !== 10");
    1e2 === 100 ? console.log("1e2 === 100") : console.log("1e2 !== 100");
    1e3 === 1000 ? console.log("1e3 === 1000") : console.log("1e3 !== 1000");
    1e4 === 10000 ? console.log("1e4 === 10000") : console.log("1e4 !== 10000");
    1e5 === 100000 ? console.log("1e5 === 100000") : console.log("1e5 !== 100000");
}
console.clear();

//Object property
{
    const x = 1, y = 2;
    const obj = { x: x, y: y };
    console.log(obj);

    const obj2 = { x, y };
    console.log(obj2);
}
console.clear();

//Rút gọn định nghĩa function (Sử dụng arrow function)
{
    function sayHello() {
        console.log("Hello");
    }
    sayHello();

    const sayHello2 = () => console.log("Hello");
    sayHello2();

    // setTimeout(function () {
    //     console.log("Loaded");
    // }, 2000);

    // setTimeout(() => console.log("Loaded"), 2000);

    let list = ["one", "two"];

    list.forEach(function (item) {
        console.log(item);
    });

    list.forEach(item => console.log(item));
}
console.clear();

//Implicit return (ẩn return đi bằng arrow function)
{
    function getValue(ratio) {
        return ratio * 6.9;
    }
    console.log(getValue(2));

    const getValue2 = ratio => ratio * 6.9;
    console.log(getValue2(2));
}
console.clear();

//Set default value for parameter in function
{
    function getValues(a, b, c) {
        a = a || 3;
        b = b || 4;
        return a * b + c;
    }
    console.log(getValues(undefined, undefined, 2));

    const getValues2 = (a = 3, b = 4, c) => a * b + c;
    console.log(getValues2(undefined, undefined, 2));
}
console.clear();

//Template list
{
    const firstName = "John";
    const lastName = "Doe";

    const welcome = 'You have logged in as ' + firstName + ' ' + lastName + '.';
    console.log(welcome);

    const welcome2 = `You have logged in as ${firstName} ${lastName}.`;
    console.log(welcome2);

    const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
        + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
        + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
        + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
        + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
        + 'irure dolor in reprehenderit in voluptate velit esse.';
    console.log(lorem);

    const lorem2 = `Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse.`;
    console.log(lorem2);
}
console.clear();

//Destructuring Assignment
// {
//     const action = require('lib/action');
//     const service = require('lib/service');

//     const form = this.props.form;
//     const errors = this.props.errors;
//     const entity = this.props.entity;
//     const controller = this.props.controller;
//     const component = this.props.component;
// }

// import { action, service } from 'lib';
// const { form, errors, entity, controller, component } = this.props;

//Spead Operator
{
    //joining arrays
    const odd = [1, 3, 5];
    const nums = [2, 4, 6].concat(odd);
    const nums2 = [2, 4, 6, ...odd];
    const nums3 = [2, ...odd, 4, 6];
    console.log(nums, '\n', nums2, '\n', nums3);

    //cloning arrays
    const arr = [1, 2, 3, 4];
    const arr2 = arr.slice();
    const arr3 = [...arr];
    console.log(arr2, '\n', arr3);
}
console.clear();

//Constraint Param
{
    function sample(param) {
        if (param === undefined) {
            throw new Error('Thiếu tham số!');
        }
        return param;
    }
    console.log(sample(1));
    // console.log(sample());

    madatory = () => {
        throw new Error('Thiếu tham số!');
    }

    sample2 = (param = madatory()) => param;

    console.log(sample2(1));
    // console.log(sample2());
}
console.clear();

//Find() in arrays
{
    const employees = [
        { name: 'EMP A', age: 25 },
        { name: 'EMP B', age: 28 },
        { name: 'EMP C', age: 35 },
    ];

    function findEmp(name) {
        for (let i = 0; i < employees.length; ++i) {
            if (employees[i].name === name) {
                return employees[i];
            }
        }
    }
    console.log(findEmp('EMP B'));

    const emp = employees.find(emp => emp.name === 'EMP B');
    console.log(emp);
}
console.clear();

//Object[key]
{
    function validate(fullName) {
        if (!fullName.fistName) {
            return false;
        }
        if (!fullName.lastName) {
            return false;
        }
        return true;
    }

    console.log(validate({ fistName: 'John', lastName: 'Doe' }));

    const rule = {
        fistName: { required: true },
        lastName: { required: true },
    }

    const validate2 = (rule, values) => {
        for (prop in rule) {
            if (rule[prop].required && !values[prop]) {
                return false;
            }
        }
        return true;
    }

    console.log(validate2(rule, { fistName: 'John' }));
    console.log(validate2(rule, { fistName: 'John', lastName: 'Doe' }));
}
console.clear();

//Bitwise NOT double
{
    console.log(Math.floor(6.9) === 6);
    console.log(~~6.9 === 6);
}
console.clear();