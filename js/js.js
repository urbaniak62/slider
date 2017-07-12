/*-------------------mes variables---------------*/
var i= 0;
var image =[];
var time= 3000;
var avant=document.getElementById=("avant");
var arriere=document.getElementById=("arriere");

/*----------------chemin image dans le tableau------*/

image.push("img/images2.jpg");
image.push("img/images4.jpg");
image.push("img/images.jpeg");
image.push("img/images1.jpeg");
image.push("img/images3.jpeg");
// console.log(image);


function img(){

  document.getElementsByTagName("img")[0].src = image[i];
  // console.log(document.getElementsByTagName("img")[0].src);
  if(i < image.length ){
    i++;
  }else {
    i = 0;

  }
  /*------------declaration du tps sur le tagName img--*/
  setTimeout(img, time);
}
img();
