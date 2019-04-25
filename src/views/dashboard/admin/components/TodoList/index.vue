<template>
  <section class="todoapp">
    <!-- header autocomplete 属性规定输入字段是否应该启用之前输入过的值 这里关闭了。 -->
    <header class="header">
      <input class="new-todo" autocomplete="off" placeholder="Todo List" @keyup.enter="addTodo">
    </header>
    <!-- main section -->
    <!-- 当todos没有长度的时候,就不显示 -->
    <section v-show="todos.length" class="main">
      <!-- 这是总选择器 -->
      <input id="toggle-all" :checked="allChecked" class="toggle-all" type="checkbox" @change="toggleAll({ done: !allChecked })">
      <!-- for 属性规定 label 与哪个表单元素绑定。 -->
      <label for="toggle-all" />
      <ul class="todo-list">
        <todo
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :todo="todo"
          @toggleTodo="toggleTodo"
          @editTodo="editTodo"
          @deleteTodo="deleteTodo"
        />
      </ul>
    </section>
    <!-- footer  这里是H5c3提供的新标签-->
    <footer v-show="todos.length" class="footer">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <!-- 这里是遍历的对象 -->
        <li v-for="(val, key) in filters" :key="key">
          <!-- 阻止a标签的默认行为,当点击此a标签的时候,会把当前的索引号赋值给visibility,然后class:selected就生效了 -->
          <a :class="{ selected: visibility === key }" @click.prevent="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <!-- <button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">
        Clear completed
      </button> -->
    </footer>
  </section>
</template>

<script>
import Todo from './Todo.vue'

const STORAGE_KEY = 'todos'
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
const defalutList = [
  { text: 'star this repository', done: false },
  { text: 'fork this repository', done: false },
  { text: 'follow author', done: false },
  { text: 'vue-element-admin', done: true },
  { text: 'vue', done: true },
  { text: 'element-ui', done: true },
  { text: 'axios', done: true },
  { text: 'webpack', done: true }
]
export default {
  components: { Todo },
  // 过滤器
  filters: {
    // 这里做处理  如果remaining是1 那么就显示item 否则显示items
    pluralize: (n, w) => n === 1 ? w : w + 's',
    // 过滤器处理   将首字母大写
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  },
  data() {
    return {
      visibility: 'all',
      filters,
      // todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defalutList
      todos: defalutList
    }
  },
  computed: {
    allChecked() {
      // 对todos遍历 如果所有元素都满足条件 就返回true 否则返回false 这里是false
      return this.todos.every(todo => todo.done)
    },
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      // 余额的意思   过滤出done为false的项的长度
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    // 存到LocalStorage
    setLocalStorage() {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    },
    // 添加
    addTodo(e) {
      console.log(e)
      // e.target.value可以拿到输入框的值
      const text = e.target.value
      if (text.trim()) {
        this.todos.push({
          text,
          done: false
        })
        this.setLocalStorage()
      }
      e.target.value = ''
    },
    // 切换状态
    toggleTodo(val) {
      val.done = !val.done
      this.setLocalStorage()
    },
    // 删除
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
      this.setLocalStorage()
    },
    // 拿到子组件编辑的值并存入Loc
    editTodo({ todo, value }) {
      todo.text = value
      this.setLocalStorage()
    },
    // 未使用
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.done)
      this.setLocalStorage()
    },
    // 总勾选
    toggleAll({ done }) {
      this.todos.forEach(todo => {
        todo.done = done
        this.setLocalStorage()
      })
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss';
</style>
