
function numberToNumerals (numberInput){
    let convertedNumber = '';

    const roman = {1:'I',2:'II',3:'III',4:'IV',5:'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI' }
    // const romanNumerals: {1: 'I', 2: 'V', 3: 'X'};

    convertedNumber = roman[numberInput];

    for(let i = 0; i < )
    // for (let i = 1; i <= numberInput; i++){
    //     convertedNumber = convertedNumber + 'I';
    // }
    //
    // if (numberInput == 4) {
    //     convertedNumber = 'IV';
    // }
    console.log(convertedNumber)
    return convertedNumber;

}

numberToNumerals(1)
numberToNumerals(2)

module.exports = numberToNumerals;
