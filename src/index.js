module.exports = function toReadable (number) {
    var output = '';
    var numToTen = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    var numDec = ['','ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var numToTwenty = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number == 0){
    output = 'zero';
    }
    else if (number <= 10){
      output = numToTen[number];
    }
    else if (number < 100){
        if(number <20 && number > 10){
            output = numToTwenty[number%10];
        }
        else{
            output = numDec[(number - (number%10))/10] + ' ' + numToTen[(number%10)];
        }
    }
    else if (number<1000){
      output = numToTen[((number - (number%100))/100)] + ' hundred ';
      if ( (number%1000)%100 < 20 && (number%1000)%100 > 10)
      {
        output += numToTwenty[(number%100)%10];
      }
      else {
        output += (numDec[((number%100) - ((number%100)%10))/10] + ' '+ numToTen[((number%100)%10)]).trim();
      }
    }
    return   output.trim();
  }
