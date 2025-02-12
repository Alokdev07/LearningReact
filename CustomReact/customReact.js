function customRender(container,reactElememt){
    const element = document.createElement(reactElememt.type);
   for(const prop in reactElememt.props) {
    element.setAttribute(prop,reactElememt.props[prop])
   }
    element.innerHTML = reactElememt.children;
    container.appendChild(element);
}
const reactElememt = {
    type : 'a',
    props :{
        href : 'https://www.google.co.in/',
        target : '_blank'
    },
    children : 'this is google link'
}
let mainContainer = document.querySelector('#root');
customRender(mainContainer,reactElememt);