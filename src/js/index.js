import '../scss/style.scss'
import imageBuilding from '../assets/building.jpg'
import imageNotebook from '../assets/notebook.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemetImageBuilding = new Image()
elemetImageBuilding.src = imageBuilding

const elemetImageNotebook = new Image()
elemetImageNotebook.src = imageNotebook

document.querySelector('#building').appendChild(elemetImageBuilding)
document.querySelector('#notebook').appendChild(elemetImageNotebook)