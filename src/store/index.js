import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS(state, products) { 
      state.products = products; 
    },
    ADD_TO_CART(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    CLEAR_CART(state) { 
      state.cart = []; 
    },
    INCREMENT_CART_ITEM(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) item.quantity++;
    },
    DECREMENT_CART_ITEM(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item && item.quantity > 0) item.quantity--;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart({ commit }, product) { 
      commit('ADD_TO_CART', product); 
    },
    incrementCartItem({ commit }, productId) {
      commit('INCREMENT_CART_ITEM', productId);
    },
    decrementCartItem({ commit }, productId) {
      commit('DECREMENT_CART_ITEM', productId);
    }
  },
  getters: {
    allProducts: state => state.products,
    cartItems: state => state.cart,
    cartTotal: state => {
      const total = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(total);
    },
  }
});
