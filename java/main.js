// // задание 1

var str = "*";
while (str.length<=7){
    console.log(str + "\n");
    str+="*";
}

// // задание 2

for( let number = 1; number <= 100; number++ )
{       
 str = '';            
  if( number%3 == 0 ) {
     str += 'Fizz';
 } 
 if( number%5 == 0 ){
     str += 'Buzz';
     }       
        console.log( str ? str : number );
    }

// задание 3

let number = prompt("Your number");

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  alert( sumTo(number) );