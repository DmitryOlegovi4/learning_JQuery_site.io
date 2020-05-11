
// ОПТИМИЗАЦИЯ МЕНЮ
let navOpen = false;

$('.navBtn').on('click', function () {
    $('.listMenu').css('display','block');
    $('.media').css('display','flex');
    if (!navOpen){
        $('.listMenu').css('display','block');
        $('.media').css('display','flex');
    }else{
        $('.listMenu').css('display','none');
        $('.media').css('display','none');
    }
    navOpen=!navOpen;
});

$(window).on('resize', function(){
    if ($(window).width() > 700) {
        $('.listMenu').css('display','');
        $('.media').css('display','');
    }
});


// КНОПКИ МЕНЮ
$('.menuMain').on('click',function () {
    $('.page1').css('display','flex')
    $('.page2').css('display','none')
    $('.page3').css('display','none')
});
$('.menuProjects').on('click',function () {
    $('.page1').css('display','none')
    $('.page2').css('display','flex')
    $('.page3').css('display','none')
});
$('.menuContacts').on('click',function () {
    $('.page1').css('display','none')
    $('.page2').css('display','none')
    $('.page3').css('display','flex')
});


// КНОПКИ НА ПЕРВОЙ СТРАНИЦЕ
$('.btn1').on('click',function () {
    $('.btn1').addClass('active');
    $('.btn2').removeClass('active');
    $('.btn3').removeClass('active');
    $('.text1').css('display','block')
    $('.text2').css('display','none')
    $('.text3').css('display','none')
});
$('.btn2').on('click',function () {
    $('.btn1').removeClass('active');
    $('.btn2').addClass('active');
    $('.btn3').removeClass('active');
    $('.text1').css('display','none')
    $('.text2').css('display','block')
    $('.text3').css('display','none')
});
$('.btn3').on('click',function () {
    $('.btn1').removeClass('active');
    $('.btn2').removeClass('active');
    $('.btn3').addClass('active');
    $('.text1').css('display','none')
    $('.text2').css('display','none')
    $('.text3').css('display','block')
});


// СЛАЙДЕР
let rootElem = $('.page2');

let width =rootElem.width();
let height =rootElem.height();

$('.screen').width(width);
$('.screen').height(height);

$('.screen .slides li').width(width);
$('.screen .slides li').height(height);

let slideCnt = $('.screen .slides li').length;
$('.screen .slides').width(width*slideCnt);

let x = 0;
const SPEED =500;

$('.btnRight').on('click', function () {
    if (x === slideCnt-1){
        return
    }
    $('.screen .slides').animate({'left': `-${++x*width}px`
    }, SPEED);
    $('.circle').removeClass('active');
    $('.circle').eq(x).addClass('active');
});

$('.btnLeft').on('click', function () {
    if (x === 0){
        return
    }
    $('.screen .slides').animate({'left': `-${--x*width}px`,
    }, SPEED);
    $('.circle').removeClass('active');
    $('.circle').eq(x).addClass('active');
});

$('.circle').on('click', function () {
    let cur = $(this);
    let index = $('.circle').index(cur);
    x = index;
    $('.circle').removeClass('active');
    $(this).addClass('active');
    $('.screen .slides').animate({'left': `-${x*width}px`,
    }, SPEED);
});


 // МОДАЛЬНОЕ ОКНО
let pageElem = $('.page');
$('.btnCall').on('click', function () {
    let modalContainer = $('<div>');
    modalContainer.addClass('modal-container');
    let modalElem = $('<div>');
    modalElem.addClass('modal-elem');
    let form = $('<form>');
    form.addClass('modal-form');
    let fioText = $('<p>');
    fioText.text('Ваше ФИО');
    let fio = $('<input>');
    fio.addClass('modal-fio'); //создал класс на всякий случай, если будет необходимо что-то поменять
    let emailText = $('<p>');
    emailText.text('Введите e-mail');
    let email = $('<input>');
    email.addClass('modal-email'); //создал класс на всякий случай, если будет необходимо что-то поменять
    let phoneText = $('<p>');
    phoneText.text('Укажите телефон');
    let phone = $('<input>');
    phone.addClass('modal-phone'); //создал класс на всякий случай, если будет необходимо что-то поменять
    phone.attr('type','number');
    let aboutText = $('<p>');
    aboutText.text('Информация о Вас');
    let about = $('<textarea>');
    about.addClass('modal-about'); //создал класс на всякий случай, если будет необходимо что-то поменять
    let button = $('<button>');
    button.addClass('modal-button');
    button.text('Отправить');
    form.append(fioText);
    form.append(fio);
    form.append(emailText);
    form.append(email);
    form.append(phoneText);
    form.append(phone);
    form.append(aboutText);
    form.append(about);
    form.append(button);
    modalElem.append(form);
    modalContainer.append(modalElem);
    pageElem.append(modalContainer);
    $(".modal-button").on('click', function(event) {
        event.preventDefault();
        alert("Форма не отправилась, event.preventDefault(); прописан :)");
    });
    modalContainer.on('click', function () {
        modalContainer.css('display','none').remove();
    });
    modalElem.on('click', function (event) {
        event.stopPropagation();
    });
})


