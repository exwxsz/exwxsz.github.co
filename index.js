/* shift+alt+a注释 */
// 定义一个函数，用于生成随机颜色
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 当页面加载完成时执行以下代码
  window.onload = function() {
    // 选中所有具有.progress类的元素
    var progressBars = document.querySelectorAll('.progress');
    // 遍历每个进度条元素
    progressBars.forEach(function(bar) {
      // 为每个进度条设置随机的背景颜色
      bar.style.backgroundColor = getRandomColor();
    });
  };
  
if (!!window.ActiveXObject || "ActiveXObject" in window) { //is IE?
  alert('朋友，上古浏览器不支持呢~');
}

