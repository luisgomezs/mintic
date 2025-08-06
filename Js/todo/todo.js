const input = document.querySelector('#text');
const button = document.querySelector('#add');
const task = document.querySelector('#tasks');

button.addEventListener(`click`,()=> {
    console.log(input);
    const template =
    `<p> ${input.value}</p>`;
    task.insertAdjacentHTML("beforeend",template)

}


);
