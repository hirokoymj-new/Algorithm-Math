

function isInt(a){
	var flag =false;

	if(a%1 == 0){
		flag = true;
	}

	return flag;
}

console.log(isInt(1.5)); 
console.log(isInt(824)); 