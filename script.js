const questions = {
    question1 : {
        titulo: "Qual é a fórmula da água?",
        alternativas: {
            a: "HO₂",
            b: "H₂O",
            c: "O₂H",
            d: "OH₂",
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
    //REMOVER O RESTART
    document.querySelector("#restart-modal").classList.remove("restart-modal");
    document.querySelector("#restart-modal").classList.add("disable");  

    //REMOVER A TELA INICIAL
    document.querySelector(".start-screen").classList.add('disable');

    //MOSTRAR O QUIZ
    document.querySelector("#quiz").classList.remove('disable');
    document.querySelector("#quiz").classList.add('quiz');

    //INDICADORES
    n = 1;
    errou = 0;
}

function jogo() {  
    //CASO A AÇÃO ANTERIOR SEJA INICIADA SE FAZ ESSA
    if (n = 1){
        //PEGAR A INFORMAÇÃO DAS PERGUNTAS E ALTERNATIVAS, GUARDANDO EM UMA VARIAVEL
        let titulo = questions.question1.titulo;
        let qst1 = questions.question1.alternativas.a;
        let qst2 = questions.question1.alternativas.b;
        let qst3 = questions.question1.alternativas.c;
        let qst4 = questions.question1.alternativas.d;

        //ADICIONAR AS PERGUNTAS E ALTERNATIVAS NA TELA
        document.querySelector(".pergunta-title").innerHTML = titulo;
        document.querySelector("#alter1").innerText = qst1;
        document.querySelector("#alter2").innerText = qst2;
        document.querySelector("#alter3").innerText = qst3;
        document.querySelector("#alter4").innerText = qst4;
    }
}

jogo();

function tentativa(respostas) {
    //VERIFICAR SE A ALTERNATIVA ESCOLHIDA ESTA CERTA OU ERRADA
    let resposta = respostas.resposta1;
    let btn = document.querySelectorAll(".alter");
    for(let i = 0; i <= 4; i++) {
        btn[i].addEventListener("click", function (e) {
            let enunciado = this.innerHTML;

            //CASO A ALTERNATIVA ESTEJA CERTA
            if(enunciado == resposta) {
                btn[i].classList.remove("alter");
                btn[i].classList.add("correct");
                acertou = 1;
                alert("PARABÉNS!!");

                //VOLTA A TELA INICIAL
                document.querySelector(".start-screen").classList.remove('disable');
                document.querySelector("#quiz").classList.add('disable');
                document.querySelector("#quiz").classList.remove('quiz');

                for(let m = 0; m <= 4; m++) {
                    btn[m].classList.remove("correct");
                    btn[m].classList.add("alter");
                }
            }

            //CASO A ALTERNATIVA ESTEJA ERRADA
            else {
                btn[i].classList.remove("alter");
                btn[i].classList.add("wrong");
                errou = errou + 1;
            }

            //CASO SE TENHA ERRADO MAIS DE 2x RECOMEÇA O JOGO
            if(errou >= 2) {
                document.querySelector("#restart-modal").classList.remove("disable");
                document.querySelector("#restart-modal").classList.add("restart-modal");
                document.querySelector("#quiz").classList.remove("quiz");
                document.querySelector("#quiz").classList.add("disable");
                
                //REMOVE A INDICAÇÃO DE ERRADO DAS ALTERNATIVAS
                for(let m = 0; m <= 4; m++) {
                    btn[m].classList.remove("wrong");
                    btn[m].classList.add("alter");
                }
            }
        },

    )}
    
}

tentativa(respostas);

function exit() {
    //IR PARA A TELA INICIAL
    document.querySelector(".start-screen").classList.remove('disable');
    document.querySelector("#restart-modal").classList.remove('restart-modal');
    document.querySelector("#restart-modal").classList.add('disable');
}