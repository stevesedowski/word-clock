var m = new Date().getMinutes();
var hours = new Date().getHours();

var h = breakHours(hours);

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

console.log(m + ' ' + hours);