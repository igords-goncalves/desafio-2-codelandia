import { createElements, insertAdjacentTexts, setAttributes } from '../utils/funcions.js'

export function Products() {
    const ul = createElements('ul')
    setAttributes(ul, 'class', 'main-produtos')

    const products = {
        product1: "../assets/img/1.png",
        product2: "../assets/img/2.png",
        product3: "../assets/img/3.png",
        product4: "../assets/img/4.png",
        product5: "../assets/img/5.png",
        product6: "../assets/img/6.png",
        product7: "../assets/img/7.png",
        product8: "../assets/img/8.png"
    }

    const l1 = createElements('li')
    setAttributes(l1, 'id', 'produto-1')
    setAttributes(l1, 'class', 'produtos')


    const a1 = createElements('a')
    setAttributes(a1, 'href', '#')
    setAttributes(a1, 'src', products.product1)
    setAttributes(a1, 'style', "width: 250px; height: 150px;")

    const l2 = createElements('li')
    setAttributes(l2, 'id', 'produto-1')
    setAttributes(l2, 'class', 'produtos')


    const a2 = createElements('a')
    setAttributes(a2, 'href', '#')
    setAttributes(a2, 'src', products.product2)
    setAttributes(a2, 'style', "width: 250px; height: 150px;")

    l1.appendChild(a1)
    ul.appendChild(l1)

    l2.appendChild(a2)
    ul.appendChild(l2)

    return ul
}