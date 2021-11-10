
let listaMail = ['waltdisney@gmail.com', 'stevejobs@apple.com','andrearossi@hotmail.it','massimilianoperego@libero.com' ]

let inserisciMail = prompt ('inserisci la tua mail :')
console.log(inserisciMail);

for ( let i = 0; i < listaMail.length; i++){
    if(listaMail[i] == inserisciMail){
        alert('mail valida \n accesso effetuato')
    } else {
        alert('mail non valida \n accesso negato')
    }
}
