// JavaScript content
const infoTexts = [
    "生源问题——省、市中学跨区招生、掐尖招生、缺乏优质生源",
    "师资问题——师资力量差、相对待遇低、教学压力大，职称评审困难，年龄结构不合理",
    "硬件设施——基础设施老旧、缺乏教学设备、体育场所",
    "教学方法——县中模式褒贬不一，办学模式缺乏特色，“严格管理”、“应试为基”的基本格局长期未变"
];
const infoTitles = ["生源问题", "师资问题", "硬件设施", "教学方法"];

function onHover(gridNumber) {
    const infoBox = document.getElementById(`Lcy_grid${gridNumber}`);
    infoBox.classList.add('smallText');
    infoBox.textContent = infoTexts[gridNumber - 1];
}

function onOut(gridNumber) {
    const infoBox = document.getElementById(`Lcy_grid${gridNumber}`);
    infoBox.classList.remove('smallText');
    infoBox.textContent = infoTitles[gridNumber - 1];
}
// 定义每个格子的提示信息
// const Tmessages = {
//     "Lcy_grid1": "省、市中学跨区招生、掐尖招生、缺乏优质生源",
//     "Lcy_grid2": "师资力量差、相对待遇低、教学压力大，职称评审困难，年龄结构不合理",
//     "Lcy_grid3": "基础设施老旧、缺乏教学设备、体育场所",
//     "Lcy_grid4": "县中模式褒贬不一，办学模式缺乏特色，“严格管理”、“应试为基”的基本格局长期未变",
// };
//
// // 获取所有需要交互的格子
// const boxes = document.querySelectorAll('.Grid_box');
//
// // 获取用于显示提示信息的元素
// const tooltip = document.getElementById('Grid_tooltip');
//
// // 为每个格子添加鼠标悬浮和移出事件
// boxes.forEach((box, index) => {
//     box.addEventListener('mouseenter', function () {
//         tooltip.innerHTML =Tmessages[this.id]; // 设置对应的提示信息
//         tooltip.style.opacity = 1; // 使提示框可见
//         //输出hello world
//         console.log("hello world");
//
//         // 根据格子的位置调整提示框的位置
//         const boxRect = box.getBoundingClientRect();
//         const tooltipRect = tooltip.getBoundingClientRect();
//         if (index % 2 === 0) { // 对于左边的格子
//             tooltip.style.left = (boxRect.left - tooltipRect.width - 20) + 'px'; // 20是额外的空间
//             tooltip.style.top = (boxRect.top + window.scrollY) + 'px';
//         } else { // 对于右边的格子
//             tooltip.style.left = (boxRect.right + 20) + 'px';
//             tooltip.style.top = (boxRect.top + window.scrollY) + 'px';
//         }
//     });
//
//     box.addEventListener('mouseleave', function () {
//         tooltip.style.opacity = 0; // 使提示框不可见
//     });
// });
document.getElementById('tiaozhuan1').addEventListener('click', function() {
    window.location.href = 'https://www.caixin.com/2022-03-02/101849673.html';
});
document.getElementById('tiaozhuan2').addEventListener('click', function() {
    window.location.href = 'https://www.caixin.com/2022-03-02/101849673.html';
});
document.getElementById('tiaozhuan3').addEventListener('click', function() {
    window.location.href = 'https://www.caixin.com/2022-03-02/101849673.html';
});
