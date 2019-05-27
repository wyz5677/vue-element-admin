<!--Created by 姜汉宝 on 2018/11/6.-->
<template>
  <div class="column-filter">
    <el-popover
      placement="bottom"
      trigger="click"
    >
      <div class="proper">
        <slot name="title" />
        <div class="proper-content">
          <el-checkbox
            v-model="checkAll"
            class="check-all"
            label="全选"
            @change="handleCheckAllChange"
          />
          <el-checkbox-group v-model="checkList">
            <template v-if="options.length < 12">
              <div
                v-for="(item, index) in options"

                :key="index"
                class="item"
              >
                <el-checkbox class="checkbox" :label="item.value">{{ item.label }}</el-checkbox>
              </div>
            </template>
            <template v-if="!(options.length < 12)">
              <div
                v-for="(item, index) in options"
                :key="new Date().getTime() + index"
              >
                <template v-if="index%2 === 0">
                  <el-checkbox class="checkbox" :label="item.value">{{ item.label }}</el-checkbox>
                  <el-checkbox v-if="options[(index + 1)]" class="checkbox" :label="options[(index + 1)].value">{{ options [(index + 1)].label }}</el-checkbox>
                </template>
              </div>
            </template>
          </el-checkbox-group>
        </div>
        <el-row type="flex" justify="start" class="operation">
          <el-button type="primary" size="small" @click="save">确定</el-button>
          <el-button type="primary" size="small" @click="cancel">取消</el-button>
        </el-row>
      </div>
      <div ref="filterButton" slot="reference">
        <el-button ref="filterButton" slot="reference" :icon="icon" :size="size" :loading="loading"><i v-if="iconClass.length" class="iconfont" :class="'icon-' + iconClass" />{{ buttonText }}</el-button>
        <!--<sup v-show="showMoreMark && options.length !== value.length" class="remark"><i class="el-icon-plus"></i></sup>-->
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'ColumnFilter',
  /**
   * @prop {String} size - 按钮尺寸 参考elementui的按钮组件对应的参数
   * @prop {String} buttonText - 按钮文本
   * @prop {Object[]} options - 列数据
   * @prop {Object} options[].label - 列名
   * @prop {Object} options[].value - 列的key值
   * @prop {Array} value - 选中的列的key值组成的数据
   */
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    // 是否显示更多的标记
    showMoreMark: {
      type: Boolean,
      default: false
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'small'
    },
    // 按钮icon
    icon: {
      type: String,
      default: 'el-icon-edit'
    },
    // 按钮显示的文本
    buttonText: {
      type: String,
      default: '列筛选器'
    },
    width: {
      type: String,
      default: '100px'
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      loading: false,
      checkAll: true, // 是否全选
      checkList: []
    }
  },
  watch: {
    checkList: {
      deep: true,
      handler(val) {
        if ((val.length === this.options.length) !== this.checkAll) {
          this.checkAll = !this.checkAll
        }
      }
    },
    value: {
      immediate: true,
      handler(val) {
        this.checkList = val
      }
    }
  },
  methods: {
    toggleLoading(flag) {
      if (flag === undefined) {
        this.loading = !this.loading
      } else {
        this.loading = flag
      }
    },
    // 全选切换
    handleCheckAllChange(val) {
      if (val) {
        this.checkList = [].concat(this.options.map((val) => { return val.value }))
      } else {
        this.checkList = []
      }
    },
    toggle() {
      this.$refs['filterButton'].click()
    },
    save() {
      if (this.checkList.length) {
        this.$emit('input', this.checkList)
        // 子组件传给父组件
        this.$emit('sure', this.checkList, this.options.filter((val) => { return this.checkList.includes(val.value) }))
        this.toggle()
      } else {
        this.$message({
          type: 'warning',
          message: '未选中任意一项'
        })
      }
    },
    cancel() {
      this.checkList = this.value
      this.toggle()
    }
  }
}
</script>

<style scoped lang="less">
  .el-checkbox+.el-checkbox {
    margin-left: 16px;
  }
  .checkbox {
    width: 140px;
  }
  .remark{
    background-color: #ebeef5;
    color: #f56c6c;
    border-radius: 15px;
    height: 20px;
    width: 20px;
    line-height: 20px;
    display: block;
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 0;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
  }
  .item{
    margin-bottom: 10px;
  }
  .column-filter{
    position: relative;
  }
  .proper-content{
    max-height: 300px;
    overflow-y: auto;
  }
  .proper{
    position: relative;
    padding-bottom: 43px;
  }
  .operation{
    position: absolute;
    bottom: 0;
  }
</style>
