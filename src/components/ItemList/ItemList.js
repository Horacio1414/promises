import Item from '../Item/Item'

const ItemList = (props) => 
<> 
<h1>Lista</h1>
<ul>

    {props.items.map((item) => 
        <Item  key ={item.id} nombre ={item.nombre} />
     )}

    
</ul>

</>

export default ItemList;