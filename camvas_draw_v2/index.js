const canvas = $("#mycanvas")[0];
const context = canvas.getContext("2d");

// まずmouseを定義して、xy(位置)は0にする
let mouse = {x:0, y:0};

// グローバル変数として以下定義しておく
let color = document.getElementById("mycolor");
console.log(mycolor.value);
let bold = '10'

// mousemoveした時、mouseの位置を取得する
// pageX Yはwindow上の場所なので、canvasの場所を調整
$("#mycanvas").on("mousemove", function(e){ 
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    // console.log(mouse.x)
});

// マウスでmousedown=クリックした時
$("#mycanvas").on("mousedown", function (e) {
    // console.log(mouse.x, mouse.y)

    context.strokeStyle = color.value;
    context.lineWidth = bold;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
    $("#mycanvas").on("mousemove", onPaint);
});

// 線を引く関数を定義する
const onPaint = function () {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
};

//   offを使うと定義されたfunctionを止めることができる
$("#mycanvas").on("mouseup", function () {
    $("#mycanvas").off("mousemove", onPaint);
});

// clearをクリックするとcanvas内容を消す
$("#clear").on("click", function () {
    context.clearRect(0,0,canvas.width, canvas.height);
});

// 画像をtoDataURLで文字に変換し、localstrageにほかん
$("#save").on("click",function () {
    var image = canvas.toDataURL();
    var i = 0
    i = localStorage.length+1;
    if(i<4){
        localStorage.setItem(i, image);
    } else{
        alert("localStrageがいっぱいです。保存できませんでした。")
        return
    };
    location.reload();
});

// 消しゴム 色はwhite
$("#eraser").on("click",function () {
    color.value = '#ffffff'
  });

// 線の太さ
$("#bold5").on("click",function () {
    bold = 5;
  });

$("#bold10").on("click",function () {
    bold = 10;
});

$("#bold20").on("click",function () {
    bold = 20;
});

$("#bold70").on("click",function () {
    bold = 70;
});

// canvas1にlocalstrageを表示**********************111*****
const canvas1 = $("#image1")[0];
const context1 = canvas1.getContext("2d");

  $(document).ready(function(){
    const restoreImage1 = localStorage.getItem(1);
    var image1 = new Image();
    image1.src = restoreImage1;
    image1.onload = function () {
        context1.drawImage(image1,0,0,canvas1.width, canvas1.height);
      }
  })

//   保存された画像をクリックするとcanvasに表示
  $("#image1").on("click",function () {
    const restoreImage = localStorage.getItem(1);
    var image = new Image();
    image.src = restoreImage;
    image.onload =function () {
        context.drawImage(image, 0,0)
    };
});

// ダブルクリックするとlocalstrageから消える
$("#image1").dblclick(function () {
    localStorage.removeItem(1);
  });

  // canvas2にlocalstrageを表示**********************222*****
const canvas2 = $("#image2")[0];
const context2 = canvas2.getContext("2d");

  $(document).ready(function(){
    const restoreImage2 = localStorage.getItem(2);
    var image2 = new Image();
    image2.src = restoreImage2;
    image2.onload = function () {
        context2.drawImage(image2,0,0,canvas2.width, canvas2.height);
      }
      
  })

  //   保存された画像をクリックするとcanvasに表示
  $("#image2").on("click",function () {
    const restoreImage = localStorage.getItem(2);
    var image = new Image();
    image.src = restoreImage;
    image.onload =function () {
        context.drawImage(image, 0,0)
    };
    
});

// ダブルクリックするとlocalstrageから消える
$("#image2").dblclick(function () {
    localStorage.removeItem(2);
  });


// canvas3にlocalstrageを表示**********************333*****
const canvas3 = $("#image3")[0];
const context3 = canvas3.getContext("2d");

  $(document).ready(function(){
    const restoreImage3 = localStorage.getItem(3);
    var image3 = new Image();
    image3.src = restoreImage3;
    image3.onload = function () {
        context3.drawImage(image3,0,0,canvas3.width, canvas3.height);
      }

  })

  //   保存された画像をクリックするとcanvasに表示
  $("#image3").on("click",function () {
    const restoreImage = localStorage.getItem(3);
    var image = new Image();
    image.src = restoreImage;
    image.onload =function () {
        context.drawImage(image, 0,0)
    };
});

// ダブルクリックするとlocalstrageから消える
$("#image3").dblclick(function () {
    localStorage.removeItem(3);
    location.reload();
  });

// 保存した画像を全て削除する

$("#allClear").on("click", function () {
    localStorage.removeItem(1);
    localStorage.removeItem(2);
    localStorage.removeItem(3);
    location.reload();
  });


// 絵をクリックするとキャンパスに表示

$("#sample1").on("click",function () {
    const sample1 = new Image();
    sample1.src = "img/poo.gif";
    context.drawImage(sample1, 0, 0, canvas.width, canvas.height);
  })

  $("#sample2").on("click",function () {
    const sample1 = new Image();
    sample1.src = "img/poo1.png";
    context.drawImage(sample1, 0, 0, canvas.width, canvas.height);
  })

  $("#sample3").on("click",function () {
    const sample1 = new Image();
    sample1.src = "img/poo2.jpg";
    context.drawImage(sample1, 0, 0, canvas.width, canvas.height);
  })
