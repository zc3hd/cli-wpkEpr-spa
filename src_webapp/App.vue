<template>
  <div class="app" id="app">
    <!-- 导航 -->
    <nav>
      <router-link v-for="item in nav" :to=item.path :key=item.id>{{item.name}}</router-link>
    </nav>
    <!-- 视图 -->
    <div class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<style lang="less">
  // scoped 
  * {
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Microsoft Yahei';
    border: 0;
  }
  a {
    text-decoration: none;
  }
  .app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 200px;
    position: relative;
    >nav {
      width: 200px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #222;
      >a {
        display: block;
        height: 36px;
        background-color: #00868B;
        color: #222;
        line-height: 36px;
        text-align: center;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 3px;
        &:hover {
          background-color: #00C5CD;
        }
      }
      >a.router-link-active {
        background-color: #00C5CD;
      }
    }
    >.main {
      width: 100%;
      height: 100%;
    }
  }

</style>


<script>
export default {
  data:function () { 
    return {
      nav: null
    }
  },
  mounted: function() {
   
    setTimeout(function () { 
      this.nav = [
        { id:1,path: '/a', name: '路由-a' },
        { id:2,path: '/b', name: '路由-b' },
        { id:3,path: '/c', name: '路由-c' },
      ];
     }.bind(this), 1000);
  }
}
</script>






