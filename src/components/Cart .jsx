import React from "react";
import Button from "./Button";
import { CartContext } from '../contexts/CartContext'
import {ProductItem} from "../components/ProductItem"
import { useContext, useEffect } from 'react'

export function Cart() {
  
    const {shop,listItens} = useContext(CartContext);

    useEffect(() => {
      listItens();
    }, []);

      return (
          <div>
            <h1>Carrinho de compras</h1>
            <ProductItem itens={shop}/>
            <div>
              <p>Total de itens: {shop.length}</p>
              <p>Valor total: </p>
            </div>
            <Button name="Limpar Carrinho" status="danger" action="limpar" />
          </div>
      );
   
    
  }