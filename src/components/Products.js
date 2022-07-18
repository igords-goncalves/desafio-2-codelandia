import { createElements, insertAdjacentTexts, setAttributes } from '../utils/funcions.js'

export function Products() {
    const ul = createElements('ul')
    setAttributes(ul, 'class', 'main-produtos')

    const products = {
        product1: "../src/assets/img/1.png",
        product2: "../src/assets/img/2.png",
        product3: "../src/assets/img/3.png",
        product4: "../src/assets/img/4.png",
        product5: "../src/assets/img/5.png",
        product6: "../src/assets/img/6.png",
        product7: "../src/assets/img/7.png",
        product8: "../src/assets/img/8.png"
    }

    const style = "width: 250px; height: 150px;"

    const l1 = createElements('li')
    setAttributes(l1, 'id', 'produto-1')
    setAttributes(l1, 'class', 'produtos')

    const a1 = createElements('a')
    setAttributes(a1, 'href', '#')

    const img1 = createElements('img')
    setAttributes(img1, 'src', products.product1)
    setAttributes(img1, 'style', style)
    

    const l2 = createElements('li')
    setAttributes(l2, 'id', 'produto-2')
    setAttributes(l2, 'class', 'produtos')

    const a2 = createElements('a')
    setAttributes(a2, 'href', '#')

    const img2 = createElements('img')
    setAttributes(img2, 'src', products.product2)
    setAttributes(img2, 'style', style)

    const l3 = createElements('li')
    setAttributes(l3, 'id', 'produto-3')
    setAttributes(l3, 'class', 'produtos')

    const a3 = createElements('a')
    setAttributes(a3, 'href', '#')

    const img3 = createElements('img')
    setAttributes(img3, 'src', products.product3)
    setAttributes(img3, 'style', style)

    const l4 = createElements('li')
    setAttributes(l4, 'id', 'produto-4')
    setAttributes(l4, 'class', 'produtos')

    const a4 = createElements('a')
    setAttributes(a4, 'href', '#')

    const img4 = createElements('img')
    setAttributes(img4, 'src', products.product4)
    setAttributes(img4, 'style', style)

    const l5 = createElements('li')
    setAttributes(l5, 'id', 'produto-5')
    setAttributes(l5, 'class', 'produtos')

    const a5 = createElements('a')
    setAttributes(a5, 'href', '#')

    const img5 = createElements('img')
    setAttributes(img5, 'src', products.product5)
    setAttributes(img5, 'style', style)

    const l6 = createElements('li')
    setAttributes(l6, 'id', 'produto-6')
    setAttributes(l6, 'class', 'produtos')

    const a6 = createElements('a')
    setAttributes(a6, 'href', '#')

    const img6 = createElements('img')
    setAttributes(img6, 'src', products.product6)
    setAttributes(img6, 'style', style)

    const l7 = createElements('li')
    setAttributes(l7, 'id', 'produto-7')
    setAttributes(l7, 'class', 'produtos')

    const a7 = createElements('a')
    setAttributes(a7, 'href', '#')

    const img7 = createElements('img')
    setAttributes(img7, 'src', products.product7)
    setAttributes(img7, 'style', style)

    const l8 = createElements('li')
    setAttributes(l8, 'id', 'produto-1')
    setAttributes(l8, 'class', 'produtos')

    const a8 = createElements('a')
    setAttributes(a8, 'href', '#')

    const img8 = createElements('img')
    setAttributes(img8, 'src', products.product8)
    setAttributes(img8, 'style', style)


    const ancorElements = [a1, a2, a3, a4, a5, a6, a7, a8] 
    const imgElements = [img1, img2, img3, img4, img5, img6, img7, img8]
    const listElements = [l1, l2, l3, l4, l5, l6, l7, l8]

    listElements.forEach(e => e.append(...ancorElements))

    ancorElements.forEach(e => e.append(...imgElements))
    
    ul.append(...listElements)

    return ul
}