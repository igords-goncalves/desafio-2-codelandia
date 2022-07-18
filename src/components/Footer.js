import { createElements, setAttributes } from '../utils/funcions.js'

export function Footer() {
    const footer = createElements('footer')

    const p = createElements('p')
    setAttributes(p, 'class', 'foot-direitos')
    p.innerHTML = 'Todos os direitos reservados &copy; NIKE'
 
    footer.appendChild(p)
    
    return footer
}