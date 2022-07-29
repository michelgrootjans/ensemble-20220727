function numberToNumerals(numberInput) {
    let convertedNumber = '';

    const roman = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII', 13: 'XIII'}

    if (numberInput > 1 && numberInput < 4) {
        return 'I'.repeat(numberInput);
    }

    if (numberInput > 5 && numberInput < 9) {
        return 'V' + 'I'.repeat(numberInput - 5)
    }

    for(let i in roman) {
        console.log(i)
    }
    convertedNumber = roman[numberInput];
    return convertedNumber;

}

numberToNumerals(1)
numberToNumerals(2)

module.exports = numberToNumerals;
