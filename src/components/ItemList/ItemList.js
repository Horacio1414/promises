import Item from '../Item/Item';
import Mercedes from '../../imagenes/mercedes.jpg'

const ItemList = (props) => 
<> 
<h1>Lista</h1>
<img src = {Mercedes} width='250px' height='185px'></img>
<ul className="lista">

    {props.items.map((item,index) => 
        <Item  key={index} id ={item.id} title= {item.title} description= {item.description} price={item.price} />
     )}

    
</ul>

</>

export default ItemList;