const questions = {
    question1 : {
        titulo: "Qual é a formula da água?",
        alternativas: {
            a: "H02",
            b: "H20",
            c: "02H",
            d: "0H2",
        },
    },

    question2: {
        titulo: "Quem descobriu o Brasil?",
        alternativas: {
            a:"Cristovão Colombo",
            b:"Teodoro da Fonseca",
            c:"Alvarez Cabral",
            d:"Abhraam Lincon",
        },
    },

    question3: {
        titulo: "Qual é o reino dos animais?",
        alternativas: {
            a:"Animalia",
            b:"Plantae",
            c:"Fungi",
            d:"Protista",
        },
    },

    question4: {
        titulo: "Quem pisou na lua?",
        alternativas: {
            a:"Klark Kent",
            b:"Neil Armstrong",
            c:"Nicholas Tesla",
            d:"Albert Einstein",
        },
    },
}

const respostas = {
    resposta1: questions.question1.alternativas.b,
    resposta2: questions.question2.alternativas.c,
    resposta3: questions.question3.alternativas.a,
    resposta4: questions.question4.alternativas.b,
}

let n = 0;
let acertou = 0;
let errou = 0;

function start() {
    document.querySelector(".start-screen").classList.add('disable');
    document.querySelector("#quiz").classList.remove('disable');
    document.querySelector("#quiz").classList.add('quiz');

    n = 1;
}

function jogo() {  
    if (n = 1){
            let titulo = questions.question1.titulo;
            let qst1 = questions.question1.alternativas.a;
            let qst2 = questions.question1.alternativas.b;
            let qst3 = questions.question1.alternativas.c;
            let qst4 = questions.question1.alternativas.d;
            console.log(qst1);
            document.querySelector(".pergunta-title").innerHTML = titulo;
            document.querySelector("#alter1").innerText = qst1;
            document.querySelector("#alter2").innerText = qst2;
            document.querySelector("#alter3").innerText = qst3;
            document.querySelector("#alter4").innerText = qst4;
        
    }
}

jogo();

function tentativa(respostas) {
    let resposta = respostas.resposta1;
    let btn = document.querySelectorAll(".alter");
    for(let i = 0; i <= 4; i++) {
        btn[i].addEventListener("click", function (e) {
            let enunciado = this.innerHTML;
            if(enunciado == resposta) {
                btn[i].classList.remove("alter");
                btn[i].classList.add("correct");
                acertou = 1;
            }
            else {
                btn[i].classList.remove("alter");
                btn[i].classList.add("wrong");
                errou = errou + 1;
            }
            if(errou >= 2) {
                alert("vc perdeu as chances");
                document.querySelector(".start-screen").classList.remove("disable");
                document.querySelector("#quiz").classList.remove("quiz");
                document.querySelector("#quiz").classList.add("disable");
            }
        })
    }
    
}

tentativa(respostas);