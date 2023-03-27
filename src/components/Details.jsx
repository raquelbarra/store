import React from "react";
import { getProduct } from "../services/api"
import { useLoaderData } from "react-router-dom"
import "../styles/Details.css"
import Header from "./Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";

export async function loaderProducts({ params }) {
    const product = await getProduct(params.id);
    return { product };
}

export function Details() {
    const { product } = useLoaderData();
    return (
      <div>
      <Header />
      <div className="details">
        <div className="images">
          <Carousel showArrows={true}>
        {product.images.map((image) => {
            return <img src={image} alt="" className="imgCard" key={image}/>;
        })}
          </Carousel>
        </div>
        <div className="texts">
        <p className="title">{product.title}</p>
        <p className="price">R$ {(product.price).toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <Button name="Adicionar ao carrinho" status="success" />
        </div>
      </div>
      </div>
    );
  }