$(document).ready(function() {
	
	function styleTime() {
		var now = new Date();
		var hour =  now.getHours();
		var min =  now.getMinutes();

		var h = hour;


		$('.hours').removeClass('current-dark');	
		$('.min').removeClass('current-dark');
		$('.zero').removeClass('current-dark');

		$('.hours').removeClass('current-light');	
		$('.min').removeClass('current-light');
		$('.zero').removeClass('current-light');

		if (hour > 11 && hour <= 20 ) {
			$('.night').addClass('current-light');
		} else if (hour > 20 && hour < 6 ){
			$('.night').addClass('current-dark');
		}

		else {
			$('.day').addClass('current-light');
		}

		if (hour > 19 && hour < 5) {

			if (hour > 12 ) {
				h = breakHours(hour);
			}
			if ( hour > 0 && hour < 12) {
				h = dayHours(hour);
			}
			
			$('body').addClass('night-bg');
			$('.hours.' + h.toString()).addClass("current-dark");
			if ( min > 0 && min < 20 ) {
				if ( min < 10 ) {
					$('.zero').addClass('current-dark');
					$('.min.' + min.toString()).addClass('current-dark');
				} else {
					$('.min.' + min.toString()).addClass('current-dark');
				}
			} else {
				var strMin = breakMin(min);
				var strTens = strMin[0];
				var strDigs = strMin[1];
				$('.min.' + strTens.toString()).addClass("current-dark");
				$('.min.' + strDigs.toString()).addClass("current-dark");	
			}
		} else {

			if (hour > 12 ) {
				h = breakHours(hour);
			}
			if ( hour > 0 && hour < 12) {
				h = dayHours(hour);
			}
			$('body').addClass('day-bg');
			
			$('.hours.' + h.toString()).addClass("current-light");

			if ( min > 0 && min < 20 ) {
				if ( min < 10 ) {
					$('.zero').addClass('current-light');
					$('.min.' + min.toString()).addClass('current-light');
				} else {
					$('.min.' + min.toString()).addClass('current-light');
				}
			} else {
				var strMin = breakMin(min);
				var strTens = strMin[0];
				var strDigs = strMin[1];
				$('.min.' + strTens.toString()).addClass("current-light");
				$('.min.' + strDigs.toString()).addClass("current-light");	
			}
		}

		t = setTimeout(function(){styleTime()}, 500);
	}

/*function theMin(min, ampm) {
	var strMin = breakMin(min);
	var strTens = strMin[0];
	var strDigs = strMin[1];
	$('.min.' + strTens.toString()).addClass("current-" + ampm);
	$('.min.' + strDigs.toString()).addClass("current-" + ampm);
}*/

/*function singleMin(ampm, min) {
	alert(ampm);
	if ( min < 10 ) {
		$('.zero').addClass('current-' + ampm + );
		$('.min.' + min.toString()).addClass('current-' + ampm + );
	} else {
		$('.min.' + min.toString()).addClass('current-' + ampm + );
	}	
}*/

function breakMin(min) {
	 console.log('inside breakMin FUNCTION. min = '+min);
	if (min < 10) {
		return min;
	}
	var strMin = min.toString().split('');
	

	var strTens = strMin[0];
	var strDigits = strMin[1];
	console.log('tens: = ' + strTens + ' Digits: ' + strDigits);
	if (min > 19) { 
		strTens = pluralTen(strTens);
	}
	
	return [strTens, strDigits];

}

function pluralTen(tens) {
	
	switch(tens) {
		case '2':
			return 20;
			break;
		case '3': 
			return 30;
			break;
		case '4':
			return 40;
			break;
		case '5':
			return 50;
			break;
	}
}

function breakHours(hrs) {
	if(hrs>12){
		switch(hrs) {
			case 13: 
				return 1;
				break;
			case 14:
				return 2;
				break;
			case 15:
				return 3;
				break;
			case 16:
				return 4;
				break;
			case 17: 
				return 5;
				break;
			case 18:
				return 6;
				break;
			case 19:
				return 7;
				break;
			case 20:
				return 8;
				break;
			case 21: 
				return 9;
				break;
			case 22:
				return 10;
				break;
			case 23:
				return 11;
				break;
			case 24:
				return 12;
				break;
		}
	}
}

function dayHours(hrs) {
	if(hrs<12){
		switch(hrs) {
			case 0: 
				return 12;
				break;
			case 1:
				return 1;
				break;
			case 2:
				return 2;
				break;
			case 3:
				return 3;
				break;
			case 4: 
				return 4;
				break;
			case 5:
				return 5;
				break;
			case 6:
				return 6;
				break;
			case 7:
				return 7;
				break;
			case 8: 
				return 8;
				break;
			case 9:
				return 9;
				break;
			case 10:
				return 10;
				break;
			case 11:
				return 11;
				break;
		}
	}
}

			t=setTimeout(function(){styleTime()}, 500);

}());