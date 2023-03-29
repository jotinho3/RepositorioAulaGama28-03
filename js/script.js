let $cabecalho = document.getElementById('cabecalho')
let $card = document.querySelector('.card')
let $linkedin = document.getElementById('linkedin')
let $titulos = document.querySelectorAll('h1')
let $explore_nature_flex = document.querySelector('.explore-nature-flex')
let $good_offers_title = document.querySelector('#good-offers-title')
let $form = document.querySelector('.contact-form-flex')

$cabecalho.style.backgroundColor = '#bfbfbf'

$card.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
` 

$good_offers_title.innerText = 'Ofertas Agora!' // innerHTML adiciona html

console.log($good_offers_title.textContent) // verificar o conteudo textual de um elemento 

$linkedin.setAttribute('href', 'https://www.linkedin.com/in/jotinhomarques/')
$linkedin.setAttribute('target', '_blank')

$titulos.forEach(titulo => {
    titulo.innerText = titulo.textContent.toUpperCase()

})


Array.from($titulos).map((item) => {
    console.log(item)

}) //map funciona da mesma forma que o forEach mas é mais seguro e evita problemas futuros

$explore_nature_flex.innerHTML += `
<div class="explore-nature-card">

<div class="explore-nature-itens" id="norway"></div>
<h1>Costa Leste, Noruega</h1>
<h5>Ida e volta por $79</h5>
<p>Preasent stilus dominics arrite outemane vitae</p>
<a href="">Compre Passagens</a>

</div>
`

let input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Coxinha')

$form.prepend(input)
