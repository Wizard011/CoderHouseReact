import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, doc, increment, runTransaction } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);

const db =  getFirestore(app)

export async function getProducts(){
  try {
    const querySnapshot = await getDocs (collection (db, 'items'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map(
        (docu) => {
          return {id: docu.id,...docu.data()}
        });
        return productsList;
      } else {
        return [];
    }
  } catch (error) {
    console.error('Error al recuperar productos', error);
  }  
}

export async function getProductByCategory(category) {
  try {
    const productsRef = collection(db, "items");
    const whereCategory = query(productsRef, where("category", "==", category));
    
    const querySnapshot = await getDocs(whereCategory);

    if (!querySnapshot.empty) {
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      return productsList;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error al recuperar productos por categoría:", error);
    return [];
  }
}

export async function getProductBySlug(slug) {
    try {
      const queriSlug = query(collection(db, "items"), where("slug", "==", slug));
      const snapshot = await getDocs(queriSlug);
  
      if (!snapshot.empty) {
        const product = snapshot.docs[0].data();
        const productWithId = { id: snapshot.docs[0].id, ...product };
        return productWithId;

      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching item:", error);
      return [];
    }
  }
  
  export async function addOrder(order){
    const orderCollection = collection(db, 'orders');
    try {
      const docRef = await addDoc (orderCollection, order);
      return docRef.id;
    } catch (error) {
      console.error("Error al generar orden nueva:", error);
    }
  }
  
  // export async function updateStock(productId, quantity) {
  //   const productRef = doc(db, "items", productId); // Referencia al producto
  //   try {
  //     const productDoc = await getDoc(productRef);
  //     if (productDoc.exists()) {
  //       const currentStock = productDoc.data().stock;
  //       const newStock = currentStock - quantity;
  
  //       // Actualizar el stock en Firestore
  //       if (newStock >= 0) {
  //         await updateDoc(productRef, { stock: newStock });
  //         console.log(`Stock actualizado para el producto ${productId}: ${newStock}`);
  //         return true; // Éxito
  //       } else {
  //         console.log("Stock insuficiente");
  //         return false; // Stock insuficiente
  //       }
  //     } else {
  //       console.log("Producto no encontrado");
  //       return false; // Producto no encontrado
  //     }
  //   } catch (error) {
  //     console.error("Error al actualizar el stock:", error);
  //     return false; // Error al actualizar el stock
  //   }
  // }
  
  
  