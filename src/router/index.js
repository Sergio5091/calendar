
import AppNew from '@/components/AppNew.vue'
import AppNew2 from '@/components/AppNew2.vue'
import AppNew3 from '@/components/AppNew3.vue'
import AboutView from '@/views/AboutView.vue'
import AccueilView from '@/views/accueilView.vue'
import BlogView from '@/views/BlogView.vue'
import ConnexionView from '@/views/ConnexionView.vue'
import MyApp from '@/views/MyApp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: AccueilView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/about',
      name: 'About',
      component: ConnexionView
    },
     {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: MyApp,
        children: [
        { path: '/MyApp', component: AppNew },
        { path: '/MyApp/AppNew2', component: AppNew2 },
        { path: '/MyApp/AppNew3', component: AppNew3 },
        
        ]
    }
  ],
})

export default router




