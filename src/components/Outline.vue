<template>
  <div>
    <!--左侧菜单组件-->
    <el-menu
      default-active="0"
      :default-openeds="['section2','section2_partA']"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="onMenuItemSelect"
      @open="onSubMenuOpen"
      router
    >
      <NestedMenu :navMenus="navMenus.childs"></NestedMenu>
    </el-menu>
  </div>
</template>


<script>
import NestedMenu from "./NestedMenu.vue";
export default {
  components: {
    NestedMenu
  },
  data() {
    return {
      navMenus: {
        childs: [
          {
            id: "section1",
            parentMenuId: 0,
            name: "section I",
            icon: "el-icon-message",
            alias: "Section I",
            state: "ENABLE",
            type: "NONE"
          },
          {
            id: "section2",
            parentMenuId: 0,
            name: "section II",
            icon: "el-icon-message",
            alias: "Section II",
            state: "ENABLE",
            type: "NONE",
            childs: [
              {
                id: "section2_partA",
                parentMenuId: 0,
                name: "Part A",
                icon: "el-icon-message",
                alias: "Part A",
                state: "ENABLE",
                type: "NONE",
                childs: [
                  {
                    id: "section2_partA_text1",
                    parentMenuId: 0,
                    name: "Text 1",
                    icon: "el-icon-message",
                    alias: "Text 1",
                    state: "ENABLE",
                    type: "NONE"
                  },
                  {
                    id: "section2_partA_text2",
                    parentMenuId: 0,
                    name: "Text 2",
                    icon: "el-icon-message",
                    alias: "Text 2",
                    state: "ENABLE",
                    type: "NONE"
                  },
                  {
                    id: "section2_partA_text3",
                    parentMenuId: 0,
                    name: "Text 3",
                    icon: "el-icon-message",
                    alias: "Text 3",
                    state: "ENABLE",
                    type: "NONE"
                  },
                  {
                    id: "section2_partA_text4",
                    parentMenuId: 0,
                    name: "Text 4",
                    icon: "el-icon-message",
                    alias: "Text 4",
                    state: "ENABLE",
                    type: "NONE"
                  }
                ]
              },
              {
                id: "section2_partB",
                parentMenuId: 0,
                name: "Part B",
                icon: "el-icon-message",
                alias: "Part B",
                state: "ENABLE",
                type: "NONE"
              },
              {
                id: "section2_partC",
                parentMenuId: 0,
                name: "Part C",
                icon: "el-icon-message",
                alias: "Part C",
                state: "ENABLE",
                type: "NONE"
              }
            ]
          },
          {
            id: "section3",
            parentMenuId: 0,
            name: "section III",
            icon: "el-icon-message",
            alias: "Section III",
            state: "ENABLE",
            type: "NONE"
          }
        ]
      }
    };
  },
  methods: {
    onMenuItemSelect(index, indexPath) {
      // document.getElementById(index).scrollIntoView();
    },
    onSubMenuOpen(index, indexPath) {
      console.log(index)
      // document.getElementById(index).scrollIntoView();
    }
  }
};
</script>

<style scoped>
.el-menu{
  border-right: none;
}
</style>

