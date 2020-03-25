<template>
  <div>
    <el-menu
      default-active="0"
      :default-openeds="['section2','section2_partA']"
      :collapse="collapse"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="onMenuItemSelect"
      @open="onSubMenuOpen"
      router
    >
      <template v-for="navMenu in navMenus">
        <el-menu-item
          v-if="!navMenu.childs"
          :key="navMenu.id"
          :index="'/'+navMenu.id.replace(/_/g,'/')"
        >
          <i :class="navMenu.icon"></i>
          <span slot="title">{{navMenu.alias}}</span>
        </el-menu-item>

        <el-submenu v-if="navMenu.childs" :key="navMenu.id" :index="navMenu.id">
          <template slot="title">
            <i :class="navMenu.icon"></i>
            <span>{{navMenu.alias}}</span>
          </template>
          <template v-for="navMenu in navMenu.childs">
            <el-menu-item
              v-if="!navMenu.childs"
              :key="navMenu.id"
              :index="'/'+navMenu.id.replace(/_/g,'/')"
            >
              <i :class="navMenu.icon"></i>
              <span slot="title">{{navMenu.alias}}</span>
            </el-menu-item>
            <el-submenu v-if="navMenu.childs" :key="navMenu.id" :index="navMenu.id">
              <template slot="title">
                <i :class="navMenu.icon"></i>
                <span>{{navMenu.alias}}</span>
              </template>
              <template v-for="navMenu in navMenu.childs">
                <el-menu-item :key="navMenu.id" :index="'/'+navMenu.id.replace(/_/g,'/')">
                  <i :class="navMenu.icon"></i>
                  <span slot="title">{{navMenu.alias}}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>


<script>
import NestedMenu from "./NestedMenu.vue";

export default {
  props: {
    navMenus: Array,
    collapse: Boolean,
    onMenuItemSelect: Function
  },
  components: {
    NestedMenu
  },
  data() {
    return {};
  },
  methods: {
    onSubMenuOpen(index, indexPath) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}
</style>

