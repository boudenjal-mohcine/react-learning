import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import {useState} from 'react';

function App() {

  const [cart, updateCart] = useState([])

  return (
    <div>
		<Banner />
			<div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
		  </div>
			<Footer />
		</div>
  );
}

export default App;


/***
 * 
 * Pour utiliser un même état entre plusieurs composants, il faut :
 * faire remonter l'état dans le composant parent commun le plus proche ;
 * puis faire descendre la variable d'état et la fonction pour mettre à jour cet état dans des props.
 * 
 ***/