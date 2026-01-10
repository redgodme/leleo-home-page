<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="#">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/style.css">
    <script>var meting_api = 'https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&referrer=:referrer';</script>
    <meta name="description" content="欢迎来到Leleo的奇妙世界！">
    <meta name="keywords" content="Leleo,leleo,个人主页,个人网站">
    <title></title>

    <style>
      /* 全屏透明层：用户点击任何地方都会触发播放 */
      #play-shield {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0); /* 完全透明 */
        z-index: 999999; /* 确保在最顶层 */
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="play-shield" title="点击任意位置激活音乐"></div>

    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>

    <script>
      (function() {
        const shield = document.getElementById('play-shield');
        
        const tryPlay = () => {
          const meting = document.querySelector('meting-js');
          if (meting && meting.aplayer) {
            meting.aplayer.play().then(() => {
              console.log("音乐已激活");
              shield.remove(); // 播放成功，移除遮罩
            }).catch(err => {
              console.log("激活失败，等待交互", err);
            });
          } else {
            // 如果还没加载出来，1秒后自动重试
            setTimeout(tryPlay, 1000);
          }
        };

        // 点击、触摸、滑动都会触发
        shield.addEventListener('click', tryPlay);
        shield.addEventListener('touchstart', tryPlay);
      })();
    </script>
  </body>
</html>
