# kyyy
### 自己动手搭建的vue开发环境，搭建考研英语在线考试平台

* .vue文件中style标签用scoped修改以后，样式不能穿透子组件，要修改子组件的内部样式，需要用'/deep/'(Less/Sass)或者'>>>'(Stylus)穿透，具体参考[Vue中的scoped和scoped穿透](https://segmentfault.com/a/1190000015932467?utm_source=tag-newest)

* 修改样式最好不要用class或者style的动态渲染，尤其是有滚动条的时候，因为这种方式组件需要重新render，会导致页面闪烁，体验极差

* 使用ElementUI这种第三方组件最好严格按照官网的组件结构嵌套使用\<el-menu>里边直接嵌套\<el-submenu>，不要在\<el-submenu>外面用\<div>包裹一层，否则当collapse Menu组件的时候会出现这样的问题  
![image](./src/imgs/NavMenu.png)



