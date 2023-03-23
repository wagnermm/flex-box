import '../scss/style.scss'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

function titleComponent() {
    const elemH1 = document.createElement('h1');
    elemH1.innerHTML = 'Simulator';
    elemH1.classList.add('h1');
    return elemH1
}

document.getElementById('root').appendChild(titleComponent());