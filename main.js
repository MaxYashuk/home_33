// if 1
// let a = Number(prompt("Введите число: "))
// if (a => 0) {
//     let b = (a + 1)
//     alert(b)
// } else {
//     alert(a)
// }


// if 2
// let a = Number(prompt("Введите число: "))
// if (a > 0) {
//     alert(a + 1)
// } else {
//     alert(a - 2)
// }
 

// if 3
// let a = Number(prompt("Введите число: "))
// if (a > 0) {
//     alert(a + 1)
// } else if (a < 0) {
//     alert(a - 2)
// } else {
//     alert(10)
// }


// if 4
// let a = prompt("1 ")
// let b = prompt("2 ")
// let c = prompt("3 ")
// if (a > 0 && b > 0 && c > 0) {
//     alert("все числa положительные ")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("2 положительных")
// } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
//     alert("1 положительное")
// } else {
//     alert("все числа отрицательные")
// }


// if 5
// let a = prompt("1 ")
// let b = prompt("2 ")
// let c = prompt("3 ")
// if (a > 0 && b > 0 && c > 0) {
//     alert("все числa положительные ")
//     alert("отрицательных нет")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("2 положительных")
//     alert("1 отрицальное")
// } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
//     alert("1 положительное")
//     alert("2 отрицательных")
// } else {
//     alert("все числа отрецательные")
//     alert("положительных нет")
// }


// if 6
// let a = prompt("1 ")
// let b = prompt("2 ")
// if (a > b) {
//     alert(a)
// } else {
//     alert(b)
// }


// if 7
// let a = prompt("1 ")
// let b = prompt("2 ")
// if (a > b) {
//     alert("2 меньше")
// } else {
//     alert("1 меньше")
// }


// if 8
// let a = prompt("1 ")
// let b = prompt("2 ")
// if (a > b) {
//     alert(a)
//     alert(b)
// } else {
//     alert(b)
//     alert(a)
// }

// if 9
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// if (a > b){
//     a -= b
//     b += a
//     a = b - a
//     alert(a)
//     alert(b)
// } else {
//     alert(a)
//     alert(b)
// }

// if 10
// let a = Number(prompt("1 "))
// let b = Number(prompt("2 "))
// if (a != b) {
//     let c = (a + b)
//     alert(a = c)
//     alert(b = c)
// } else {
//     alert(a = 0, b = 0)
// }


// if 11
// let a = prompt("1 ")
// let b = prompt("2 ")
// if (a != b) {
//     if (a > b) {
//         alert(a, b = a)
//     } else {
//         alert(b, a = b)
//     }
// } else {
//     alert(a = 0, b = 0)
// }


// if 12
// let a = prompt("1 ")
// let b = prompt("2 ")
// let c = prompt("3 ")
// if (a < b && a < c) {
//     alert(a)
// } else if (b < a && b < c) {
//     alert(b)
// } else if (c < a && c < b) {
//     alert(c)
// } else {
//     alert("Я тебя не понял")
// }


// if 13
// let a = Number(prompt("1 "))
// let b = Number(prompt("2 "))
// let c = Number(prompt("3 "))
// if ((a < b && a > c) || (a < c && a > b)) {
//     alert(a)
// } else if ((b < a && b > c) || (b < c && b > a)) {
//     alert(b)
// } else if ((c < b && c > a) || (c < a && c > b)) {
//     alert(c)
// } else {
//     alert("Ты дурак?")
// }

// if 14
// let a = Number(prompt("1 "))
// let b = Number(prompt("2 "))
// let c = Number(prompt("3 "))
// if (a < b && a < c ) {
//     if (b > c) {
//         alert(a)
//         alert(b)
//     } else if (c > b) {
//         alert(a)
//         alert(c)
//     }
// } else if (b < a && b < c) {
//     if (a > c) {
//         alert(b)
//         alert(a)
//     } else if (a < c) {
//         alert(b)
//         alert(c)
//     }
// } else if (c < a && c < b) {
//     if (a > b) {
//         alert(c)
//         alert(a)
//     } else if(b > a) {
//         alert(c)
//         alert(b)
//     }
// }

// if 15
// let a = Number(prompt("1 "))
// let b = Number(prompt("2 "))
// let c = Number(prompt("3 "))
// if (a < b && a < c ) {
//     if (b > c) {
//         alert(b + c)
//     } else if (c > b) {
//         alert(b + c)
//     }
// } else if (b < a && b < c) {
//     if (a > c) {
//         alert(a + c)
//     } else if (a < c) {
//         alert(a + c)
//     }
// } else if (c < a && c < b) {
//     if (a > b) {
//         alert(a + b)
//     } else if(b > a) {
//         alert(a + b)
//     }
// }

// if 16
// let a = Number(prompt("1 "))
// let b = Number(prompt("2 "))
// let c = Number(prompt("3 "))
// if (a < b && b < c) {
//     alert(a * 2)
//     alert(b * 2)
//     alert(c * 2)
// } else {
//     alert( a = -a)
//     alert( b = -b)
//     alert( c = -c)
// }