// common JS

var module1 = require('module1') // or file name

function fight() {

}

module1.exports = {
    fight: fight
}


// ES6 module

import module1 from 'module1' // default import
import { a } from 'module2' // name import

export function a() { } // named export
export default function b() { }