Griglia Campo Minato
===

## Consegna

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento logico: 
1. Ci creiamo la struttura.
1. Creiamo un semplice quadrato vuoto che conterrà i nostri quadrati.
1. Faccio una funzione che tramite un ciclo mi crea i quadrati in base a quelli che prendere dall'utente
1.  Creo la funzione RESET.
1. Creo la funzione getScquare per crearmi in modo iterativo i quadrati.
1. Creo la funzione che mi gestisce il click ed il cambio colore se premuto.
1. Mi gestisco il select nel header per scegliere quanti quadrati.
1. Mi creo la funzione di creazione dei miei quadrati che capirà tramite la scelta degli utenti quanti quadrati dovrà stampare.
