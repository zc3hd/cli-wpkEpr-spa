// setInterval(() => {


// }, 1000);



module.exports = {
  fn: function() {
    document.querySelector(".test")
      .innerHTML = "第三方插件_" + Date.now();
  }
};