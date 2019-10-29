<template>
  <div class="navMenu">
    <template v-for="navMenu in navMenus">
      <el-menu-item
        v-if="navMenu.childs==null&&navMenu.state==='ENABLE'"
        :key="navMenu.id"
        :data="navMenu"
        :index="'/'+navMenu.id.replace(/_/g,'/')"
        :route="navMenu.value"
      >
        <i :class="navMenu.icon"></i>
        <span slot="title">{{navMenu.alias}}</span>
      </el-menu-item>

      <el-submenu
        v-if="navMenu.childs&&navMenu.state==='ENABLE'"
        :key="navMenu.id"
        :data="navMenu"
        :index="navMenu.id"
      >
        <template slot="title">
          <i :class="navMenu.icon"></i>
          <span>{{navMenu.alias}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {}
};
</script>
 
<style scoped>
.navMenu{
  height: 100%;
}
</style>