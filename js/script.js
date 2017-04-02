var start = new Date;

var values = [472, 381, 539, 607];

var verified = [true, true, true, true];

var diff = 1;

var end = new Date(start.getTime() + diff*60000);

var interval;


function desactivate(argument) {
	clearInterval(interval);
	$('.activate').show();
	$('.counter').hide();
	$('.code').hide();
	$( ".form-control" ).each(function( index ) {
	  $(this).val('');
	});
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
		if (time <= 500) {
			clearInterval(interval);
			desactivate();
			if (isDone()) {
				console.log('done');
			}
		}
		else{
			minutes = parseInt(time / 1000 / 60);
		    seconds = parseInt(time / 1000 - (minutes*60));
		    $('.Timer').text(minutes + ':' + seconds);
		}
	}, 1000);
}

function destruct(argument) {
	// body...
}


function validate(id, value) {
	

	if (parseInt(value) == values[id]) {
		console.log('true');
		verified[id] = true;

	}
	else{
		console.log('false');
	}
}

function isDone() {
	var done = verified.indexOf(false);
	
	console.log(done);

	if (done == -1) {
		return true;
	}

	return false;
}