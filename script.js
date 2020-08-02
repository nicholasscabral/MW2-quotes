let quotes = [
    'The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)',
    'Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)',
    'Before software can be reusable it first has to be usable. (Ralph Johnson)',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)',
    'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal)',
    'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)',
    'There are two ways to write error-free programs; only the third one works. (Alan J. Perlis)',
    'Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development. (Anonymous)',
    'It’s not a bug – it’s an undocumented feature. (Anonymous)',
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