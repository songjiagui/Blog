import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/:navId',
    name: 'Pag',
    component: () => import(/* webpackChunkName: "Pag." */ '../views/Pag/Pag.vue'),
    meta: {keepAlive: true, parentPath: 'base'},
    children:[
      {
        path: ':id',
        name: 'Article',
        component: () => import(/* webpackChunkName: "Article" */ '../views/Article/Article.vue')
      },
      {
        path: '/:navId',
        name: 'Art',
        component: () => import(/* webpackChunkName: "Article" */ '../views/Article/Article.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  base: process.env.BASE_URL,
})
// router.beforeEach(() => {
//   // 不要在这里调用next
//   // 通过to来判断是否重载数据
//   console.log("路由发生了变化");
// })
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
