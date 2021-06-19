$(document).ready(function() {

	$('a.display-denominacion').on('click', function() {

		if ($(this).hasClass('display-activo')) return;
		$(this).removeClass('collapsed');
		$($(this).data('target')).addClass('show');

		$('a.display-activo').addClass('collapsed');
		$($('a.display-activo').data('target')).removeClass('show');
		$('a.display-activo').removeClass('display-activo');

		$(this).addClass('display-activo');
	});
	
});