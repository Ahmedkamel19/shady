let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
let main = elements[i];

main.addEventListener("click", function () {
let element = main.parentElement.parentElement;
let indicators = main.querySelectorAll("img");
let child = element.querySelector("#menu");
let h = element.querySelector("#mainHeading>div>p");

h.classList.toggle("font-semibold");
child.classList.toggle("hidden");
indicators[0].classList.toggle("rotate-180");
});
}

function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }

  $(".egypt").click(function(){
    $(".dllr").addClass("hidden")
    $(".dllr-1").addClass("hidden")
      $(".dllr-3").addClass("hidden")
    $(".egp").removeClass("hidden")
    $(".egp-1").removeClass("hidden")
    $(".egp-3").removeClass("hidden")
  })

  $(".usd").click(function(){
    $(".dllr").removeClass("hidden")
    $(".dllr-1").removeClass("hidden")
      $(".dllr-3").removeClass("hidden")
    $(".egp").addClass("hidden")
    $(".egp-1").addClass("hidden")
    $(".egp-3").addClass("hidden")
  })


  $(".mon-1").click(function(){
    $(".one-mon").removeClass("hidden")
    $(".three-mon").addClass("hidden")
    $(".six-mon").addClass("hidden")
    $(".one-year").addClass("hidden")
    $(".thr-mon").addClass("hidden")

    if($(".dllr").hasClass("hidden")){
      $(".egp").html("EGP 3000 <br>").removeClass("hidden")
      $(".egp-1").html("EGP 750 <br>").removeClass("hidden")
      $(".egp-3").html("EGP 1250 <br>").removeClass("hidden")
    }else{
      $(".dllr").html("95$ <br>").removeClass("hidden")
      $(".dllr-1").html("25$ <br>").removeClass("hidden")
      $(".dllr-3").html("40$ <br>").removeClass("hidden")
    }
    
    
  }
  )
  $(".mon-3").click(function(){
    $(".one-mon").addClass("hidden")
    $(".three-mon").removeClass("hidden")
    $(".six-mon").addClass("hidden")
    $(".one-year").addClass("hidden")
    $(".thr-mon").addClass("hidden")

    if($(".dllr").hasClass("hidden")){
      $(".egp").html("EGP 6000 <br>").removeClass("hidden")
      $(".egp-1").html("EGP 1500 <br>").removeClass("hidden")
      $(".egp-3").html("EGP 2500 <br>").removeClass("hidden")
    }else{
      $(".dllr").html(" 195$ <br>").removeClass("hidden")
      $(".dllr-1").html(" 50$ <br>").removeClass("hidden")
      $(".dllr-3").html(" 80$ <br>").removeClass("hidden")
    }
    }
  )
  $(".mon-6").click(function(){
    $(".one-mon").addClass("hidden")
    $(".three-mon").addClass("hidden")
    $(".six-mon").removeClass("hidden")
    $(".one-year").addClass("hidden")
    $(".thr-mon").addClass("hidden")

    if($(".dllr").hasClass("hidden")){
      $(".egp").html("EGP 10500 <br>").removeClass("hidden")
      $(".egp-1").html("EGP 2750 <br>").removeClass("hidden")
      $(".egp-3").html("EGP 4500 <br>").removeClass("hidden")
    }else{
      $(".dllr").html("340$ <br>").removeClass("hidden")
      $(".dllr-1").html("90$ <br>").removeClass("hidden")
      $(".dllr-3").html("145$ <br>").removeClass("hidden")
    }
    }

  )
  $(".year").click(function(){
    $(".one-mon").addClass("hidden")
    $(".three-mon").addClass("hidden")
    $(".six-mon").addClass("hidden")
    $(".one-year").removeClass("hidden")
    $(".thr-mon").addClass("hidden")

    if($(".dllr").hasClass("hidden")){
      $(".egp").html("EGP 18000 <br>").removeClass("hidden")
      $(".egp-1").html("EGP 5000 <br>").removeClass("hidden")
      $(".egp-3").html("EGP 8000 <br>").removeClass("hidden")
    }else{
      $(".dllr").html("580$ <br>").removeClass("hidden")
      $(".dllr-1").html("160$ <br>").removeClass("hidden")
      $(".dllr-3").html("260$ <br>").removeClass("hidden")
    }
  }
  )





  // Assuming you have a script tag at the end of your body
const card = document.querySelector('.group');

card.addEventListener('click', () => {
  card.classList.toggle('rotated');
});

