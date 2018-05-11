var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//     return num * 2;
//   });

//   function calcHypotenuse(a, b) {
//     return(Math.sqrt((a * a) + (b * b)));
//   }
  var result = input.map(function(input){ 
    // x = input.x;
    // y = input.y;  
    // return(Math.sqrt((x * x) + (y * y)));
return(Math.sqrt((input.x * input.x) + (input.y * input.y)));
  });
  console.log(result)
//   console.log(result[0] === 5);
//   console.log(result[1] === 13);
//   console.log(result[2] === 17);

//anonymous function
// var result = input.map((point) => {
//     for ( var i = 0; i< input.length; i++)
//  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y,2)) ;
//  });

//shows function: getDistanceFromPoint
// function getDistanceFromPoint(point){
//     return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y,2)) ;    
//  }
//  var result = input.map(getDistanceFromPoint);
//  console.log(result);