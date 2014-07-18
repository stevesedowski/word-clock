$(document).ready(function () {
	
		function time() {
			var now = new Date();
			var hour =  now.getHours();
			var min =  now.getMinutes();
			
			
			if (hour > 20) {
				$('.hours').removeClass('current-light');	
				$('.min').removeClass('current-light');
				$('.zero').removeClass('current-light');
			} else {
				$('.hours').removeClass('current-dark');	
				$('.min').removeClass('current-dark');
				$('.zero').removeClass('current-dark');
			}



/*			if (min > 19 ){
				strMin = breakMin(min);
				console.log('inside the min > 9 statement. strMin: ' + strMin)
				var strTens = strMin[0];
				console.log('strTens = ' + strTens)
				var strDigs = strMin[1];	
				console.log('strDigs = ' + strDigs)
			} */

			/* change bg and font on time of day */
			if(hour >=6 && hour <= 18){
				$('body').addClass('day-bg');
			} else {
				$('body').addClass('night-bg');
			}
/*	Took this out because it llooks to be duplicated from down below
		else {
				strMin = min;
				$('.min.' + strMin.toString()).addClass('current');
					
			}
*/
	var h = hour;
if(hour >= 12){

	h = breakHours(hour);
	
	if (hour >20) {
		$('.night').addClass('current-dark');
	} else {
		$('.day').addClass('current-light');
	}
	
	if(hour > 20) {
		$('.hours.' + h.toString()).addClass("current-dark");
	} else {
		$('.hours.' + h.toString()).addClass("current-light");
	}

	
} else {
	
	h = dayHours(hour);
	$('.day').addClass('current-light');
	$('.hours.' + h.toString()).addClass('current-light');
	// $('.hours.' + hour.toString()).addClass("current");

}
 
if (min > 19 ){
	strMin = breakMin(min);
	console.log('inside the min > 9 statement. strMin: ' + strMin)
	var strTens = strMin[0];
	console.log('strTens = ' + strTens)
	var strDigs = strMin[1];	
	console.log('strDigs = ' + strDigs)
	
	if (hour > 20) {
		$('.min.' + strTens.toString()).addClass("current-dark");
		$('.min.' + strDigs.toString()).addClass("current-dark");
	} else {
		$('.min.' + min.toString()).addClass('current-light');
	}
	if (strDigs==0)	{ 
		// console.log('INSIDE if. strTens: ' + strTens + ' // strDigs: ' + strDigs)
		$('.min.' + strTens.toString()).addClass("current-light");
		$('.min.' + strDigs.toString()).removeClass("current-light");
		
	} else {
		$('.min.' + strTens.toString()).addClass("current-light");
		$('.min.' + strDigs.toString()).addClass("current-light");
		
	}
} else if (min === 0) {
	if(hour > 6 && hour < 20){
		$('.min.' + strDigs.toString()).addClass("current-light");
	}

} else if (min > 9 && min < 20) {

	console.log('strTens: ' + strTens)
	if(hour > 6 && hour < 20){
		$('.min.' + min.toString()).addClass('current-light');
	} else {
		$('.min.' + min.toString()).addClass('current-light');
	}
} else {
	if (hour > 20) {
		$('.zero').addClass('current-dark');
		$('.min.' + min.toString()).addClass('current-dark');
	} else {
		$('.zero').addClass('current-light');
		$('.min.' + min.toString()).addClass('current-light');
	}

	
}

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

			t=setTimeout(function(){time()}, 500);
		}

	time();	
});
