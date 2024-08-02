// Traversing the DOM using DOM API
document.addEventListener('DOMContentLoaded', () => {

    // * Get the first child node
    const child1Node = document.querySelector('.child-1')
    console.log(child1Node)
    // *accessing the parent element of the current node
    console.log(child1Node.parentNode)
    // *accessing the previous sibling and the next sibling of the current node
    console.log(child1Node.previousElementSibling)
    console.log(child1Node.nextElementSibling)


    // * Get the parent node
    const parentNode = document.querySelector('.parent')

    console.log(parentNode)

    // * first and last child
    console.log(parentNode.firstElementChild)
    console.log(parentNode.lastElementChild)

    // *get all the children of the current node
    const childrensList = parentNode.children
    for (let child of childrensList) {
        console.log(child)
    }
    console.log(parentNode.childNodes)

})