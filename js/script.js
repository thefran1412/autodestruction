var start = new Date;

var diff = 30;

var end = new Date(start.getTime() + diff*60000);

console.log(start, end);

setInterval(function() {
	
	minutes = parseInt((new Date - end) / 1000 / 60);
    seconds = parseInt((new Date - end) / 1000 - (minutes*60));
    $('.Timer').text(Math.abs(minutes) + ':' + Math.abs(seconds));
}, 1000);