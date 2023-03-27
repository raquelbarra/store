import Header from "./components/Header";
import GlobalStyle from "./globalStyles";
import { Card } from "./components/Card";
import { Cart } from "./components/Cart ";
import { CartProvider } from "./contexts/CartContext"
import { getProducts } from "./services/api";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import './styles/App.css'


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <GlobalStyle>
        <CartProvider>
          <Header />
          <Cart/>
          <div className="mainDiv">
            {isLoading ? (
              <ReactLoading type={"bars"} color={"red"} className="loading"/>
            ) : (
              products.map((product) => (
                <Card
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  key={product.id}
                  image={product.images[0]}
                  id={product.id}
                />
              ))
            )}
          </div>
        </CartProvider>
      </GlobalStyle>
    </>
  );
}

export default App;