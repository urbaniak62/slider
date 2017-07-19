/*-------------------mes variables---------------*/
var i= 0;
var image =[];
var time= 3000;


/*----------------chemin image dans le tableau------*/


image.push("img/3d4.jpg");
image.push("img/3d6.jpg");
image.push("img/3d7.jpg");
image.push("img/3d9.jpg");
image.push("img/3d10.jpg");


 console.log(image);


function img(){

  document.getElementsByTagName("img")[0].src = image[i];
  // console.log(document.getElementsByTagName("img")[0].src);
  if(i < image.length -1 ){
    i++;
  }
  else{
  i = 0;
    }

  /*------------declaration du tps sur le tagName img--*/
  setTimeout(img, time);
}

/*------------avancer-d'une-image----------------*/

  function reculer(){


      console.log(reculer);
}

/*--------------reculer-d'une-image----------------*/

function avancer(){
  img();
   clearInterval(img);

  console.log(avancer);
}


img();
