import FoodInput from './components2/FoodInput';
import Container from './components2/Container';
import styles from "./components2/Container.module.css";
import { useState } from 'react';

function App() {
   

  const [items, setItems] = useState(['Dal', 'milk', 'Egg', 'Roti',]);

  // let changeBgColor=(item,event)=>{
  // //  const[item,seItem]=useState(event.target)
  // console.log(event)
  // }
 

  
  const clickButtonAction = (item) => console.log(`Your item is: ${item}`); 

  let inputFieldChanged=(event)=>
   {
    if(event.key==='Enter'){
    let getValue=event.target.value;
    event.target.value  = '';
    let newValue = [...items,getValue]
    setItems(newValue)
    }
  }

  const[activeItems, setActiveItems]=useState([])

  let bgColorChange=(item)=>{
    let newItems=[...activeItems,item];
    setActiveItems(newItems);
  }

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput  inputFieldChanged={inputFieldChanged} />

        {/* <p>{items}</p> */}
        <ul className="list-group">
          {items.map((item, index) => (
            <li className={`list-group-item ${activeItems.includes(item) && 'active'}`} key={index}>
              {item}
              <button  
              onClick={()=> bgColorChange(item)}
                className={`${styles.button} btn btn-info`}
              >
                Buy
              </button>
            </li>
          ))}
        </ul>

      </Container>
    </>
  );
}

export default App;
