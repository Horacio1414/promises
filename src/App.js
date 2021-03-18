import { useEffect, useState } from "react";
import ItemListContainer from './components/ItemListContainer/ItemListaContainer'

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    new Promise((todoBien,todoMal)=>{
      setTimeout(()=>{
        todoBien(['id:1', 'title:Marca Mercedes', 'description:La mejor gama', 'price:40000', 'pictureUrl:img'])
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
