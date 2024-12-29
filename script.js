// script.js
document.addEventListener("DOMContentLoaded", function() {
    const candles = document.querySelectorAll('.candle::after');
    
    setInterval(() => {
        candles.forEach(candle => {
            candle.style.animationDuration = Math.random() * 0.2 + 0.1 + 's';  // Thay đổi thời gian hiệu ứng lấp lánh
        });
    }, 500);
});
