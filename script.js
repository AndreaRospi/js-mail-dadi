
let dadoPc = 0;
let controllo = 0;
let dadoUtente = 0;

let listaMail = ['waltdisney@gmail.com', 'stevejobs@apple.com','andrearossi@hotmail.it','massimilianoperego@libero.com','jacksparrow@libero.com' ]

let inserisciMail = prompt ('inserisci la tua mail per accedere al gioco:')


for ( let i = 0; i < listaMail.length; i++){
    if(listaMail[i] == inserisciMail){
        controllo = 1;
    } 
}

if( controllo == 1){
    alert('mail valida \n accesso al gioco effetuato')
    dadoPc = Math.floor(Math.random() * 6 + 1);
    dadoUtente = Math.floor(Math.random() * 6 + 1);
        if(dadoUtente == dadoPc){
            alert('partita: Pareggiata\n il tuo dado vale: '+ dadoUtente + '\nil dado del computer ' + dadoPc)
        }
        if (dadoUtente > dadoPc){
            alert('partita: Vinta\nil tuo dado vale: '+ dadoUtente + '\nil dado del computer vale: ' + dadoPc)
        }else if(dadoUtente < dadoPc) {
            alert('partita: Persa\nil tuo dado vale: '+ dadoUtente + '\nil dado del computer vale: ' + dadoPc)
        }

} else {
    alert('mail non valida \n accesso al gioco negato')
}

