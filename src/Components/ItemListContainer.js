import { useParams } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import Item from "./Item";
import PopQuizBackpack from "../Assets/Pop Quiz Backpack.jpg"
import {collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"



const ItemListContainer = () => {
  const [products, setProducts] = useState(null)
  
  useEffect (() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        });

},[]);
  // const { id } = useParams();
  // const { products } = useProducts();

  // const filterProducts = products.filter(({ category }) => category === id);

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      <li>
        {products && products.map(({id, name, price, description})  => (
        <li key={id}>
          Name: {name} Price: {price} Description: {description}
        </li>
        ))}
      </li>

      {/* {!id &&
        products.map((product) => {
          if (product.id === "1") {
            product.image =PopQuizBackpack ;
          }
          return <Item key={product.id} {...product} />;
        })} */}
      {/* {id &&
        filterProducts.map((product) => {
          if (product.id === "1") {
            product.image = PopQuizBackpack;
          }
          
          return <Item key={product.id} {...product} />;
        })} */}
    </div>
  );
};

export default ItemListContainer;



