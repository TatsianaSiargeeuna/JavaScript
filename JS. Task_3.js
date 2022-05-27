/*
1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1.
*/

let number = 2
let x=1
while (x<=10) {
    console.log(number**x)
    x++
}


/*
2. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2.
*/

let x = 1
let number = 2
const exponentiation = function (power) {
    while (x<=power) {
    console.log(number**x)
    x++
    }
}

exponentiation(10)


/*
3. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее.
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

for (let i=0; i<6; i++)
        {let smile = ""

    for (let j=0; j<i; j++){
 smile += ":)"}

console.log(smile)}


/*
4. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода.
*/

const printSmiles = function(stroka, numberOfRows) {

    for (let i=0; i<=numberOfRows; i++){
            let smile = ""

        for (let j=0; j<i; j++){
            smile += stroka}

console.log(smile)}
}

printSmiles(":)",6)


/*
5.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
В консоли: "Слово (word) состоит из  (число) гласных и (число) согласных букв"
Проверки: 'case', 'Case', 'Check-list'
*/

const checkLetters = function(word) {
    word=word.toLowerCase()
    
var consonants = 0
var vowels = 0
var lettersVowels = ["a", "e", "i", "o", "u", "y"]
var lettersConsonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]

    for (i=0; i<word.length; i++){
        for(j=0; j<lettersVowels.length; j++){
        if (word[i] === lettersVowels[j]) {
            vowels++
            break
       }
    }   
        for (k=0; k<lettersConsonants.length; k++){
        if (word[i] === lettersConsonants[k]) {
        consonants++
        break
    }
  } 
}
console.log("Слово " + word + " состоит из " + consonants + " гласных и " + vowels + " согласных букв.")
}

checkLetters("case")
checkLetters("Case")
checkLetters("Check-list")


/*
6. Написать функцию, которая проверяет, является ли слово палиндромом.
Проверки: 'abba', 'Abba'
*/

const isPalindrome = function(word) {
    
    var reverseWord = ""
    for (i = word.length - 1; i >= 0; i--){
        reverseWord += word[i];
    }
    
    if (word.toLowerCase() === reverseWord.toLowerCase()){
        console.log(word + " is a palindrome")
    }else{
        console.log(word + " is not a palindrome")
    }

}

isPalindrome("abba")
isPalindrome("Abba")
isPalindrome("ab12ba")
