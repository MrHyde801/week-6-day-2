let container = $('#BigContainer')

container.append(`<div class="box1"></div>`)
container.append(`<div class="box2"></div>`)
container.append(`<div class="box3"></div>`)
container.append(`<div class="box4"></div>`)
container.append(`<div class="box5"></div>`)
container.append(`<div class="box6"></div>`)
container.append(`<div class="box7"></div>`)
container.append(`<div class="box8"></div>`)
container.append(`<div class="box9"></div>`)
container.append(`<div class="box10"></div>`)
container.append(`<div class="box11"></div>`)
container.append(`<div class="box12"></div>`)
container.append(`<div class="box13"></div>`)
container.append(`<div class="box14"></div>`)
container.append(`<div class="box15"></div>`)
container.append(`<div class="box16"></div>`)

$('#BigContainer div').on('click', function(){
        $(this).toggleClass('box1 clicked')
    });