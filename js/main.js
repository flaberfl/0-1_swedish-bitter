$(function () {

    $('.list__inner .tab, .reviews__tab'/* Класс item ТАБА */).on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.list__inner, .reviews__inner'/* Общий родитель группы табов и контента! */).find('.tab-item, .reviews__content-item'/* Класс item Контента */).removeClass('active-tab').hide();
        $('.list__inner .tabs, .reviews__tabs'/* Общий класс Табов */).find('.tab, .reviews__tab'/* Класс item ТАБА */).removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


});