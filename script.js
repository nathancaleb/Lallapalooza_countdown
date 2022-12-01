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