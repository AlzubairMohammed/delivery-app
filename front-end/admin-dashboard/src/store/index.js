import { createStore } from 'vuex'
import products from './products'
import users from './users'
import categories from './categories'
import subSection from './subSection'

export default createStore({
  state: {
    dark:false,
    language:true,
    activeTab:'login',
    Cards :[
      {"id":"1", "name":"Html" },
      {"id":"2", "name":"Css " },
      {"id":"3", "name":"JS" }
    ],
    players:[
      {"id":"1", "name":" لؤلؤه" ,"img":"", "points":500 ,"times":48,"country":"quter" },
      {"id":"2", "name":" هادي"  ,"img":"", "points":600 ,"times":91 ,"country":"sudan"},
      {"id":"3", "name":" دانيه" ,"img":"", "points":1000 ,"times":100 ,"country":"bahren"} ,
    ],
    teams:[
      {"id":"1", "name":"Doaa Osman" ,"img":"", "work":"Desing and front end","country":"sudan" },
      {"id":"2", "name":" Alzuber Mohammed"  ,"img":"", "work":"full stack and js devolaber","country":"sudan"},
    ],
    Quations:[
      {"Quation":"what opacity valus", ansers:["1 , 0"," 0 , 2","0 , 1 , 2"," 1 , 2"] }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    categories,
    users,
    subSection
  }
})
