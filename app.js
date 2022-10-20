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


// // 집 그리기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();


// // 사람 몸통
// ctx.fillRect(210 - 40, 200 - 30, 15, 100);
// ctx.fillRect(350 - 40, 200 - 30, 15, 100);
// ctx.fillRect(260 - 40, 200 - 30, 60, 200);

// // 원그리기 얼굴
// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// // 경로 초기화
// ctx.beginPath();
// ctx.fillStyle = "white";
// // 눈 그리기
// ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();s


// 2.0
// Painting Lines

// 선 굵기 지정
ctx.lineWidth = 2;

// 색상 배열
const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
  ];

function onClick(event) { // onClick 이벤트 선언
    console.log(event);// event에 대한 정보 콘솔출력
    ctx.beginPath();
    ctx.moveTo(0, 0);// 선 시작경로
    const color = colors[Math.floor(Math.random() * colors.length)];// 랜덤으로 선 색상 선택
    ctx.strokeStyle = color;// 현재 ctx 색상을 위의 랜덤값으로 변경
    ctx.lineTo(event.offsetX, event.offsetY);// 현재 마우스좌표
    ctx.stroke();// 선 그리기
}

// 마우스 클릭시 onClick 이벤트 발생
// canvas.addEventListener("click", onClick);
// 마우스 이동시 onClick 이벤트 발생
canvas.addEventListener("mousemove", onClick);

