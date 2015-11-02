$('.bannerSlide').mousedown(function(e){
        e.preventDefault(); 
        $('#setPos').remove();
        var offset = $(this).offset();
        leftpos =  e.pageX - offset.left;
        toppos = e.pageY - offset.top;

        var height = $(this).innerHeight();
        var width = $(this).width();

        var cssLeft = leftpos / width * 100;
        var cssTop = toppos / height * 100;
        $(this).append('<a id="setPos" class="bannerSlideInner" style=" background-color:rgba(255,0,0,.5);z-index: 100; top: '+cssTop+'%; left: '+cssLeft+'%;"></a>')
        console.log(toppos , height)
    });

    $('.bannerSlide').mouseup(function(e){
        e.preventDefault(); 
        var offset = $(this).offset();
        leftpos =  e.pageX - offset.left;
        toppos = e.pageY - offset.top;

        var height = $(this).innerHeight();
        var width = $(this).width();

        var cssLeft = leftpos / width * 100;
        var cssTop = toppos / height * 100;

        var originalTop = parseFloat($('#setPos').css('top'));
        var originalLeft = parseFloat($('#setPos').css('left'));
        var originalcssLeft = originalLeft / width * 100;
        var originalcssTop = originalTop / height * 100;

        var cssWidth = cssLeft - originalcssLeft;
        var cssHeight = cssTop - originalcssTop;

        $('#setPos').css({'height' : cssHeight+'%'})
        $('#setPos').css({'width' : cssWidth+'%'})
        console.log($('#setPos').attr('style'));
    });
