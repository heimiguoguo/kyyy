import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Section1 from './components/section1.vue'
import Section2 from './components/section2/index.vue'
import Section2PartA from './components/section2/partA/index.vue'
import Section2PartAText from './components/section2/partA/text.vue'
import Section2PartB from './components/section2/partB.vue'
import Section2PartC from './components/section2/partC.vue'
import Section3 from './components/section3.vue'

import section1 from './data/section1.json'
import section2_partA from './data/section1'

Vue.use(ElementUI)
Vue.use(VueRouter)

const root = document.createElement("div");
document.body.appendChild(root);


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Section1,
      props: {
        section1,
        answerSheet_section1: []
      }
    },
    {
      path: '/section1',
      component: Section1,
      props: {
        section1,
        answerSheet_section1: []
      }
    },
    {
      path: '/section2',
      component: Section2,
      props: {
        section2: section2_partA
      },
      children: [
        {
          path: 'partA',
          component: Section2PartA,
          children: [
            {
              path: 'text/:index',
              component: Section2PartAText,
              props: {
                direction: section2_partA.direction
              },
            }
          ]
        },
        {
          path: 'partB',
          component: Section2PartB
        },
        {
          path: 'partC',
          component: Section2PartC
        }
      ]
    },
    {
      path: '/section3',
      component: Section3
    }
  ]
})

new Vue({
  render: (h) => h(App),
  router
}).$mount(root)

