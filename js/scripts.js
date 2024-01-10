/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({

    data() {
        return {
            emails : [],
        };
    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
          // Aggiungi l'indirizzo email alla lista
          this.emails.push(response.data.response);
            })
        }

    },

// Monto l'istanza di Vue in pagina
}).mount('#app');