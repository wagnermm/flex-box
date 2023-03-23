import '../scss/style.scss'

function titleComponent() {
    const elemH1 = document.createElement('h1');
    elemH1.innerHTML = 'Hello, world!';
    elemH1.classList.add('h1')
    return elemH1
}

document.body.appendChild(titleComponent());