/**Bài tập 1 */
//input
//cho người dùng nhập số ngày
var wagesum=document.getElementById("wagesum");
//process
//tính số tiền lương với công thức tiền lương = số ngày * 100000
wagesum.onclick = function(){
console.log(123);
var day_num=document.getElementById("day_num").value *1;
var wage=day_num*100000;
var result1= "Tiền Lương là: " + wage;
//show kết quả
document.getElementById("result1").innerHTML=result1;
}
/**Bài tập 2 */
//input
//cho người dùng nhập 5 số

//process
//tính tổng 5 số theo công thức tổng 5 số chia 5
var btnAvrg=document.getElementById("btnAvrg");
btnAvrg.onclick=function(){
    var num1=document.getElementById("num1").value*1;
var num2=document.getElementById("num2").value*1;
var num3=document.getElementById("num3").value*1;
var num4=document.getElementById("num4").value*1;
var num5=document.getElementById("num5").value*1;
    var avrg= (num1 + num2 +num3+num4+num5)/5;
    var result2="Trung bình 5 số là: " + avrg;
    //show kết quả
    document.getElementById("result2").innerHTML=result2;
}
/**Bài Tập 3 */
//input
//cho người dùng nhập số tiền ta có biến value1
//tính tiền theo trị giá USA theo công thức: result= value1*23.500
var cal=document.getElementById("cal");
cal.onclick=function(){
    var value1=document.getElementById("value1").value*1;
    var result3=value1*23500;
    var content3="VND: " + result3;
    //show kết quả
    document.getElementById("result3").innerHTML=content3;
}
/**Bài tập 4 */
//cho người dùng nhập chiều dài và chiều rộng ta có được 2 biến wid và hei

//Process
//tính chu vi theo công thức P=(wid+hei)*2
var cal2=document.getElementById("cal2");
cal2.onclick=function(){
    var wid=document.getElementById("wid").value*1;
    var hei=document.getElementById("hei").value*1;
    var P= (wid + hei)*2;
    //show kết quả
    result4="Chu vi là: "+P;
    document.getElementById("result4").innerHTML=result4;
}
/**Bài tập 5 */
//input
//Cho người dùng nhập số có 2 chữ số ta có được 2 biến number1 và number2
//process
//tìm số hàng chục bằng cách chia lấy nguyên number1 cho 10
//tìm số hàng đơn vị bằng cách chia lấy dư number1 cho 10
//tính tổng 
var cal3=document.getElementById("cal3");
cal3.onclick=function(){
    var number1 = document.getElementById("number1").value*1;
    var sum1 = number1/10;
    sum1=parseInt(sum1);
    var sum2 = number1%10;
    var sum3 = sum1+sum2;
    //show kết quả
    result5="Tổng 2 ký số là: " +sum3;
    document.getElementById("result5").innerHTML=sum3;
}