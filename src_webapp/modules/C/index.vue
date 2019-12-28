<template>
  <div class="cpt_c" id="cpt_c">
    <h4> C 的内容</h4>
    
    <h4> --------------------- vuex ---------------------</h4>
    <h4>vuex.num： {{num}} </h4>

    <h4> --------------------- Element-ui ---------------------</h4>
    <cpt_elem></cpt_elem>
  </div>
</template>

<script>
  // 异步引入 vue组件
  var cpt_Element_ui = function (resolve) { 
    return require(['../cpt_Element_ui/index.vue'], resolve);
  };
  export default {
    computed:{
      num: function () { 
        return this.$store.state.num;
      }
    },
    components:{
      "cpt_elem":cpt_Element_ui,
    },
    mounted:function () {  
      
    }
  }
</script>