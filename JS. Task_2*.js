// 4. Преобразовать задание 3 таким образом, чтобы возраст выводился используя функцию prompt в привязанной верстке.

let age_2=18
let age_3=60

let age = prompt("Please enter your age.")
const checkAge = function(age) 
{
age=Number(age)
if(!isNaN(age)){

    if (typeof age == 'number')
        {
        if (age<age_2){
             alert("You don't have access cause your age is "+age+". "+"It's less then "+age_2+".")
            }else if(age>=age_2 && age<age_3){
             alert('Welcome!')
            }else if(age>=age_3){
             alert('Keep calm and look Culture channel')
        }else{
             alert('Technical work')}
        }      
                }
else {
    alert("Error. Not integer value")
     }
}

checkAge(age)
