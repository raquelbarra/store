import React from "react";
import "../styles/ProductItem.css";

export function ProductItem(props) {
    let list = props.itens;
    console.log(list)
    return (
      <div>
        {list.map((element,key)=>{
          return(
            <div className="product-item" key={key}>
              <div className="avatar">
                <img src={element.image} width="50px" alt=""/>
              </div>
              <div>
              <p>Produto: {element.title}</p>
              <p>Preço: R$ {(element.price).toFixed(2)}</p>
              </div>
            </div>
          )
        })}
        
        
        {/* <Button name="Remover produto" status="danger" action="remover" idProduct={key} valueProduct={item} /> */}
      </div>
    );
  }