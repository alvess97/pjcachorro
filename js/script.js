var a = 100
var b = 400

/// Keydown = invocado para cada tecla pressionada:
$("#campo").keydown(function (evento) {

	if (evento.which == 37) {
		// Situação em que o usuário pressionou a seta da esquerda:
		$("#cachorro").css("margin-left", a);
		a = a - 50

	}

	if (evento.which == 38) {
		// Situação em que o usuário pressionou a seta de cima:
		$("#cachorro").css("margin-top", b);
		b = b - 50

	}

	if (evento.which == 39) {
		// Situação em que o usuário pressionou a seta da direita:
		$("#cachorro").css("margin-left", a);
		a = a + 50


	}

	if (evento.which == 40) {
		// Situação em que o usuário pressionou a seta de baixo:
		$("#cachorro").css("margin-top", b);
		b = b + 50

	}

});
