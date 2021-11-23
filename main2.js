const main{

const buttao = document.querySelector('#button');
const inputizin = document.querySelector('#inputzin');
const listinha = document.querySelector('#list');
const conteudo = document.createElement('li');

async function main(event) {
    event.preventDefault();
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json();
    let text = data.filter(item => item.userId == inputizin.value);
    console.log(text);
}

buttao.addEventListener('click', main);

