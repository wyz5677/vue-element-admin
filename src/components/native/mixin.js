export default {
  inject: ['name'],
  props: {
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.name)
  },
  methods: {
    // handleClick(event) {
    //   this.$emit('123', event)
    // }
    handleClick(event) {
      console.log('我被触发了')
    }
  }
}
