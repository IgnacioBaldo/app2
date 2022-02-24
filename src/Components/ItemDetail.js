import {collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function App() {
    const [product, setProduct] = useState(null)
    const [products, setProducts] = useState(null)
}



useEffect (() => {
    const db= getFirestore();

    const herschell1 = doc (db, "items", "FYida7GsGR3bjS2nHkde");
        getDoc(herschell1).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({id: snapshot.id, ...snapshot.data()});
            }
        })
}, []); 



useEffect (() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).yhen((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        });

},[]);