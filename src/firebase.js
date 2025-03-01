import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";

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
      const querySnapshot = await getDocs(queriSlug);
  
      if (!querySnapshot.empty) {
        const product = querySnapshot.docs[0].data();
        const productWithId = { id: querySnapshot.docs[0].id, ...product };  // Agregar el id al producto
        return productWithId;

      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching item:", error);
      return [];
    }
  }

