// Scroll efects
$(window).on("scroll",()=>{
    // Menu
    var startScroll = $(this).scrollTop()
    if(startScroll > 80){
        $(".menu").addClass("scroll-menu")
    }else{
        $('.menu').removeClass('scroll-menu')
    }

    // Animate Scroll
    let progress = document.getElementById('progressbar')

    let totalHeight = document.body.scrollHeight - window.innerHeight
    
    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progress.style.height = progressHeight + "%"
    
    // Texto
    let content = document.querySelector(".row")
    let contentPosition = content.getBoundingClientRect().top
    let screenPosition = window.innerHeight
    if(contentPosition < screenPosition){
        content.classList.add("active")
    }

    // Serviços
    if(startScroll > 740){
      $('.service--1, .service--2, .service--3').each(function(j){
        var $this = $(this)
        setTimeout(function () {
          $this.addClass('unhide')
        }, 200 * j)
		  })
    }

    // Skils
    if(startScroll > 1610){
      $('.skill-per').each(function(){
        var $this = $(this)
        var per = $this.attr('per')
        $this.css("width", per)
      })
    }

    // Buttom form
    if(startScroll > 2900){
      $(".buttom").addClass("ani-buttom")
    }
})

//  Owl-carrousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    controlls: false,
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 3
      },
      1000:{
        items: 5
      },
    }
})
