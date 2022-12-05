/* #################### SCRIPT CONTADOR #################### */
// Variavel recebendo a data/hora final do contador
const countDownFinal = new Date("nov 20, 2023 20:00:00").getTime();

// Atualizar o contador a cada 1 segundo
let x = setInterval(function() {
    
    // Variavel recebe data e hora atual
    let now = new Date().getTime();
        
    // Encontra o tempo restante entre a data/hora final e a data/hora atual
    let timeDiference = countDownFinal - now;
        
    // Calculo de dias, horas, minutos e segundos
    let days = Math.floor(timeDiference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiference % (1000 * 60)) / 1000);

    // Função para adicionar 0 esquerda. EX: 02
    function leftPad(value, totalWidth, paddingChar) {
        var length = totalWidth - value.toString().length + 1;
        return Array(length).join(paddingChar || '0') + value;
      };

    // Exporta o resultado pra cada tag com id da respectiva variavel executando a função 0 esquerda.
    document.getElementById("count_days").innerHTML = leftPad(days,2);
    document.getElementById("count_hours").innerHTML = leftPad(hours,2);
    document.getElementById("count_minutes").innerHTML = leftPad(minutes,2);
    document.getElementById("count_seconds").innerHTML = leftPad(seconds,2);
    
    // EXPORTAR PARA TAG UNICA
    // document.getElementById("countdown").innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;
        
    // Quando o contador finalizar, apresentar a mensagem.
    if (timeDiference < 0) {
        clearInterval(x);
        const colon = document.getElementById("countdown_id");
        colon.remove();
        document.getElementById("finish").innerHTML = `<a href="https://www.youtube.com/watch?v=KOmbL5Y6A0o" target="_blank">IT'S FIGHT TIME!!</a>`;
    }
    
}, 1000);

/* #################### SCRIPT MODAL #################### */
// Pegar o modal de inscrição
const modal = document.getElementById("modal_subscribe");

// Pega o botão de inscrição que ira abrir o modal de inscrição
const sub_button = document.getElementById("subscribe_button");

// Pega o botão que fecha o modal de inscrição
const close_modal_button = document.getElementsByClassName("close_modal")[0];

// Pega o botão de envio do modal de inscrição
const form_send_button = document.getElementById("form_send");

// Pega o modal de thankyou
const thankyou_modal = document.getElementById("thankyou_box");

// Pega o botão que fecha o modal de agradecimento
const close_thankyou_button = document.getElementsByClassName("close_modal")[1];

// Quando clicar no botão de subscribe, o modal irá ficar visivel (abrir)
sub_button.onclick = function() {
    modal.style.display = "block";
}

// Quando usuario clicar no (x), o modal deixara de ficar visivel (fechar)
close_modal_button.onclick = function() {
    modal.style.display = "none";
}


/* #################### SCRIPT FORMULARIO #################### */

form_send_button.onclick = function(){

    // Atribuindo o value dos inputs para as respectivas variaveis
    let fname_value = document.getElementById("subscribe_first_name").value;
    let lname_value = document.getElementById("subscribe_last_name").value;
    let mail_value = document.getElementById("subscribe_mail").value;

    // Atribuindo o os inputs para as respectivas variaveis
    const fname_input = document.getElementById("subscribe_first_name");
    const lname_input = document.getElementById("subscribe_last_name");
    const mail_input = document.getElementById("subscribe_mail");
    
    // Atribuindo o elemento que ira apresentar erro para as respectivas variaveis
    const message_fname = document.getElementById("erro_message_first_name");
    const message_lname = document.getElementById("erro_message_last_name");
    const message_mail = document.getElementById("erro_message_mail");
    
    // Variaveis de validação, como todas estão invalidas, recebem false
    let fname_validation = false;
    let lname_validation = false;
    let mail_validation = false;

    // Atribui o patern dos inputs as respectivas variaveis
    let pattern_fname = fname_input.getAttribute("pattern");
    let pattern_lname = lname_input.getAttribute("pattern");
    let pattern_mail = mail_input.getAttribute("pattern");
    
    // Função para validar o parttern do primeiro nome
    function check_pattern_fname(){
        let teste_fname = new RegExp(pattern_fname);
        
        if(teste_fname.test(fname_value)){
            return true;
        }else{
            return false;
        }
    }

    // Função para validar o parttern do ultimo nome
    function check_pattern_lname(){
        let teste_lname = new RegExp(pattern_lname);
        
        if(teste_lname.test(lname_value)){
            return true;
        }else{
            return false;
        }
    }

    // Função para validar o parttern do email
    function check_pattern_mail(){
        let teste_mail = new RegExp(pattern_mail);
        
        if(teste_mail.test(mail_value)){
            return true;
        }else{
            return false;
        }
    }

    // Validando se o campo primeiro nome esta digitado corretamente
    try{
        if(fname_value == "" || check_pattern_fname() != true) {throw "<b>* Please, type your first name correctly.</b>";}
        else{
            fname_validation = true;
            message_fname.innerHTML = ""
        }
    }
    catch(err_fname){
        message_fname.innerHTML = err_fname;
    }

    // Validando se o campo ultimo nome esta digitado corretamente
    try{
        if(lname_value == "" || check_pattern_lname() != true) {throw "<b>* Please, type your last name correctly.</b>";}
        else{
            lname_validation = true;
            message_lname.innerHTML = "";
        }
    }
    catch(err_lname){
        message_lname.innerHTML = err_lname;
    }

    // Validando se o campo e-mail esta digitado corretamente
    try{
        if(mail_value == "" || check_pattern_mail() != true) {throw "<b>* Please, type your e-mail address correctly.</b>";}
        else{
            mail_validation = true;
            message_mail.innerHTML = "";
        }
    }
    catch(err_mail){
        message_mail.innerHTML = err_mail;
    }

    // Se as validações estiverem ok, fecha o modal form e abre o modal thankyou
    if(fname_validation && lname_validation && mail_validation == true){
            modal.style.display = "none";
            thankyou_modal.style.display = "block";
    }
}

// Quando usuario clicar em qualquer lugar da tela, o modal de thankyou deixara de ficar visivel (fechar)

window.onclick = function(event) {
    if (event.target == thankyou_box) {
        // thankyou fica invisivel (fecha)
        thankyou_modal.style.display = "none";
      
       //Declarados para limpar os inputs
        let fname_input = document.getElementById("subscribe_first_name");
        let lname_input = document.getElementById("subscribe_last_name");
        let mail_input = document.getElementById("subscribe_mail");
        //limpando inputs
        fname_input.value = '';
        lname_input.value = '';
        mail_input.value = '';
    }
  }

document.addEventListener('keydown', function(event){
    // Declarando variavel que ira receber o apertar da tecla "ESC"
    const isEscKey = event.key === "Escape"        
        if (isEscKey){
            // thankyou fica invisivel (fecha)
            thankyou_modal.style.display = "none";
      
            //Declarados para limpar os inputs
            let fname_input = document.getElementById("subscribe_first_name");
            let lname_input = document.getElementById("subscribe_last_name");
            let mail_input = document.getElementById("subscribe_mail");
            //limpando inputs
            fname_input.value = '';
            lname_input.value = '';
            mail_input.value = '';    
    }
})