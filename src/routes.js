import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './pages/SignUp.vue';
import HomeComponent from "./pages/HomeComponent.vue"
import ProductPage from './pages/ProductPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';
import ProductCart from './pages/ProductCart.vue';


const routes = [
  { path: '/', component: HomeComponent, name:'HomeComponent' },
  { path: '/product/:id', component: ProductPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/ProductCart', component: ProductCart },
  { path: '/signup', component: SignUp, name:'SignUp' }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
