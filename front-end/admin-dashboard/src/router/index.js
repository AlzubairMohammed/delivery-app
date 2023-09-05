import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilePage from '../views/ProfilePage.vue'
import PlayersPage from '../views/PlayersPage.vue'
import ChallengesPage from '../views/ChallengesPage.vue'
import PaymentPage from '../views/PaymentPage.vue'
import ChalengePage from '../views/ChalengePage.vue'
import EditProduct from '../views/EditProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import lastPayments from '../views/lastPayments.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/ProfilePage",
    name:"ProfilePage",
    component:ProfilePage
  },
  {
    path:"/PlayersPage",
    name:"PlayersPage",
    component:PlayersPage,
  },
  {
    path:"/ChalengePage",
    name:"ChalengePage",
    component:ChalengePage
  },
  {
    path:"/ChallengesPage",
    name:" challengesPage",
    component:ChallengesPage
  },
  {
    path:"/AddProduct",
    name:"AddProduct",
    component:AddProduct
  },
  {
    path:"/EditProduct",
    name:"EditProduct",
    component:EditProduct
  },
  {
    path:"/PaymentPage",
    name:"PaymentPage",
    component:PaymentPage
  },
  {
    path:"/lastPayments",
    name:"lastPayments",
    component:lastPayments
  },
  {
    path:"/LoginPage",
    name:"LoginPage",
    component:LoginPage
  }
  ,
  {
    path:"/RegisterPage",
    name:"RegisterPage",
    component:RegisterPage
  } 
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
