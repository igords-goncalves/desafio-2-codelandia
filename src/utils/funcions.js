export function createElements(element) {
    return document.createElement(element)
}

export function setAttributes(element, type, value) {
    return element.setAttribute(type, value)
}

export function insertAdjacentTexts(element, position, text) {
    return element.insertAdjacentText(position, text)
}