/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

// para ver se está funcionando direito
// console.log(nav)
// console.log(toggle)

for(const element of toggle) {
    // console.log(element)
    // addEventListener = adicionando evento que fica ouvindo, quando eu clicar
    element.addEventListener('click', function() {
        // alert('Chegamos aqui') ele sempre vai disparar essa função
        nav.classList.toggle('show') // fazer uma troca, se tiver a classe show ele tira, se não tiver ele coloca
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// scroll sessão de mover
// mudar o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight // pegar a altura dele
// esse evento acontece na janela do window, então vou adicionar uma funcionalidade
window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // scroll é menor que a altura do header
        header.classList.remove('scroll')
    }
})
