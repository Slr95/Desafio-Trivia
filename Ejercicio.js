class Pregunta {
    constructor(question, answer, correctAnswer) {
        this.question = question
        this.answer = answer
        this.correctAnswer = correctAnswer
    }
}

const questions = [
    new Pregunta('Cuantas patas tiene un perro?', '2 o 4', 4),
    new Pregunta('Como era el nombre del perro de los Simpson?', 'Ayudante de Santa o Bola de nieve', 'Ayudante de Santa'),
    new Pregunta('Cuantos hijos tiene Homero Simpson?', '3 o 4', '3'),
    new Pregunta('Donde trabaja Homero Simpson?', 'En una planta de energia nuclear o En la taberna de Moe', 'En una planta de energia nuclear'),
    new Pregunta('El cabello de Marge Simpson es azul?', 'Si o no', 'Si')
]

const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

function respuestaCorrecta(correctAnswer, question) {
    let respuesta = prompt('Ingrese su respuesta')

if (respuesta != correctAnswer) {
    return alert("Respuesta incorrecta!")
} else {
    return alert("Respuesta correcta")
}
}

console.log(randomQuestion)
