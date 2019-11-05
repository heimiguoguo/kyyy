<template>
  <div>
    <div>
      <strong class="section_title">Section I &nbsp;Use of English</strong>
    </div>
    <div class="direction">Directions:</div>
    <div class="direction">{{section1.direction}}</div>
    <el-card>
      <el-row :gutter="40">
        <el-col :span="10">
          <div class="passage">
            <div
              class="paragraph"
              v-for="paragraph in section1.paragraphList"
              :key="paragraph.paragraphIndex"
            >{{paragraph.content}}</div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="question" v-for="(question,index) in section1.questionList" :key="index">
            <div class="index">{{index+1}}.</div>
            <div class="options">
              <el-radio-group v-model="answerSheet[index]">
                <el-radio
                  v-for="(item,key) in question.answers"
                  :key="key"
                  :label="key"
                  @change="change"
                >[{{key}}] {{item}}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    section1: {
      require: true,
      type: Object
    }
  },

  data() {
    return {
      answerSheet: []
    };
  },

  mounted() {
    // console.log(this.section1);
  },

  methods: {
    change(value) {
      console.log(this.answerSheet);
      console.log(value);
    }
  }
};
</script>

<style lang="less" scoped>
.question {
  display: flex;
  align-items: center;
  font-size: 12pt;
  font-family: "Times New Roman", "serif";
  line-height: 24px;

  .index {
    width: 37px;
    text-align: right;
    padding-right: 10px;
  }

  .options {
    flex: 1;
    .el-radio-group {
      width: 100%;
      display: flex;
      .el-radio {
        flex: 1;
      }
    }
  }
}
</style>