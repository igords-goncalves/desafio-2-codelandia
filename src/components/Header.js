import { createElements, insertAdjacentTexts, setAttributes } from '../utils/funcions.js'


export function Header() {

    const slogan = 'A melhor loja de Jordan'
    const text = 'O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.'

    const header = createElements('header')

    let divs = {
        divHeaderPromo: () => {},
        divHeaderLogo: () => {},
        divHeaderCover: () => {},
        divHeaderText: () => {},
        divTypedStrings: () => {}
    }

    divs.divHeaderPromo = createElements('div')
    setAttributes(divs.divHeaderPromo, 'class', 'header-promo')
    insertAdjacentTexts(divs.divHeaderPromo, 'beforeend', 'Ganhe R$ 10,00 de desconto no frete.')

    divs.divHeaderLogo = createElements('div')
    setAttributes(divs.divHeaderLogo, 'class', 'header-logo')
    insertAdjacentTexts(divs.divHeaderLogo, 'beforeend', 'JordanShoes')


    divs.divHeaderCover = createElements('div')
    setAttributes(divs.divHeaderCover, 'class', 'header-cover')

    divs.divHeaderText = createElements('div')
    setAttributes(divs.divHeaderText, 'class', 'header-text')

    divs.divHeaderCover.appendChild(divs.divHeaderText)

    const p = createElements('p')
    setAttributes(p, 'class', 'header-slogan')
    insertAdjacentTexts(p, 'beforeend', slogan)

    divs.divTypedStrings = createElements('div')
    setAttributes(divs.divTypedStrings, 'id', 'typed-strings')

    const span = createElements('span')
    setAttributes(span, 'class', 'header-anuncio')
    insertAdjacentTexts(span, 'beforeend', text)

    divs.divTypedStrings.appendChild(span)

    const spanTyped = createElements('span')
    setAttributes(spanTyped, 'id', 'typed')


    const sloganElements = [p, divs.divTypedStrings, spanTyped]

    divs.divHeaderText.append   (...sloganElements)
    

    const elements = [
        divs.divHeaderPromo, 
        divs.divHeaderLogo,
        divs.divHeaderCover

    ]

    header.append(...elements)

    return header

}