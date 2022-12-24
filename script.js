function start() {
    document.querySelector(".start-screen").classList.add('disable');
}

let questions = {
    question1 : {
        titulo: "Qual é a formula da água?",
        alternativas: {
            a: "H02",
            b: "H20",
            c: "02H",
            d: "0H2",
        },
        resposta: alternativas.b
    },

    question2: {
        titulo: "Quem descobriu o Brasil?",
        alternativas: {
            a:"Cristovão Colombo",
            b:"Teodoro da Fonseca",
            c:"Alvarez Cabral",
            d:"Abhraam Lincon",
        },
        resposta: alternativas.c,
    },

    question3: {
        titulo: "Qual é o reino dos animais?",
        alternativas: {
            a:"Animalia",
            b:"Plantae",
            c:"Fungi",
            d:"Protista",
        },
        resposta: alternativas.a,
    },

    question4: {
        titulo: "Quem pisou na lua?",
        alternativas: {
            a:"Klark Kent",
            b:"Neil Armstrong",
            c:"Nicholas Tesla",
            d:"Albert Einstein",
        },
        resposta: alternativas.b,
    },
}