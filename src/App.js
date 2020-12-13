import './App.css';
import ShoppingAdmin from './Components/admin/ShoppingAdmin'
import Allproduct from './Components/client/Allproduct'
import Login from './Components/admin/AdminLogin';
import ProductDetail from './Components/client/ProductDetail';
import Cart from './Components/client/Cart';
import Home from './Components/client/Home';
import {BrowserRouter as Router,
        Route,Switch,
      } from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Order from './Components/admin/Order';
const initState = {
  cart:[],
}
const root_reducer = function(state = initState,action){
  
  if(action.type === "Add_To_Cart") {
    const exist_product_index = state.cart.findIndex(product=>product.id === action.payload.id)
    let new_cart;
    if(exist_product_index < 0) {
      new_cart = [
        ...state.cart,
        {
        ...action.payload,
        id_cart:Date.now(),
        }
      ]
    }
    else{
      new_cart = [...state.cart];
      new_cart[exist_product_index].quantyti = new_cart[exist_product_index].quantyti + action.payload.quantyti
      
    }
      return {
        ...state,
        cart:new_cart,
      }
    }
  else if (action.type === "Update_Cart") {
    console.log('update')
    const exist_product_index = state.cart.findIndex(product=>product.id_cart === action.payload.id_cart)
    const new_cart = [...state.cart];
    new_cart[exist_product_index].quantyti = action.payload.quantyti;
    return {
      ...state,
      cart:new_cart,
    }
    }
    else if (action.type === "Delete") {
      const new_cart = state.cart.filter(product=>{
        return product.id_cart !== action.payload
      })
      return {
        ...state,
        cart:new_cart,
      }
    }
    else if (action.type === 'Clear_Cart'){
      return {
        ...state,
        cart:[],
      }
    }
    return state
}
const store = createStore(root_reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function App() {
  return (
    <Provider store = {store}>
        <Router>
          <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/admin/login" component={Login}>
            </Route>
            <Route path="/admin" component={ShoppingAdmin}>
            </Route>
            <Route exact path="/product/:id" component={ProductDetail}>
            </Route>
            <Route path="/product">
              <Allproduct></Allproduct>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
          </Switch>
      </Router>
    </Provider>
    
  );
}

export default App;
