// 1. Напишите цикл for, который изменяет массив животных, делая их прекрасными. Например, если есть следующий массив:
// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]; то ваш цикл должен сделать его таким:
// ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное", "Комодский варан - прекрасное животное"]


let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]
let lovely = " - прекрасное животное"

for (i=0; i<animals.length; i++) {
    (animals[i] = animals[i]+lovely)
}

console.log(animals)




// 2. Напишите генератор случайных строк. Для этого вам понадобится строка со всеми буквами алфавита:
// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"


let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"

let randomString = ""

while (randomString.length<=6)
{
    randomString+=alphabet[Math.floor(Math.random() * alphabet.length)]
}
console.log(randomString)




// 3. Переведите англоязычный текст на «хакерский язык». 
// Встретив букву «a», добавьте к результирующей строке «4». Встретив «e», добавьте «3», встретив «i», добавьте «1», а встретив «o» — «0». 
// В противном случае просто добавляйте к результату исходный символ.


let input = "javascript is awesome"
let output = ""

for (i=0; i<input.length; i++) {
      if (input[i]==="a"){
          output=output+4                              
      }
      else if (input[i]==="e"){
        output+=3                               
      }
      else if (input[i]==="i"){
        output+=1                               
      }
      else if (input[i]==="o"){
      output+=0                               
      }
      else {output += input[i]
      }
    }

console.log(output)
