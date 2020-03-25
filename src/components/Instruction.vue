<template>
  <el-collapse v-model="activeNames" @change="onCollapseToggle">
    <el-collapse-item name="1">
      <template slot="title">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item,index) in navItems"
            :key="index"
            :to="{ path: `/${item}` }"
          >{{item.slice(0,1).toUpperCase()+item.slice(1)}}</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      {{direction}}
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  props: {
    direction: String,
    onCollapseToggle: Function
  },
  data() {
    return {
      activeNames: ["1"]
    };
  },
  computed: {
    navItems: function() {
      let result = this.$route.path.split("/");
      result.shift();
      return result;
    }
  },
  mounted() {
    // console.log(this.$route)
    this.onCollapseToggle(this.activeNames)
  },
  methods: {
    
  }
};
</script>