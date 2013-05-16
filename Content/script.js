$(document).ready(function () {
    $('#send').click(function () {

        $('.error').hide();

        var name = $('#name').val();
        var price = $('#price').val();
        var image = $('#path').val();
        
        if (!(name && price && image)) {
            $('.main').append('<div class="error">Данные введены не верно!</div>');
            return;
        }

        $('#slide').load('/home/add?name=' + name + '&price=' + price + '&image=' + image,
            function() {
                $('#name').val('');
                $('#price').val('');
                $('#path').val('');

                htmSliderNotloop();
            });
    });
    
    htmSliderNotloop();
});

function htmSliderNotloop() {

    /* Зададим следующие переменные */
    var viewSliderNum = 5,
        animDuration = 1000,
        slideWrap = $('.slide-wrap'),
        nextLink = $('.next-slide'),
        prevLink = $('.prev-slide'),
        slideNum = slideWrap.find('.slide-item').size(),
        slideWidth = $('.slide-item').outerWidth(),
        sliderEndPoint = (slideNum - viewSliderNum) * slideWidth * (-1);

    nextLink.unbind();
    prevLink.unbind();

    if (slideNum < viewSliderNum) {
        nextLink.addClass('disabled');
        prevLink.addClass('disabled');
        return;
    } else {
        if (slideNum == viewSliderNum) {
            nextLink.addClass('disabled');
        } else nextLink.removeClass('disabled');
    }

    nextLink.click(function () {
        if (jQuery(this).hasClass('disabled')) {
            return false;
        } else {
            if (!slideWrap.is(':animated')) {

                var leftSlidePos = slideWrap.position().left,
                    lsp = Math.round(leftSlidePos / 100) * 100,
                    newLeftPos = lsp - slideWidth * viewSliderNum,
                    nlp = Math.round(newLeftPos / 100) * 100;

                slideWrap.animate({ left: nlp }, animDuration, function () {

                    slideWrap.css({ 'left': nlp });

                    if (nlp != sliderEndPoint) {
                        nextLink.removeClass('disabled');
                    } 
                    if (nlp <= sliderEndPoint) {
                        nextLink.addClass('disabled');
                    }

                    if (nlp <= 0) {
                        prevLink.addClass('disabled');
                    }
                    if (nlp != 0) {
                        prevLink.removeClass('disabled');
                    }
                });

            }
        }
        return false;
    });
    
    prevLink.click(function () {

        if (jQuery(this).hasClass('disabled')) {
            return false;
        } else {
            if (!slideWrap.is(':animated')) {

                var leftSlidePos = slideWrap.position().left,
                    lsp = Math.round(leftSlidePos / 100) * 100,
                    newLeftPos = lsp + slideWidth * viewSliderNum,
                    nlp = Math.round(newLeftPos / 100) * 100;

                slideWrap.animate({ left: nlp }, animDuration, function () {

                    slideWrap.css({ 'left': nlp });

                    if (nlp != sliderEndPoint) {
                        nextLink.removeClass('disabled');
                    } 
                    if (nlp <= sliderEndPoint) {
                        nextLink.addClass('disabled');
                    }

                    if (nlp != 0) {
                        prevLink.removeClass('disabled');
                    } 
                    if (nlp <= 0) {
                        prevLink.addClass('disabled');
                    }
                });

            }
        }
        return false;
    });

}