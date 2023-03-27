import '../styles/Button.css'
import { CartContext } from '../contexts/CartContext'
import { useContext } from 'react'

const styleSucess = {
   color: 'white',
   backgroundColor: "green",
}

const styleWarning = {
   color: 'black',
   backgroundColor: '#FEE191',
}

const styleDanger = {
   color: 'white',
   backgroundColor: '#E84258',
}

const styleInfo = {
   color: 'white',
   backgroundColor: 'blue',
}

const styleDefault = {
   color: 'white',
   backgroundColor: 'gray',
}

function styleBtn (status) {
   if(status ==='success') {
      return styleSucess
   } else if(status ==='warning') {
      return styleWarning       
   } else if (status ==='danger') {
      return styleDanger
   } else if (status ==='info') {
      return styleInfo
   } else {
      return styleDefault 
   } 
}

export default function Button(props) {

   const {handleClickAdd, handleClickRemove, handleClickClearList} = useContext(CartContext);

   if(props.action === "adicionar"){
      return (        
         <button className='btn' style={styleBtn(props.status)} onClick={()=>{handleClickAdd(props.idProduct, props.image, props.title, props.price)}} >{props.name}</button>
      )
   } else if(props.action === "remover"){
      return (        
         <button className='btn' style={styleBtn(props.status)} onClick={()=>{handleClickRemove(props.idProduct, props.valueProduct)}} >{props.name}</button>
      )
   } else if(props.action === "limpar"){
      return (        
         <button className='btn' style={styleBtn(props.status)} onClick={()=>{handleClickClearList()}} >{props.name}</button>
      )
   } else {
      return (        
         <button className='btn' style={styleBtn(props.status)} >{props.name}</button>
      )
   }
}