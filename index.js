this.document


this.document === document


 //Accessing the `DOM`
// Get the `Document`
this.document
document

this.document === document // true

// Get a `Node` in the `Document`
document.getElementsByTagName('h1')[0]

// Get the `Element` type from the `Node`
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
document.getElementsByTagName('h1')[0].nodeType; // 1

// Get the `NodeList` from the `Document`
document.getElementsByTagName('ul')[0].childNodes
document.getElementsByTagName('ul')[0].childNodes instanceof NodeList // true

// Get the `NamedNodeMap` from the `Document`
document.getElementsByTagName('h1')[0].attributes

// Get the `Attribute` from the `Element`
document.getElementsByTagName('h1')[0].attributes[0] instanceof Attr
document.getElementsByTagName('h1')[0].attributes[0].name
document.getElementsByTagName('h1')[0].attributes[0].value

// Modifying the `DOM`
// Changing the `backgroundColor` of the `Document`
document.body.style.backgroundColor = "yellow"

// Changing the text for `H3` `Element` in the `Document`
document.getElementsByTagName('h3')[0].innerHTML = "bonsaiilabs Team Members"

// Removing a `Node` from the `Document`
//document.getElementsByTagName('ul')[0].firstElementChild.remove()