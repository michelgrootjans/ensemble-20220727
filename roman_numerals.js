function numberToNumerals(numberInput) {
    const roman = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X'}

    if (Object.hasOwn(roman, numberInput)) {
        return roman[numberInput];
    }

    if(numberInput > 10) return numberToNumerals(10) + numberToNumerals(numberInput - 10)

    return numberToNumerals(numberInput - 1) + numberToNumerals(1);

}

numberToNumerals(13)


module.exports = numberToNumerals;
