let quotes = [
    "Older men declare war. But it is the youth that must fight and die. — Herbert Hoover",
    "Only the dead have seen the end of war. — Plato",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.— Winston Churchill",
    "In war there is no prize for the runner-up. — General Omar Bradley",
    "The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war. — General Douglas MacArthur",
    "If we don't end war, war will end us. — H. G. Wells",
    "War does not determine who is right, only who is left. — Bertrand Russell",
    "If your attack is going too well, you're walking into an ambush. — Infantry Journal",
]

const button = document.querySelector('.button')
button.addEventListener('click', displayQuote)

function displayQuote() {

    var index = Math.round(Math.random() * quotes.length)
    let div = document.querySelector('#quote')
    let quote = `<div class="card"> 
        <p>${quotes[index]}</p>
        </div>
        `

    div.innerHTML = quote
}