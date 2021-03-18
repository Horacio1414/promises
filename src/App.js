import { useEffect, useState } from "react";
import ItemListContainer from './components/ItemListContainer/ItemListaContainer'

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    new Promise((todoBien,todoMal)=>{
      setTimeout(()=>{
        todoBien(["Pera", "Manzanas", "Uvas"])
      },2000)
     
    }).then((resultado)=> setItems(resultado))
  })
  return (
    <div className="App">
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
