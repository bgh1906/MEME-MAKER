const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;//캔버스 크기설정 js
canvas.height = 800;//캔버스 크기설정 js

// 사각형 추가
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

// 기존의 경로와 단절
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();