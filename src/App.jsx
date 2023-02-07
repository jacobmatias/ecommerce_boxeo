import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'


function App() {
 
  return (
   <div>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos al ring"}/>
  </div>
  )
}

export default App
