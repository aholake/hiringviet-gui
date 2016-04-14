$(function() {
	$('#menu-btn').click(function() {
		$('#dropdown-menu').toggle();
	});

	$(".menu-item-header").click(function() {
		$(this).next().toggle();
	});
});

