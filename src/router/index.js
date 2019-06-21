import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
   ,{
      path:     '/HelloWorld/'
     ,name:     'HelloWorld'
     ,component: HelloWorld
    }
   ,{
        path: '/HelloWorld2/'
       ,name: 'HelloWorld2'
       ,component: HelloWorld2
    }
  ]
})
