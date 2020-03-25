<template>
  <el-container>
    <el-header>
      <strong>{{msg}}</strong>
    </el-header>
    <el-container id="main">
      <el-aside style="width:auto">
        <Outline :nav-menus="navMenus" :collapse="collapse" :onMenuItemSelect="onMenuItemSelect"></Outline>
        <el-button
          type="danger"
          :icon="collapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
          circle
          @click="toggleMenu"
        ></el-button>
      </el-aside>
      <el-main id="section">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import navMenus from "./sturcture";
import Outline from "./components/Outline.vue";
import Outline1 from "./App1.vue";

export default {
  name: "App",
  components: {
    Outline,
    Outline1
  },
  data() {
    return {
      msg: "2017年全国硕士研究生入学统一考试 英语（一）真题完整版",
      breadcrumb: "",
      navMenus,
      collapse: true
    };
  },
  computed: {
    direction: function() {
      require;
    }
  },
  methods: {
    onMenuItemSelect(indexPath) {
      indexPath = indexPath.substring(1, indexPath.length);
      this.breadcrumb = "";
      const arr = indexPath.split("/");
      let cur = navMenus.childs;
      for (var item of arr) {
        if (cur) {
          cur = cur.find(ele => ele.id.indexOf(item) !== -1);
          this.breadcrumb += cur.name + " / ";
          cur = cur.childs;
        }
      }
      this.breadcrumb = this.breadcrumb.substring(
        0,
        this.breadcrumb.length - 1
      );
    },
    toggleMenu() {
      this.collapse = !this.collapse;
    }
  }
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.el-header {
  line-height: 60px;
  text-align: center;
  background-color: #20232a;
  color: #ffffff;
}

#main {
  height: calc(100vh - 60px);
  overflow-y: auto;
}

.el-aside {
  // width: auto;
  background-color: rgb(84, 92, 100);
  .el-button{
    position:fixed;
    left: 13px;
    bottom: 13px;
  }
}

#section {
  font-size: 13pt;
  font-family: "Times New Roman", "serif";
  line-height: 24px;

  .passage {
    .paragraph {
      text-indent: 24px;
    }
  }
}
</style>
