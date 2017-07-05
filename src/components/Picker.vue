<template lang="html">
  <div class="picker-wrap">
    <button type="button" class="waves-effect waves-button waves-float waves-light" @click="show">创建群</button>
  </div>
</template>

<script>
import Picker from 'better-picker'

export default {
  data () {
    return {
      data1: [
        {
          text: '项目名称1',
          value: 123
        }, {
          text: '项目名称2',
          value: 256
        },
        {
          text: '项目名称3',
          value: 448
        }
      ]
    }
  },
  created () {
    var _this = this

    this.picker1 = new Picker({
      data: [_this.data1],
      title: '请选择一个项目'
    })

    this.picker1.on('picker.select', function (selectedVal, selectedIndex) {
      _this.value = _this.data1[selectedIndex[0]].text
    })
    this.picker1.on('picker.valuechange', function (selectedVal, selectedIndex) {
      _this.$router.push({path: '/addflock', query: { id: selectedVal[0] }})
    })
  },
  methods: {
    show () {
      this.picker1.show()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/style";

  .picker-wrap{
    button{
      display: block;
      margin: 0;
      padding: .6em 1em;
      width: 100%;
      background-color: $btnColor9;
      color: $color;
      font-size: .43rem;
    }
  }
</style>
