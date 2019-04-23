<!--这个组件中，只有一个 props，但是名字叫 value，内部还有一个 currentValue，当改变 currentValue 时，会触发一个自定义事件 @input，
并把 currentValue 的值返回。这就是一个 v-model 的语法糖，它要求 props 有一个叫 value 的项，同时触发的自定义事件必须叫 input。这样就可以在自定义组件上用 v-model 了：
<vModel v-model="value"></vModel>   -->
<!--试验了布尔型传值 可以直接传递属性就是true-->
<!--试验了具名插槽-->
<template>
  <div>
    {{ currentValue }}
    <button @click="handleClick">Click</button>
    <slot>哈撒给</slot>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  mounted() {
    console.log(this.disabled)
  },
  methods: {
    handleClick() {
      this.currentValue += 1
      this.$emit('input', this.currentValue)
    }
  }
}
</script>
