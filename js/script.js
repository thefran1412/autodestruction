var start = new Date;

var values = [472, 381, 539, 607];

var verified = [false, false, false, false];

var diff = 1;

var end = new Date(start.getTime() + diff*60000);

var interval;


function desactivate(argument) {
	clearInterval(interval);
	$('.activate').show();
	$('.counter').hide();
	$('.code').hide();
	reset();
}

function activate(argument) {
	start = new Date;
	end = new Date(start.getTime() + diff*60000);

	$('.activate').hide();
	$('.counter').show();
	$('.code').show();

	interval = setInterval(function() {
		time = Math.abs(new Date - end);
		// console.log(time);
		if (time <= 700) {
			clearInterval(interval);
			desactivate();
		}
		else{
			minutes = parseInt(time / 1000 / 60);
		    seconds = parseInt(time / 1000 - (minutes*60));
		    $('.Timer').text(minutes + ':' + seconds);
		}
	}, 1000);
}

function destruct(argument) {
	clearInterval(interval);
	alert('codi correcte, iniciant la autodestruccio');
}


function validate(id, value) {
	
	var element = $( ".code" ).find('.' + id).parent();

	if (parseInt(value) == values[id]) {
		console.log('true');
		verified[id] = true;

		element.removeClass('has-error');
		element.children('.btn').removeClass('btn-danger');

		element.addClass('has-success');
		element.children('.btn').addClass('btn-success');

		element.children('.form-control').prop('disabled', true);

		if (isDone()) {
			destruct();
		}
	}
	else{
		console.log('false');

		element.addClass('has-error');
		element.children('.btn').addClass('btn-danger');
	}
}

function isDone() {
	var done = verified.indexOf(false);

	if (done == -1) {
		return true;
	}

	return false;
}

function reset() {
	$(".form-control").each(function( index ) {
		//reset father's style
		$(this).parent().removeClass();
		//reset button style
		$(this).parent().children('.btn').removeClass('btn-danger btn-success');
		//enable input again
		$(this).prop('disabled', false);
		//empty input
		$(this).val('');
		//set html timer
		$('.Timer').text('29:59');
	});
}