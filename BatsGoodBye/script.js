// 倒计时管理器 - 控制显示哪个倒计时
function updateCountdowns() {
    const farewellDate = new Date('2025-08-31T21:00:00');
    const returnDate = new Date('2026-06-23T00:00:00');
    const now = new Date();

    // 获取所有倒计时元素和离别语区域
    const farewellCountdown = document.getElementById('farewell-countdown');
    const returnCountdown = document.querySelector('.pixel-countdown:not(#farewell-countdown)');
    const farewellMessageContainer = document.getElementById('farewell-message-container');

    // 如果离别语区域不存在，创建一个提示
    if (!farewellMessageContainer) {
        console.error('无法找到离别语区域元素');
    }

    if (!farewellCountdown || !returnCountdown) {
        console.error('无法找到倒计时元素');
        return;
    }

    if (now < farewellDate) {
        // 还未退岛，显示退岛倒计时，隐藏回归倒计时和离别语
        farewellCountdown.style.display = 'block';
        returnCountdown.style.display = 'none';
        if (farewellMessageContainer) farewellMessageContainer.style.display = 'none';
        updateFarewellCountdown();
    } else if (now < returnDate) {
        // 已退岛但未回归，显示回归倒计时和离别语，隐藏退岛倒计时
        farewellCountdown.style.display = 'none';
        returnCountdown.style.display = 'block';
        if (farewellMessageContainer) farewellMessageContainer.style.display = 'block';
        updateReturnCountdown();
    } else {
        // 已回归，隐藏所有倒计时和离别语，显示"预计已回归"
        farewellCountdown.style.display = 'none';
        if (farewellMessageContainer) farewellMessageContainer.style.display = 'none';
        const returnTitle = returnCountdown.querySelector('h3');
        const returnDisplay = returnCountdown.querySelector('.countdown-display');
        if (returnTitle && returnDisplay) {
            returnTitle.textContent = '预计已回归';
            returnTitle.style.fontSize = '2.5em';
            returnTitle.style.fontWeight = 'bold';
            returnDisplay.style.display = 'none';
        }
    }
}

// 退岛倒计时功能
function updateFarewellCountdown() {
    const farewellDate = new Date('2025-08-31T21:00:00');
    const now = new Date();
    const timeLeft = farewellDate - now;

    // 获取退岛倒计时数字元素
    const daysElement = document.getElementById('farewell-days');
    const hoursElement = document.getElementById('farewell-hours');
    const minutesElement = document.getElementById('farewell-minutes');
    const secondsElement = document.getElementById('farewell-seconds');

    if (daysElement && hoursElement && minutesElement && secondsElement) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(3, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    } else {
        console.error('无法找到退岛倒计时数字元素');
    }
}

// 回归倒计时功能
function updateReturnCountdown() {
    const returnDate = new Date('2026-06-23T00:00:00');
    const now = new Date();
    const timeLeft = returnDate - now;

    // 获取回归倒计时元素
    const countdownTitle = document.querySelector('.pixel-countdown:not(#farewell-countdown) h3');
    const countdownDisplay = document.querySelector('.pixel-countdown:not(#farewell-countdown) .countdown-display');

    // 分别检查每个元素是否存在
    if (!countdownTitle || !countdownDisplay) {
        console.error('无法找到回归倒计时元素');
        return;
    }

    // 正常计时
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement && hoursElement && minutesElement && secondsElement) {
        daysElement.textContent = days.toString().padStart(3, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    } else {
        console.error('无法找到回归倒计时数字元素');
    }

    if (timeLeft <= 0) {
        // 倒计时结束
        countdownTitle.textContent = '预计已回归';
        countdownTitle.style.fontSize = '2.5em';
        countdownTitle.style.fontWeight = 'bold';
        countdownDisplay.style.display = 'none';
    } else {
        // 正常计时
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        if (daysElement && hoursElement && minutesElement && secondsElement) {
            daysElement.textContent = days.toString().padStart(3, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
        } else {
            console.error('无法找到倒计时数字元素');
        }
    }
}





// 像素粒子效果
function createPixelParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 4px;
        height: 4px;
        background: #3838f2;
        pointer-events: none;
        z-index: 999;
        animation: pixelFloat 2s ease-out forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 2000);
}

// 添加像素浮动动画
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes pixelFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// 鼠标点击生成像素粒子
document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createPixelParticle(
                e.clientX + (Math.random() - 0.5) * 20,
                e.clientY + (Math.random() - 0.5) * 20
            );
        }, i * 50);
    }
});



// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化倒计时管理器
    updateCountdowns();
    setInterval(updateCountdowns, 1000);

    // 添加欢迎动画
    const container = document.querySelector('.pixel-container');
    container.style.animation = 'pixelFadeIn 1s ease-out';

    // QQ logo点击事件
    const qqLogoLink = document.getElementById('qqLogoLink');
    if (qqLogoLink) {
        qqLogoLink.addEventListener('click', () => {
            // 复制QQ号到剪贴板
            const qqNumber = '3958281494';
            navigator.clipboard.writeText(qqNumber).then(() => {
                // 创建提示信息
                const notification = document.createElement('div');
                notification.className = 'pixel-notification';
                notification.textContent = '已将坦率的QQ号复制到剪切板';
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    padding: 10px 20px;
                    background: rgba(0, 0, 0, 0.9);
                    border: 3px solid #3838f2;
                    color: #3838f2;
                    font-family: 'MPlus', 'Courier New', monospace;
                    font-size: 16px;
                    z-index: 1000;
                    animation: pixelNotification 2s ease-out forwards;
                `;
                document.body.appendChild(notification);

                // 3秒后移除提示
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            }).catch(err => {
                console.error('无法复制到剪贴板: ', err);
            });
        });
    }
});

// 添加提示动画
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes pixelNotification {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        10% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        90% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(notificationStyle);

// 添加淡入动画
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes pixelFadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(fadeInStyle);