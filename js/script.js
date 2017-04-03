var start = new Date;

var values = [472, 381, 539, 607];

var verified = [false, false, false, false];

var diff = 20;

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

	// alert('codi correcte, iniciant la autodestruccio');
	$('.counter').hide();
	$('.code').hide();

	$('.end').show();
	move();
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
	
	verified = [false, false, false, false];

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

function login() {
	if ($('.username').val() == 'aortega.inditoxic' && $('.password').val() == '01102007') {
		$('.login').hide();
		$('.activate').show();
		console.log('logged in correctly');
		$('.username').parent().removeClass('has-error');
		$('.username').parent().find('.btn').removeClass('btn-danger');
	}
	else{
		console.log('autentification failed');
		$('.username').parent().addClass('has-error');
		$('.username').parent().find('.btn').addClass('btn-danger');
	}
}
function move() {

    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            $('#myBar').css('width', width + '%')
            $('.progress-bar').text(width + '%');
        }
    }

    var font = setTimeout(function () {
    	$('body').css("font-family", '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace');
    	clearInterval(font);
    }, 8500);

    var color = setTimeout(function () {
    	$('h2').css("color", 'white');
    	$('body').css("background-color", '#232323');
    	$('#myBar').css("background-color", 'white');
    	$('#myBar p').css("color", 'black');
    	$('.progress-bar').removeClass('progress-bar');
    	$('.progress').removeClass('progress');
   		clearInterval(color);
    }, 8800);

    var black = setTimeout(function () {
		$('.end').hide();
    	$('body').css("background-color", 'black');
		clearInterval(black);
    }, 10000);

    
}

/*

username: aortega.inditoxic
pwd: 01102007

*/