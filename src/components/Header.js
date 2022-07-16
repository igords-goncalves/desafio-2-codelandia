export function Header() {
    const div = document.createElement('div')
    div.setAttribute('class', 'main-cabecalho')

    const text = 'Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.'

    const h2 = document.createElement('h2')
    h2.insertAdjacentText('beforeend', 'Destaques')

    const span = document.createElement('span')
    span.insertAdjacentText('beforeend', text)
    span.setAttribute('class', 'main-anuncio')

    div.appendChild(h2)
    div.appendChild(div)
}