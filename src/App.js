import { useEffect, useState } from "react";
import ItemListContainer from './components/ItemListContainer/ItemListaContainer'

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    new Promise((todoBien,todoMal)=>{
      setTimeout(()=>{
        todoBien([[{id: 1,nombre: 'pedro'}, {id: 2,nombre: 'juan'}, {id: 3,nombre: 'marcos'}]])
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
