import NavBar from './NavBar/NavBar.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';

function App() {
  return(
  <div>
    <NavBar />
    <ItemListContainer greeting={"Bienvenido a TinyToys"}/>
  </div>
  )
}

export default App