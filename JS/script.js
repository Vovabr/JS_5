/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром. */

function mathem(a, b, c) {
    return (a + b) / c;
}

console.log(mathem(4, 4, 4));



/*2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром. */

function mathem2(a) {
    
    let cube = Math.pow(a, 3);
    let square = Math.pow(a, 2);

    return 'Число в кубе:' + cube + ' Число в квадрате:' + square;
}

console.log(mathem2(2));



/*3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.*/

function minMax(a, b) {

    let min = Math.min(a, b);
    let max = Math.max(a, b);

    return 'Min:' + min + ' Max:' + max;

}

console.log(minMax(7, 6));



/*4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.*/

function numbers() {
    let arr = [];

    for (;;) {
        let num = prompt('Введите несколько чисел, по окончании ничего не вводите и нажмите "Ок"');

        if (num == ''|| num == null) break;

        if (isNaN(num) || num == false) {
            alert('Нужно ввести число');
            continue;
        }
        arr.push(num);
    }
    return arr;
}

function printArr() {
    console.log(numbers());
}

//printArr();



/*5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.*/

function isEven(a) {
    if(a % 2 == 0){
        return true;
    } else {
        return false;
    }
     
}
console.log(isEven(4));



/*6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/

let array1 = [2, 6, 8, 22, 56, 7, 23, 111, 45];

function num(array){
    let array2 = [];

    for (let i = 0; i < array.length; i++) {
        if(isEven(array[i])) {

            array2.push(array[i]);
        }
    }
    return array2;
}
console.log(num(array1));



/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999

Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например:

Курс «JS».

*
**
***
****
*****
******
*******
********
********* */

function pyramide(h) {
    let str = '';

    for (let i = 1; i <= h; i++) {
        str = '';

        for (let j = 1; j <= i; j++) {
            str += i;
        }

        console.log(str);
    }
    
}

pyramide(prompt('Число рядов'));



/*8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:

    *
   ***
  *****
 *******
*********

Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но которая выведет перевернутый треугольник.*/

function pyramide1(h) {
    let str = '';
    
    for (let i = 1; i <= h; i++) {
        str = '';
    
        for (let j = 1; j <= (h - i); j++) {
            str += ' ';
        }
    
        for (let j = 1; j <= (i*2-1); j++) {
            str += '*';
        }
    
        document.write(`<pre>${str}</pre>`);
        console.log(str);
    
    }
}

pyramide1(5);

function pyramide2(h) {
    let str = '';
    
    for (let i = 1; i <= h; i++) {
        str = '';
    
        for (let j = 1; j <= (i - 1); j++) {
            str += ' ';
        }
    
        for (let j = (h*2-i); j >= i; j--) {
            str += '*';
        }
    
        document.write(`<pre>${str}</pre>`);
        console.log(str);
    
    }
}

pyramide2(5);



/*9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000. */

function fib() {
    let arr = [];
    let num = 0;

    for(let i = 0; ; i++) {

        if ((i == 0 || i == 1) && arr[i] == undefined) {
            arr.push(i);
            continue;
        }

        num = arr[i-1] + arr[i-2];
        if (num >= 1000) break;

        arr.push(num);      

    }

    console.log(arr);
}

fib();



/*10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.*/

let num1 = '15';

function sumNum(arr) {
    
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += +arr[i];
    }
    if (sum1 > 9) {
        sumNum (sum1 +'');   
    } else {
        alert (sum1);
    }
}
sumNum(num1);


/*11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.*/

function printArr(arr) {
    console.log(arr[i]);
    i++;
    if (i< arr.length) printArr(arr) ;
}
let i = 0;
printArr([1, 8, 5, 643, 3443]);


/*12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде:

*****************************
* Домашняя работа: «Функции» *
* Выполнил: студент гр. W4017 *
* Иванов Иван Иванович *
*****************************

Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль. */

function card() {
    let fio = prompt('Ваше ФИО', 'Иванов Иван Иванович');
    let group = prompt('Номер группы', 'BE105');

    let line1 = 'Домашняя работа "Функции"';
    let line2 = `Выполнил: студент гр. ${group}`;
    let line3 = fio;

    let length = 0;

    if (line1.length > length) length = line1.length;
    if (line2.length > length) length = line2.length;
    if (line3.length > length) length = line3.length;

    // let flLine = '';

    // for (let i = 1; i <= (length + 4); i ++) {
    //     flLine += '*';
    // }

    // function spaces(length, maxLength) {
    //     let s = '';

    //     for (let i = 1; i <= (maxLength-length); i++) {
    //         s += ' ';
    //     }

    //     return s;
    // }

    // console.log(flLine);
    // console.log('* ' + line1 + spaces(line1.length, length) + ' *');
    // console.log('* ' + line2 + spaces(line2.length, length) + ' *');
    // console.log('* ' + line3 + spaces(line3.length, length) + ' *');
    // console.log(flLine);


    function lines(line = '', maxLength = length) {
        let max = (maxLength + 4), s = '*';

        if (line != '') {
            max = (maxLength - line.length);
            s = ' ';
        }

        for (let i = 1; i <= max; i++, line += s);

        if (s == ' ') line = `* ${line} *`;

        return line;
    }

    console.log(lines());
    console.log(lines(line1));
    console.log(lines(line2));
    console.log(lines(line3));
    console.log(lines());

    // console.log(length);
}

//card();

