let quotes = [
    "Older men declare war. But it is the youth that must fight and die. — Herbert Hoover",
    "Only the dead have seen the end of war. — Plato",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.— Winston Churchill",
    "In war there is no prize for the runner-up. — General Omar Bradley",
    "The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war. — General Douglas MacArthur",
    "If we don't end war, war will end us. — H. G. Wells",
    "War does not determine who is right, only who is left. — Bertrand Russell",
    "If your attack is going too well, you're walking into an ambush. — Infantry Journal",
    "There's no honorable way to kill, no gentle way to destroy. There is nothing good in war. Except its ending. — Abraham Lincoln",
    "Death is nothing, but to live defeated and inglorious is to die daily. — Napoleon Bonaparte",
    "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones. — Albert Einstein",
    "A leader leads by example, not by force. — Sun Tzu",
    "An eye for an eye makes the whole world blind. — Gandhi"
]

const button = document.querySelector('.button')
button.addEventListener('click', displayQuote)

function displayQuote() {

    var index = Math.floor(Math.random() * quotes.length)
    let div = document.querySelector('#quote')
    let quote = `<div class="card"> 
        <p>${quotes[index]}</p>
        </div>
        `
    div.innerHTML = quote
}