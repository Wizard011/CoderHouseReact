import './App.css'
import NavBar from './assets/components/navBar/NavBar'
import ItemListContainer from './assets/components/itemListContainer/ItemListContainer'

export default function App() {

  return (
    <>
      <NavBar buttonNavBar={buttonNavBar}/>
      <div className="containerApp marginSeccion">
        <ItemListContainer />
      </div>
    </>
  )
}

const buttonNavBar = [
  {icon: 'fa-solid fa-computer', button: 'Computadoras'},
  {icon: 'fa-solid fa-laptop', button: 'Notebooks'},
  {icon: 'fa-solid fa-desktop', button: 'Monitores'},
  {icon: 'fa-solid fa-computer-mouse', button: 'Combos'},
  {icon: 'fa-solid fa-headphones-simple', button: 'Auriculares'},
  {icon: 'fa-solid fa-couch', button: 'Sillas y Accesorios'},
]