<template>
  <div>
    <el-menu-item
      v-if="navMenu.childs==null&&navMenu.state==='ENABLE'"
      :key="navMenu.id"
      :index="'/'+navMenu.id.replace(/_/g,'/')"
    >
      <i :class="navMenu.icon"></i>
      <span slot="title">{{navMenu.alias}}</span>
    </el-menu-item>

    <el-submenu
      v-if="navMenu.childs&&navMenu.state==='ENABLE'"
      :key="navMenu.id"
      :index="navMenu.id"
    >
      <template slot="title">
        <i :class="navMenu.icon"></i>
        <span>{{navMenu.alias}}</span>
      </template>
      <NavMenu v-for="(navMenu,index) in navMenu.childs" :key="index" :navMenu="navMenu"></NavMenu>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
  props: {
    navMenu: Object
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
 
<style scoped>
</style>