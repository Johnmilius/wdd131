const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log(area)

radius = 4;
area = radius * radius * PI;

console.log(area)

function circleArea(radius){
    const area = radius * PI;
    return area
}

area = circleArea(3);
console.log(area); 