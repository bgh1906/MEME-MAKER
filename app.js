const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;//캔버스 크기설정 js
canvas.height = 800;//캔버스 크기설정 js

// // 사각형 추가
// ctx.rect(50, 50, 100, 100);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// // 기존의 경로와 단절
// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.rect(450, 450, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

// // 브러쉬 이동 및 선 그리기
// ctx.moveTo(550, 550);
// ctx.lineTo(650, 550);
// ctx.lineTo(650, 650);
// ctx.lineTo(550, 650);
// ctx.lineTo(550, 550);
// ctx.fill();

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();