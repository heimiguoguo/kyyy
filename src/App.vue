<template>
  <el-container>
    <el-header>
      <strong>{{msg}}</strong>
    </el-header>
    <el-container id="main">
      <el-aside style="width:'201px'">
        <Outline></Outline>
      </el-aside>
      <el-main id="section">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Outline from "./components/Outline.vue";

export default {
  name: "App",
  components: {
    Outline
  },
  mounted() {
    // $("#main").css("height", $(window).height() - 60 + "px");
  },
  data() {
    return {
      msg: "2017年全国硕士研究生入学统一考试 英语（一）真题完整版"
    };
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

.el-aside {
  width: 201px;
  background-color: rgb(84, 92, 100);
}

#section {
  font-size: 13pt;
  font-family: "Times New Roman", "serif";
  line-height: 24px;

  .direction {
    font-style: italic;
  }

  .passage {
    margin-bottom: 20px;

    .paragraph {
      text-indent: 24px;
    }
  }
}
</style>
