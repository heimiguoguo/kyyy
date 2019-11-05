<template>
  <div class="text">
    <div class="text_title">Text {{$route.params.index}}</div>
    <el-card>
      <el-row :gutter="40">
        <el-col :span="12">
          <div class="passage">
            <div class="paragraph" v-for="item in paragraphList" :key="item.index">{{item.content}}</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="question_wrapper" v-for="(item, index) in questionList" :key="item.index">
            <div class="question">
              <span class="index">{{item.index}}.</span>
              <span class="title">{{item.question}}</span>
            </div>

            <div class="options">
              <el-radio-group v-model="answerSheet[index]">
                <el-radio
                  v-for="(value,key) in item.options"
                  :key="key"
                  :label="key"
                >[{{key}}] {{value}}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>


<script>
// import paragraphList from "../../../data/section2/partA/text1/passage.json";
// import questionList from "../../../data/section2/partA/text1/answer.json";
export default {
  data() {
    return {
      paragraphList: [],
      questionList: [],
      answerSheet: []
    };
  },
  mounted() {
    // console.log(this.$route.params.index);
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      // console.log("fetch data...");
      this.paragraphList = require(`../../../data/section2/partA/text${this.$route.params.index}/passage.json`);
      this.questionList = require(`../../../data/section2/partA/text${this.$route.params.index}/answer.json`);
    }
  }
};
</script>


<style lang="less" scoped>
.text_title {
  color: tomato;
  text-align: center;
}

.question_wrapper {
  line-height: 24px;
  .question {
    display: flex;
    .index {
      width: 27px;
    }
  }

  .options {
    margin-left: 30px;
    .el-radio-group {
      .el-radio {
        display: block;
        line-height: 24px;
      }
      .el-radio + .el-radio {
        margin-left: 0px;
      }
    }
  }
}
</style>
