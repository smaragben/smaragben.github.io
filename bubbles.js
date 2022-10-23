
const bubbles = document.querySelectorAll('.item');

bubbles.forEach(bubble => {
  bubble.addEventListener('animationend', function () {
    //console.log('animation ended', event);

    bubble.remove();
  });
  bubble.addEventListener('mouseover', function () {
  //  console.log('hover', event);

    bubble.remove();

});
})
var createbubbles = true;
document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        createbubbles= false
    } else {
        createbubbles=true;
    }
});
var counter=0;
var wmin= 10;
var wmax= 100;
var rmin= 0;
var rmax = 100;
var colours= [["227, 91, 255"], ["153, 237, 195"], ["242, 255, 91"]]
var score = 0

setInterval(
function()
{

  if(createbubbles){
    for(i =0;i <5;i ++) {
      //console.log("here")
      var colour= colours[Math.floor(Math.random() * (3)-0.0000000001)]
      var height= Math.floor(Math.random() * (3)-0.0000000001)*30+40;
      var width= Math.floor(Math.random() * (wmax-wmin))+wmin
      var right= Math.random() * (4-0.0000000001)
      right =right*15
      if (right>=15) {
        right+=70
      }
      var div = $("<div>", {id: counter.toString(), "class": "item", "style":"  z-index: 0; position:absolute;top:"+height+"%;right:"+right.toString()+"%;width:"+width.toString()+"px;height:"+width.toString()+"px; \
        background: radial-gradient( farthest-corner at 70% 45%,rgba("+colour+",0.5)  0%,  rgba("+colour+",0) 100%);"});

      $(".bubble").append(div);
      var elem = document.getElementById(counter.toString())
      elem.addEventListener('animationend', function () {
          //console.log('animation ended', event);
          $(this).remove();
        });
        elem.addEventListener('mouseover', function () {
          //console.log('hover', event);
          score+=1
          span.textContent=score.toString()
          $(this).remove();

      });
      counter++
    }


  }


}, 500);
