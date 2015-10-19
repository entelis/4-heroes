
$(document).ready(function (e) {

	$(".hero").first().addClass("shown");
	var title = $(".hero").attr("title");
            $("h1").text(title);

	
 $('.next').click(function() {
    $('.shown').removeClass('shown').hide()
        .next().show().addClass('shown').css('display','block');
        var name = $(".shown").attr("title");
		$("h1").text(name);
    if ($('.shown').hasClass('last')) {
        $('.next').attr('disabled', true);
    }
    $('.prev').attr('disabled', null);
});

$('.prev').click(function() {
    $('.shown').removeClass('shown').hide()
        .prev().show().addClass('shown').css('display','block');
        var name = $(".shown").attr("title");
		$("h1").text(name);
    if ($('.shown').hasClass('first')) {
        $('.prev').attr('disabled', true);
    }
    $('.next').attr('disabled', null);
});

});

