<template>
  <div class="cpt_a" id="cpt_a">
    <h4> A 的内容</h4>
    <h4> --------------------- router ---------------------</h4>
    <h4>$route.params.id：{{$route.params.id}}</h4> 
    <h4>$route.path：{{$route.path}}</h4> 
    <h4>$route.query： {{$route.query}}</h4>
    <h4> --------------------- axios ---------------------</h4>
    <h4>$http.post： {{post_data}}</h4>
    <h4> --------------------- vuex ---------------------</h4>
    <h4>vuex.num： {{num}} <button @click=add>num++</button> </h4>

    <img src="./imgs/001.png" alt="">
    <demo></demo>
  </div>
</template>

<style lang="less" scoped>
  .cpt_a {
    h4 {
      font-size: 20px;
      color: blue;
    }
  }
</style>



<script>
  // 异步引入组件：组件内同步引入第三方；
  var test = function (resolve) { 
    return require(['./test.vue'], resolve);
  };

  
  export default {
    data:function () { 
      return {
        post_data:null,
      }
    },
    computed:{
      num: function () { 
        return this.$store.state.num;
      }
    },
    methods:{
      add:function () { 
        this.$store.commit('add', 'xx');
      }
    },
    mounted:function () { 
      // console.log(this.$http);
      // this.$http
      //   .post('/api/js_demo/font.do', {
      //     firstName: 'Fred',
      //     lastName: 'Flintstone'
      //   })
      //   .then(function(res) {
      //     this.post_data = res.data;
      //   }.bind(this))
      //   .catch(function(error) {
      //     console.log(error, 1);
      //   });


      // 第三方JS插件,只能加载一次
      // require.ensure(['./test.css','./test.js'], function(require){
      //     require('./test.css');
      //     require('./test.js');
      // },'third_test'); 



    },
    components:{
      demo:test
    }
  }
</script>