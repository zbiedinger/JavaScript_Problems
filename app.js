

function updateTextOnClick(){
    document.getElementById("myText").innerHTML = "Goodbye World";
    for(let i = 0; i <10 ;i++){
        console.log(i)
    }
    let gregsVariable = 1 + "1";
    console.log(gregsVariable);
}

function reverseString(){
    let forwardsWord = document.getElementById("probOne").innerHTML;
    let reverseWord = "";
    for (let i = forwardsWord.length - 1; i >= 0; i--)
    {
        reverseWord += forwardsWord[i];
    }
    document.getElementById("probOne").innerHTML = reverseWord;
}

function capitalizeLetters(){
    let lowerCaseWords = document.getElementById("probTwo").innerHTML;
    let capitalizedWords = "";
    capitalizedWords += lowerCaseWords.charAt(0).toUpperCase();
    
    for (let i = 1; i < lowerCaseWords.length; i++) {
        if (lowerCaseWords[i] === ' ') {
            capitalizedWords += lowerCaseWords[i];
            capitalizedWords += lowerCaseWords.charAt(i + 1).toUpperCase();
            i++;
        } else if(lowerCaseWords[i] !== ' '){
            capitalizedWords += lowerCaseWords[i];
        }
    }
    document.getElementById("probTwo").innerHTML = capitalizedWords;
}

function compressString(){
    let uncompressedWord = document.getElementById("probThree").innerHTML;
    let compressedWord = "";
    let counter = 1;

    for (let i = 0; i < uncompressedWord.length; i++) {
        if (i !== uncompressedWord.length-1) {
            if (uncompressedWord[i] === uncompressedWord[i + 1]) {
                counter++;
            } else {
                compressedWord = compressedWord + counter + uncompressedWord[i];
                counter = 1;
            } 
        } else {
            compressedWord = compressedWord + counter + uncompressedWord[i];
        }           
    }
    document.getElementById("probThree").innerHTML = compressedWord;
}

function isPalindrome() {
    let mightBePalindrome = document.getElementById("probFour").innerHTML;

    let j = mightBePalindrome.length - 1;
    let notPalindrome = true;

    for (i = 0; i < mightBePalindrome.length; i++) {
        if (mightBePalindrome[i] === mightBePalindrome[j]) {
            j--;
        }
        else {
            document.getElementById("probFour").innerHTML = document.getElementById("probFour").innerHTML + " is not a palindrome.";
            notPalindrome = false;
            break;
        }
    }

    if (notPalindrome) {
        document.getElementById("probFour").innerHTML = document.getElementById("probFour").innerHTML + " is a palindrome."
    }
}

function isInputPalindrome(mightBePalindrome) {
    let j = mightBePalindrome.length - 1;
    let notPalindrome = true;

    for (i = 0; i < mightBePalindrome.length; i++) {
        if (mightBePalindrome[i] === mightBePalindrome[j]) {
            j--;
        }
        else {
            document.getElementById("probFourC").innerHTML = "Not a palindrome.";
            notPalindrome = false;
            break;
        }
    }

    if (notPalindrome) {
        document.getElementById("probFourC").innerHTML = "Palindrome!"
    }
}

function isHappyNumber(isHappy) {
    let remander = 0;
    let sum = 0;
    while (sum != 1 && sum != 4) {
        remander = 0;
        sum = 0;

        while (isHappy > 0) {
            remander = isHappy % 10;
            sum = sum + (remander ** 2)
            isHappy = isHappy / 10;
        }
    }

    if (sum == 1) {
        document.getElementById("probFive").innerHTML = "Happy Number"
    } else {
        document.getElementById("probFive").innerHTML = "Not Happy Number"
    }
}

// function firstPrimes(){
//     for (let i = 0; i < 100; i++) {
//         let isPrime = false;
//         for (let j = 0; j < array.length; j++) {
//             if (i%j===0 && j!==i) {
//                 isPrime = true;
//             }
//         }
//         if (isPrime ===false) {
//             document.getElementById("probFive").innerHTML = 
//         }
//     }
// }