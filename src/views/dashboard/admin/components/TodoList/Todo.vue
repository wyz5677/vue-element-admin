<template>
  <li :class="{ completed: todo.done, editing: editing }" class="todo">
    <div class="view">
      <!-- 单选框盒子 -->
      <input
        :checked="todo.done"
        class="toggle"
        type="checkbox"
        @change="toggleTodo( todo)"
      >
      <!-- 文本 双击的时候变成可编辑-->
      <label @dblclick="editing = true" v-text="todo.text" />
      <!-- 删除按钮 -->
      <button class="destroy" @click="deleteTodo( todo )" />
    </div>
    <input
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      class="edit"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    >
  </li>
</template>

<script>
export default {
  name: 'Todo',
  // 注册自定义指令
  directives: {
    focus(el, { value }, { context }) {
      // value是从binding解构的,是指令绑定的值
      // context是从vnode解构的
      if (value) {
        context.$nextTick(() => {
          // 聚焦元素
          el.focus()
        })
      }
    }
  },
  props: {
    // 把defalutList的每一项传进来
    todo: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      // 默认不可编辑
      editing: false
    }
  },
  methods: {
    deleteTodo(todo) {
      // 当删除按钮被点击的时候 把点击的那行传给父组件
      this.$emit('deleteTodo', todo)
    },
    editTodo({ todo, value }) {
      this.$emit('editTodo', { todo, value })
    },
    toggleTodo(todo) {
      // 当按钮发生切换 把值传给父组件
      this.$emit('toggleTodo', todo)
    },
    doneEdit(e) {
      // 拿到输入的值
      const value = e.target.value.trim()
      console.log(this)
      const { todo } = this
      // 如果没有值就删除此行
      if (!value) {
        this.deleteTodo({
          todo
        })
        // 否则如果可编辑
      } else if (this.editing) {
        // 这里传对象是为了之后不再做一层包装去传给父组件对象
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    // 当按下esc键,放弃本次编辑
    cancelEdit(e) {
      // 把值复原
      e.target.value = this.todo.text
      this.editing = false
    }
  }
}
</script>
