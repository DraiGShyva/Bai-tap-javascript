var name = 'A';

function SayHi() {
    console.log('Hi ' + this.name);
}

module.exports = { name, SayHi };