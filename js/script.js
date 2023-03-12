// свайпер
new Swiper('.tabs-swiper',{

    // стрелки
    navigation: {
        nextEl: '.tabs-slide__arrow.swiper-button-next',
        prevEl: '.tabs-slide__arrow.swiper-button-prev',
      },

    // Перетаскивание на ПК
    simulateTouch: true,
    
    // Чувствительность свайпа
    touchRatio: 1,

    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,

    // Курсор перетаскивания
    grabCursor: true,

    // Управление клавиатурой
    keyboard: {
        // включить/выключить
        enabled: true,

        // Вкл/Выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true,

        // включить/выключить управление клавиатурой PageUp, pageDown
        pageUpDown: true,
    },
    // Автовысота
    autoHeihgt: true,

    // Количство слайдов для показа
    slidesPerView: 6,

    // Отступ между слайдами
    spaceBetween: 10,

    breakpoints: {
        320: {
          slidesPerView: 3,
        },
        519: {
            slidesPerView: 5,
        },
        767: {
            slidesPerView: 6,
        },
      },
});

// свайпер 2
new Swiper('.specifications-swiper',{

  // стрелки
  navigation: {
      nextEl: '.specifications-slide__arrow.swiper-button-next',
      prevEl: '.specifications-slide__arrow.swiper-button-prev',
    },

  // Перетаскивание на ПК
  simulateTouch: true,
  
  // Чувствительность свайпа
  touchRatio: 1,

  // Угол срабатывания свайпа/перетаскивания
  touchAngle: 45,

  // Курсор перетаскивания
  grabCursor: true,

  // Управление клавиатурой
  keyboard: {
      // включить/выключить
      enabled: true,

      // Вкл/Выкл только когда слайдер в пределах вьюпорта
      onlyInViewport: true,

      // включить/выключить управление клавиатурой PageUp, pageDown
      pageUpDown: true,
  },
  // Автовысота
  autoHeihgt: true,

  // Отступ между слайдами
  spaceBetween: 30,

  breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
          slidesPerView: 2,
      },
      767: {
          slidesPerView: 3,
      },
      980: {
        slidesPerView: 4,
    },
    },
});