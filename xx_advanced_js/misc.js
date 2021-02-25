var romanToInt = function (s) {
    const mapping = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    let number = null

    stringArray = s.split('')

    while (stringArray.length > 0) {
        const roman = stringArray.shift()
        if (roman === "I" && stringArray[0] === "V") {
            number += mapping["IV"]
            stringArray.shift()
        } else if (roman === "I" && stringArray[0] === "X") {
            number += mapping["IX"]
            stringArray.shift()
        } else if (roman === "X" && stringArray[0] === "L") {
            number += mapping["XL"]
            stringArray.shift()

        } else if (roman === "X" && stringArray[0] === "C") {
            number += mapping["XC"]
            stringArray.shift()
        } else if (roman === "C" && stringArray[0] === "D") {
            number += mapping["CD"]
            stringArray.shift()

        } else if (roman === "C" && stringArray[0] === "M") {
            number += mapping["CM"]
            stringArray.shift()
        }
        else {
            //console.log(roman)
            number += mapping[roman]
        }

    }

    return number


};

console.log(romanToInt("MMMXLV"))