import { useEffect, useState } from "react";
import ItemListContainer from './components/ItemListContainer/ItemListaContainer';
import Mercedes from '../src/imagenes/mercedes.jpg'

function App() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    new Promise((todoBien,todoMal)=>{
      setTimeout(()=>{
        todoBien([{id:1,title:'- Marca: Mercedes', description:'- Descripción: Aquí podrás encontrar una gran variedad de autos de esta marca. ',price:'Precio: 90.000 USD' }])
      },2000)
     
    }).then((resultado)=> setItems(resultado))
  })
  return (
    <div className="App">
      <ItemListContainer className="ItemListContainer" items={items} />
    </div>
  );
}

export default App;
