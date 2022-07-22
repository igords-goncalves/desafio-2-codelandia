import { createElements, setAttributes } from '../utils/funcions.js'

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

    a1.appendChild(img1)
    l1.appendChild(a1)
    ul.appendChild(l1)
    

    const l2 = createElements('li')
    setAttributes(l2, 'id', 'produto-2')
    setAttributes(l2, 'class', 'produtos')

    const a2 = createElements('a')
    setAttributes(a2, 'href', '#')

    const img2 = createElements('img')
    setAttributes(img2, 'src', products.product2)
    setAttributes(img2, 'style', style)

    a2.appendChild(img2)
    l2.appendChild(a2)
    ul.appendChild(l2)

    const l3 = createElements('li')
    setAttributes(l3, 'id', 'produto-3')
    setAttributes(l3, 'class', 'produtos')

    const a3 = createElements('a')
    setAttributes(a3, 'href', '#')

    const img3 = createElements('img')
    setAttributes(img3, 'src', products.product3)
    setAttributes(img3, 'style', style)

    a3.appendChild(img3)
    l3.appendChild(a3)
    ul.appendChild(l3)

    const l4 = createElements('li')
    setAttributes(l4, 'id', 'produto-4')
    setAttributes(l4, 'class', 'produtos')

    const a4 = createElements('a')
    setAttributes(a4, 'href', '#')

    const img4 = createElements('img')
    setAttributes(img4, 'src', products.product4)
    setAttributes(img4, 'style', style)

    a4.appendChild(img4)
    l4.appendChild(a4)
    ul.appendChild(l4)

    const l5 = createElements('li')
    setAttributes(l5, 'id', 'produto-5')
    setAttributes(l5, 'class', 'produtos')

    const a5 = createElements('a')
    setAttributes(a5, 'href', '#')

    const img5 = createElements('img')
    setAttributes(img5, 'src', products.product5)
    setAttributes(img5, 'style', style)

    a5.appendChild(img5)
    l5.appendChild(a5)
    ul.appendChild(l5)

    const l6 = createElements('li')
    setAttributes(l6, 'id', 'produto-6')
    setAttributes(l6, 'class', 'produtos')

    const a6 = createElements('a')
    setAttributes(a6, 'href', '#')

    const img6 = createElements('img')
    setAttributes(img6, 'src', products.product6)
    setAttributes(img6, 'style', style)

    a6.appendChild(img6)
    l6.appendChild(a6)
    ul.appendChild(l6)

    const l7 = createElements('li')
    setAttributes(l7, 'id', 'produto-7')
    setAttributes(l7, 'class', 'produtos')

    const a7 = createElements('a')
    setAttributes(a7, 'href', '#')

    const img7 = createElements('img')
    setAttributes(img7, 'src', products.product7)
    setAttributes(img7, 'style', style)

    a7.appendChild(img7)
    l7.appendChild(a7)
    ul.appendChild(l7)

    const l8 = createElements('li')
    setAttributes(l8, 'id', 'produto-8')
    setAttributes(l8, 'class', 'produtos')

    const a8 = createElements('a')
    setAttributes(a8, 'href', '#')

    const img8 = createElements('img')
    setAttributes(img8, 'src', products.product8)
    setAttributes(img8, 'style', style)
    
    a8.appendChild(img8)
    l8.appendChild(a8)
    ul.appendChild(l8)

    return ul
}