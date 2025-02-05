import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './assets/components/navBar/NavBar'
import ItemListContainer from './assets/components/itemListContainer/ItemListContainer'

export default function App() {

  return (
    <BrowserRouter>
        <NavBar buttonNavBar={buttonNavBar}/>
          <div className="containerApp marginSeccion">
            <Routes>  
                <Route exact path="/" element={<ItemListContainer category={null} title='Bienvenidos a Digital4Tech'/>} />
                <Route exact path="/computadoras" element={<ItemListContainer category='computers' title='Tu próxima compu gamer'/>} />
                <Route exact path="/notebook" element={<ItemListContainer category='notebooks' title='Las notebooks más potentes'/>} />
                <Route exact path="/monitores" element={<ItemListContainer category='monitors' title='Los mejores monitore'/>} />
                <Route exact path="/combos" element={<ItemListContainer category='combos' title='Combos de mouse y teclados gamer'/>} />
                <Route exact path="/auriculares" element={<ItemListContainer category='headphones' title='Encontra el mejor sonido en Digital4Tech'/>} />
                <Route exact path="/sillas" element={<ItemListContainer category='chairs' title='Las sillas gamer más comodas'/>} />
            </Routes>
          </div>
    </BrowserRouter>
  )
}

const buttonNavBar = [
  {icon: 'fa-solid fa-computer', link: '/computadoras', button: 'Computadoras'},
  {icon: 'fa-solid fa-laptop', link: '/notebook', button: 'Notebooks'},
  {icon: 'fa-solid fa-desktop', link: '/monitores', button: 'Monitores'},
  {icon: 'fa-solid fa-computer-mouse', link: '/combos', button: 'Combos'},
  {icon: 'fa-solid fa-headphones-simple', link: '/auriculares', button: 'Auriculares'},
  {icon: 'fa-solid fa-couch', link: '/sillas', button: 'Sillas y Accesorios'},
]