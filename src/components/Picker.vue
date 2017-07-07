<template lang="html">
  <div class="picker-wrap">
    <button type="button" class="waves-effect waves-button waves-float waves-light" @click="show">创建群</button>
  </div>
</template>

<script>
import Picker from 'better-picker'

export default {
  props: {
    picker: {
      type: Object
    }
  },
  data () {
    return {
      list: [],
      data1: [
        {
          text: '项目名称1',
          value: 1
        }, {
          text: '项目名称2',
          value: 2
        },
        {
          text: '项目名称3',
          value: 3
        }
      ]
    }
  },
  watch: {
    list () {
      this.openPicker()   // 项目选择器数据更新后再执行
    }
  },
  methods: {
    show () {
      var _this = this
      if (this.picker.uid === '0') {   // 没绑定号码
        this.swal({
          title: '请输入您的手机号',
          text: '您发布项目的手机号',
          type: 'input',
          inputType: 'tel',
          showCancelButton: true,
          closeOnConfirm: false,
          cancelButtonText: '取消',
          showLoaderOnConfirm: true,
          animation: 'slide-from-top',
          inputPlaceholder: '输入手机号'
        },
        function (inputValue) {
          if (inputValue === false) {
            return false
          }
          if (inputValue === '') {
            _this.swal.showInputError('手机号不能为空')
            return false
          }
          if (!(/^1(3|4|5|7|8)\d{9}$/.test(inputValue))) {
            _this.swal.showInputError('手机号有误')
            return false
          }
          _this.mobileGetData(inputValue)      // 输入手机号，再获取项目数据
        })
      } else {    // 绑定了号码
        this.getData()     // 绑定成功后，再获取项目数据
      }
    },
    getData () {    // 绑定成功后，再获取项目数据
      var _this = this
      this.axios.get('wxgroupapi.php?type=myprojectlist')
      .then(function (response) {
        if (response.data.status === 1) {
          _this.list = response.data.data
        } else {
          _this.swal('网络错误', response.data.msg, 'error')
        }
      })
      .catch(function (error) {
        _this.swal('网络错误', error, 'error')
      })
    },
    mobileGetData (value) {    // 输入手机号，再获取项目数据
      var _this = this
      this.axios({
        method: 'post',
        url: 'wxgroupapi.php',
        data: {
          'type': 'bangding',
          'mobile': value
        }
      })
      .then(function (response) {
        // alert(JSON.stringify(response))
        if (response.data.status === 1) {
          _this.list = response.data.data
          _this.swal.close()
        } else {
          _this.swal('网络错误', response.data.msg, 'error')
        }
      })
      .catch(function (error) {
        _this.swal('网络错误', error, 'error')
      })
    },
    openPicker () {           // 打开项目选择器
      var _this = this
      var datalsit = []       // picker数据只能是 text和value
      _this.list.forEach(function (item, index, arr) {
        var temp = {}
        temp.text = item.projectName
        temp.value = item.id
        datalsit.push(temp)
      })
      this.picker1 = new Picker({
        data: [datalsit],
        title: '请选择一个项目'
      })
      this.picker1.show()       // 显示picker选择器
      this.picker1.on('picker.valuechange', function (selectedVal, selectedIndex) {
        _this.$router.push({path: '/addflock', query: { id: selectedVal[0] }})
      })
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
