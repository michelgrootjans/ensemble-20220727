
function numberToNumerals (numberInput){
    let convertedNumber = '';

    const roman = {1:'I',2:'II',3:'III',4:'IV',5:'V'}

    convertedNumber = roman[numberInput];

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