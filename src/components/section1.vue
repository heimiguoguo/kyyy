<template>
  <div class="section-container">
    <Instruction :direction="section1.direction" :onCollapseToggle="onCollapseToggle"></Instruction>
    <el-card>
      <el-row :gutter="40">
        <el-col :span="12">
          <div class="passage">
            <div
              class="paragraph"
              v-for="paragraph in section1.paragraphList"
              :key="paragraph.paragraphIndex"
            >{{paragraph.content}}</div>
          </div>
        </el-col>
        <el-col :span="12">
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
import Instruction from "./Instruction.vue";
export default {
  components: {
    Instruction
  },
  props: {
    section1: {
      require: true,
      type: Object
    }
  },

  data() {
    return {
      answerSheet: [],
      activeMenu: ""
    };
  },

  mounted() {
    // console.log(this.section1);
  },

  methods: {
    change(value) {
      console.log(this.answerSheet);
      console.log(value);
    },
    onCollapseToggle(val) {
      this.activeMenu = val;
    }
  }
};
</script>

<style lang="less" scoped>
.section-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  & /deep/ .el-card {
    flex: 1;
    .el-card__body {
      height: 100%;
      box-sizing: border-box;
      .el-row {
        height: 100%;
        .el-col {
          height: 100%;
          overflow-y: auto;
        }
      }
    }
  }
}

.question {
  display: flex;
  align-items: flex-start;
  font-size: 12pt;
  font-family: "Times New Roman", "serif";

  .index {
    width: 37px;
    text-align: right;
    padding-right: 10px;
  }

  .options {
    flex: 1;
    .el-radio-group {
      width: 100%;
      .el-radio {
        width: 50%;
        margin-left: 0;
        line-height: 26px;
      }
    }
  }
}
</style>