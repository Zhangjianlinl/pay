// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 防止页面被缩放
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });

    // 长按保存提示
    const qrcode = document.querySelector('.qrcode');
    if (qrcode) {
        qrcode.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        qrcode.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    }

    // 微信环境检测
    function isWechat() {
        return /MicroMessenger/i.test(navigator.userAgent);
    }

    // 企业微信环境检测
    function isWorkWechat() {
        return /wxwork/i.test(navigator.userAgent);
    }

    // 根据环境显示不同提示
    if (isWorkWechat()) {
        console.log('当前在企业微信环境');
    } else if (isWechat()) {
        console.log('当前在微信环境');
    }
});
