/*-------------------mes variables---------------*/
var i= 0;
var image =[];
var time= 3000;
var avant=document.getElementById=("avant");
var arriere=document.getElementById=("arriere");

/*----------------chemin image dans le tableau------*/

image.push("img/3d.jpg");
image.push("img/3d1.jpg");
image.push("img/3d2.jpg");
image.push("img/3d3.jpg");
image.push("img/3d4.jpg");
image.push("img/3d5.jpg");
image.push("img/3d6.jpg");
image.push("img/3d7.jpg");
image.push("img/3d8.jpg");
image.push("img/3d9.jpg");
image.push("img/3d10.jpg");

// console.log(image);


function img(){

  document.getElementsByTagName("img")[0].src = image[i];
  // console.log(document.getElementsByTagName("img")[0].src);
  if(i < image.length -1 ){
    i++;
  }else {
    i = 0;

  }

  /*------------declaration du tps sur le tagName img--*/
  setTimeout(img, time);
}
img();
