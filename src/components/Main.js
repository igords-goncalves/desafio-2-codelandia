import { createElements, insertAdjacentTexts, setAttributes } from '../utils/funcions.js'
import { Products } from './Products.js'

export function Main() {

    const main = createElements('main')

    const div = createElements('div')
    setAttributes(div, 'class', 'main-cabecalho')

    const text = 'Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.'

    const h2 = createElements('h2')
    insertAdjacentTexts(h2,'beforeend', 'Destaques')

    const span = createElements('span')
    insertAdjacentTexts(span, 'beforeend', text)
    setAttributes(span, 'class', 'main-anuncio')

    const element = [h2, span]
    div.append(...element)

    main.appendChild(div)

    main.append(Products())

    return main
}