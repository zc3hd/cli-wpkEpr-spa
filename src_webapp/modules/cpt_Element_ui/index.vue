<template>
  <div class="cpt_element_ui">
    <h1> Element_ui 组件</h1>

    <div class="block">
      <h3>&nbsp;</h3>
      <h3 class="demonstration">日期时间选择器</h3>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>

    <div class="block">
      <h3>&nbsp;</h3>
      <h3 class="demonstration">颜色选择器</h3>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>

    <div class="block">
      <h3>&nbsp;</h3>
      <h3 class="demonstration">进度条</h3>
      <el-progress :percentage=progress></el-progress>
    </div>

  </div>
</template>

<script>
 
  export default {
    data:function () { 
      return {
        value1: '',
        color1: '#409EFF',
        progress:70,
      };
    },
    mounted:function () {
    //  setTimeout(() => {
       
    //  }, 1000);
      // setInterval(function () { 
      //   this.progress++;
      //   if (this.progress>100) {
      //     this.progress = 0;
      //   }
      // }.bind(this), 100);
    }
  };
</script>


