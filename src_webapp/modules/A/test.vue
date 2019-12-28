<template>
  <div>
    <div class="test">
      test_info
    </div>
  </div>
</template>



<script>
  import './test.css';
  import obj from './test.js';
  export default {
    mounted:function () { 
      obj.fn();
    },
  }
</script>