import styles from './FoodItem.module.css'

const FoodInput = ({inputFieldChanged}) =>{

  // let inputFieldChanged=(event)=>console.log(event.target.value)

  return <>
  <input onKeyDown={inputFieldChanged}  className={styles.foodInput} type="text" placeholder="Enter Your Item"/> 
  
  </>

}

export default FoodInput;