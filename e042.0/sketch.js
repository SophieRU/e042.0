var points = [[12, 2], [5, 5], [2, 5],[-3,7],[-1,4,5],[-6,4],[-11,-1],[-7,-5],[-1,-7],[3,-8],[5,-11],[4,-7],[6,-5],[3,-6],[2,-6],[-1,-5]]; //list資料\
var frameSize = [200]; // 定義外框大小

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  //把points 內的值都*50
  for (var i = 0; i < points.length; i++) {
    for (var j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(0);
  stroke(255)//顏色
  
  strokeWeight(4)
  text("淡江大學教育科技系",mouseX,mouseY)//文字
  
  translate(mouseX, mouseY); //滑鼠平移位置
  scale(1, -1); //顛倒

  for (var i = 0; i < points.length-1; i++) {
    var ratio1 = map(i, 0, points.length-1, 0, 1);
    var ratio2 = map(i+1, 0, points.length-1, 0, 1);
    var clr = lerpColor(color("#ef233c"), color("#ffe5ec"), ratio1);//混合顏色找出漸層
    var middlecolor = lerpColor(color("#f72585"), color("#ef233c"), (ratio1+ratio2)/2)//混合顏色找出漸層
    stroke(clr);//顏色
    strokeWeight(5);//粗細
    for(r=1;r<6;r++){//層數
      textSize(25*(mouseX/1000)*r)//文字大小
      line(points[i][0]*(mouseX/1000)*r, points[i][1]*(mouseX/1000)*r, points[i+1][0]*(mouseX/1000)*r, points[i+1][1]*(mouseX/1000)*r);
    }
  


  }
  var clr = lerpColor(color("#ef233c"), color("#f72585"), map(0, 0, points.length-1, 0, 1));
  stroke(clr);//顏色
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //線條
}


