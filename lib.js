export function createElement(element, text, selector){
    const htmlElement= document.createElement(element)
    htmlElement.textContent = text
    document.querySelector(selector).append(htmlElement)
 }
