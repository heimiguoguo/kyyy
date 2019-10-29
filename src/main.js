import Vue from 'vue/dist/vue.esm.js';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Section1 from './components/section1.vue'
import Section2 from './components/section2/index.vue'
import Section2PartA from './components/section2/partA/index.vue'
import Section2PartAText1 from './components/section2/partA/text1.vue'
import Section2PartAText2 from './components/section2/partA/text2.vue'
import Section2PartAText3 from './components/section2/partA/text3.vue'
import Section2PartAText4 from './components/section2/partA/text4.vue'
import Section2PartB from './components/section2/partB.vue'
import Section2PartC from './components/section2/partC.vue'
import Section3 from './components/section3.vue'

import section1 from './data/section1.json'
// import Footer from './footer.jsx'
// import $ from 'jquery';
// import 'ztree/css/zTreeStyle/zTreeStyle.css'
// import 'ztree'

Vue.use(ElementUI)
Vue.use(VueRouter)

const root = document.createElement("div");
document.body.appendChild(root);
// window.$ = $;
// $(function () {
//   $(".module-article-content").css('height', $(window).height())
// })

// $.ajax({
//   url: '/user/getAllUsers',
//   type: 'get',
//   dataType: 'json',
//   success: function (data) {
//     console.log(data);
//   }
// })

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Section1,
      props: {
        section1,
        answerSheet_section1: ["",""]
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
      children: [
        {
          path: 'partA',
          component:Section2PartA,
          children: [
            {
              path: 'text1',
              component: Section2PartAText1
            },
            {
              path: 'text2',
              component: Section2PartAText2
            },
            {
              path: 'text3',
              component: Section2PartAText3
            },
            {
              path: 'text4',
              component: Section2PartAText4
            }
          ]
        },
        {
          path:'partB',
          component:Section2PartB
        },
        {
          path:'partC',
          component:Section2PartC
        }
      ]
    },
    {
      path:'/section3',
      component:Section3
    }
  ]
})

new Vue({
  render: (h) => h(App),
  router
}).$mount(root)

