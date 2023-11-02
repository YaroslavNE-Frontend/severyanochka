$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});



// All Options

// item - кол-во слайдеров

// margin - отступ между слайдерами

// loop - зацикливание путем клонирования и добавления слайдов сверху и снизу

// center работает с loop false

// mouseDrag - запретить мышку

// touchDrag - запретить свайп экрана

// stagePadding - отступ позволяет показать частично следуюше слайды


// nav - вкл или выкл стрелки

// rewind : false; - перекатывание на начало слайда

// navText - вместо стрелок можно подставить закодированный символ

// navElement - изменить обертку стрелок

// slideBy - кол-во пролистываемых слайдов за 1 клик

// slideTransition - подключение анимаций и ccs свойства trasition.

// dotsEach - показывает кол-во dots взависимости от кол-ва слайдов

// lazyLoadEager:6; - подгужает слайды зарание в независимости сколько видно на экране

// autoplay - автопрокрутка

// autoplayTimeout - промежуток времени прокрутки слайда

// autoplayHoverPause - при наведение курсора на слайдер автопрокрутка останавливается

// autoplaySpeed - скорость автопрокрутки слайдера

// smartSpeed - скорость перехода между слайдерами

// navSpeed - скорость прокрутки при нажатии на стрелки

// dotsSpeed - скорость прокрутки при нажатии на dots

// dragEndSpeed -на мобилках зажимаем тенем отпускаем слайд сравнивается с левой границей

// videoHeight - регулировка высоты видео

// videoWidth - регулировка ширины видео 

// // Работа с оберткой


// stageElement - обертка слайдера

// itemElement - сами слайдеры


// itemElement:'ul',
// animateIn:'li',


// // Animation css3  (Можно подключить библиотеки по типу Animate.css ) https: animate.css

// animateOut - конец анимации
// animateIn - начало анимации

// animateOut:'___',
// animateIn:'___',
