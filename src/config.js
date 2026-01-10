<script>
  window.addEventListener('load', () => {
    const m = document.querySelector('meting-js');
    const timer = setInterval(() => {
      if (m && m.aplayer) {
        clearInterval(timer);
        // 1. 先尝试静音播放（有些浏览器允许静音自动播放）
        m.aplayer.audio.muted = true;
        m.aplayer.play();

        // 2. 只要用户一动，立刻取消静音
        const unlock = () => {
          m.aplayer.audio.muted = false;
          m.aplayer.play(); // 确保播放
          ["click", "touchstart", "mousemove"].forEach(e => 
            window.removeEventListener(e, unlock)
          );
        };
        ["click", "touchstart", "mousemove"].forEach(e => 
          window.addEventListener(e, unlock)
        );
      }
    }, 500);
  });
</script>
