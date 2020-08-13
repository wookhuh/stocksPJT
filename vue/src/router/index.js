import Vue from 'vue'
import VueRouter from 'vue-router'
import StockMain from '../views/StockMain'
import themedStocks from "@/components/stockComponents/ThemedStocks";
import dashBoard from "@/components/stockComponents/DashBoard";
import themedDetail from "@/components/stockComponents/ThemedDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StockMain',
    component: StockMain
  },
  {
    path: '/dashBoard',
    name: 'dashBoard',
    component: dashBoard
  },
  {
    path: '/themedStocks',
    name: 'themedStocks',
    component: themedStocks
  },
  {
    path: '/themedDetail/:id',
    name: 'themedDetail',
    component: themedDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
