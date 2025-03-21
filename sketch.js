function setup() {
    createCanvas(400, 400);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("#2196F3");
    } else {
      background("#F44336");
    }
  
    textSize(40);
    text("😂", xJogador1, 100);
    text("😉", xJogador2, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 350) {
      text("venciii!", 50, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("ganheiii!", 50, 200);
      noLoop();
    }
  }
  
  function keyReleased() {
    if (key == "d") {
      xJogador1 += random(30);
    }
    if (key == "f") {
      xJogador2 += random(30);
    }
  }
  