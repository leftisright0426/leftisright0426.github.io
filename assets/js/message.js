const messages = [
    "当时本科宿舍第一次集体团建就是去食堂吃饭，我听舍友们讲自己的高中生活直接生理性流泪了，完全控制不住没意识到就哭了，也就是那时候我才意识到原来我的高中模式在985学生里不是并全中国通用，而是异类。",
    "增加标语数量，都是些血淋淋的标语。时间越来越紧，学生完全没有自己掌握的时间。对老师的要求越来越多。以前只有高三六点四十五开始早读2，现在是全校都是六点四十五开始早读，",
    "在我们学校，从高一开始，每周6天半的课程，每天至少14个小时在教室里度过，娱乐活动几乎没有。学习、成绩、高考、班主任，这些字眼就像紧箍咒一样扣在我们的脑袋上。在这个巨大的牢笼里我们度日如年，开始还有些不适应，后来慢慢麻木，再到后来就是屈服。",
    "我理解教育资源的差异，却也在和大学同学交流时真正感到震惊。我惊讶于原来高中并不是必须以高考为中心，原来有学校的社团活动并非名存实亡，原来有人的高三可以七点就放学。而在此情况下，我们最后站在了同样的大学校园。",
    "为什么我的高中同学们要付出比这些顶尖高中学子多得多的精力和努力，才能堪堪有资格去拼一个二本的名额。",
];

let currentMessageIndex = 0;
const messageTextElement = document.getElementById("messageText");
const nextMessageButton = document.getElementById("nextMessage");

nextMessageButton.addEventListener("click", function() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // 用于循环显示留言
    messageTextElement.textContent = messages[currentMessageIndex];

    // 动态效果：简单的缩放效果来强调留言改变
    messageTextElement.parentElement.style.transform = 'scale(1.05)';
    setTimeout(() => {
        messageTextElement.parentElement.style.transform = 'scale(1.05)';
    }, 3000);
});
// script.js 文件
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.emerge');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
