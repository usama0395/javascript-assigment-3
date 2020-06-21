        // // Chapter # 21 to 25
        // // String Methods




        // // Question no 1
        // var f_Name=prompt("enter your first name");
        // var l_Name=prompt("enter your last name");
        // var fulName=f_Name+l_Name;
        // document.write(fullName);



        // // Question no 2
        // var mobile=prompt("enter your favorite mobile phone model");
        // document.write("My favorite phone is:"+mobile+"<br>Length of String:"+mobile.length);




        // // Question no 3
        // var country="Pakistan";
        // document.write("String:"+country+"<br>index of 'n':"+country.indexOf("n"));




        // // Question no 4
        // var strr="Hello World";
        // document.write("String:"+str+"<br>last index of 'l':"+str.lastIndexOf("l"))
        



        // // Question no 5
        // var str="Pakistani";
        // document.write("String:"+str+"<br>Character at index 3:"+str.charAt(3))




        // // Question no 6
        // var f_Name=prompt("enter your first name");
        // var l_Name=prompt("enter your last name");
        // var full_Name=f_Name.concat(" "+l_Name);
        // document.write(full_Name);




        // // Question no 7
        // var city="Hyderabad";
        // document.write("city:"+city+"<br>after replacement:"+city.replace("Hyder","Islam"));




        // // Question no 8
        // var stirng="Ali and Sami are best friends. They play cricket and football together.";
        // document.write(string.split("and").join("&"));



        // // Question no 9
        // var number="472";
        // var int=parseInt(number);
        // document.write("value:"+number+"<br>Type:"+typeof(number)+"<br>value:"+int+"<br>Type:"+typeof(int))




        // // Question no 10
        // var peanut="peanuts";
        // document.write("User input:"+peanut+"<br>Upper case:"+peanut.toUpperCase());
    
        



        // // Question no 11
        // var input=prompt("enter any thing").toLowerCase();
        // var title=input.replace(input[0],input[0].toUpperCase());
        // document.write("User input:"+input+"<br>Title case:"+title);


        // // Question no 12
        // var number=35.36;
        // var string=(number*100).toString();
        // document.write("Number:"+number+"<br>Result:"+string);
    




        // // // Question no 13
        // var user_Name=prompt("enter your name");
        // for(var i=0;i<user_Name.length;i++){
        //     if(user_Name.charCodeAt(i)==33||user_Name.charCodeAt(i)==44||user_Name.charCodeAt(i)==46||user_Name.charCodeAt(i)==64){
        //         alert("please enter valid user name");
        //         break;
        //     }
        // }





        // // Question no 14
        // var items=["cake","apple pie","cookie","chips","patties"];
        // var find=prompt("Welcome to ABC Bakery.\nWhat do you want to order sir/ma'am").toLowerCase();
        // for(var i=0;i<items.length;i++){
        //     if(find==items[i]){
        //         var a=find+" is available at index "+i+" in our bakery";
        //         break;
        //     }
        //     else{
        //         var a="we are sorry."+find+" is not available in our Bakery";
        //     }
        // }
        // document.write(a);




        // // Question no 15
        // var pass=prompt("enter password");
        // var letters=false;
        // var number=false;
        // if(pass.length<6){
        //     document.write("password should be atleast 6 character long<br>");
        // }
        // if(pass[0]>=0&&pass[0]<10){
        //     document.write("Entered password:"+pass+"<br>Password can not begin with number<br>");
            
        // }
        
        //     for(var i=0;i<pass.length;i++){
        //         var charcode=pass.charCodeAt(i);
        //         if(charcode>=65&&charcode<=90||charcode>=97&&charcode<=122){
        //             letters=true;
        //         }
        //         else if(pass[i]>=1&&pass[i]<=9){
        //             number=true;
        //         }
        //     }

        

        // if(letters==false){
        //     document.write("password should contain some alphabets.<br>")
        // }
        // if(number==false){
        //     document.write("password should contain some numbers.");
        // }





        // // question no 16
        // var university="University of Karachi";
        // university=university.split("");
        // for(var i=0;i<university.length;i++){
        //     document.write(university[i]+"<br>");
        // }





        // // Question no 17
        // var input=prompt("enter any thing");
        // document.write("User input:"+input+"<br>Last character of input:"+input[input.length-1]);





        // // Question no 18
        // var str="The quick brown fox jumps over the lazy dog";
        // var splt=str.split(" ");
        
        // var counter=0;
        // for(var i=0;i<splt.length;i++){
        //     if(splt[i].toLowerCase()=="the"){
        //         counter+=1;
        //     }
        // }
        // document.write("Text:"+str+"<br>There are "+counter+" occurance of word 'the'")
    
        









        // // Chapter # 26 to 30
        // // MATH METHODS




        // // Question no 1
        // var number=+prompt("enter positive integer");
        // document.write("number:"+number+"<br>round off:"+Math.round(number)+"<br>floor value:"+Math.floor(number)+"<br>ceil value:"+Math.ceil(number));





        // // Question no 2
        // var number=+prompt("enter negative integer");
        // document.write("number:"+number+"<br>round off:"+Math.round(number)+"<br>floor value:"+Math.floor(number)+"<br>ceil value:"+Math.ceil(number));




        // // Question no 3
        // var number=-4;
        // document.write("The absolute value of "+number+" is "+Math.abs(number));




        // // Question no 4
        // document.write("random dice value:"+Math.ceil(Math.random()*6));




        // // Question no 5
        // var any=Math.ceil(Math.random()*2);
        // if(any==2){
        //     document.write(any+"<br>random coin value:Heads");
        // }
        // else{
        //     document.write(any+"<br>random coin value:Tails");

        // }




        // // Question no 6
        // document.write("Random number between 1 and 100:"+Math.ceil(Math.random()*100));




        // // Question no 7
        // var weight=prompt("enter your weight in Kilograms"); 
        // document.write("The weight of user is "+parseFloat(weight)+" kilograms")




        // // Question no 8
        // var secret=Math.ceil(Math.random()*10);
        // var Guess=+prompt("Enter a number between 1 and 10.");
        // if(Guess==secret){
        //     alert("Congratulation! your guess is correct");
        // }
        // else{
        //     alert("incorrect! please try again");
        // }










        // // Chapter # 31 to 34
        // // DATE METHODS




        // // // Question no 1
        // var date=new Date();
        // document.write(date);






        // // Question no 2
        // var monthes=["January","February","March","April","May","June","July","August","September","October","November","December"]
        // var date=new Date();
        // var month=date.getMonth();
        // document.write("Curreny month:"+monthes[month]);







        // // // Question no 3
        // var date=new Date();
        // var weekDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        // document.write("This is "+weekDays[date.getDay()]); 





        



        // // Question no 4
        // var date=new Date();
        // var day=date.getDay();
        // if(day==6||day==0){
        //     document.write("It's funday");
        // }



        // // Question no 5
        // var date =new Date();
        // var day=date.getDate();
        // if(day<16){
        //     document.write("First Fifteen Days of the Month");
        // }
        // else{
        //     document.write("last Days of Month");
        // }





        // // Question no 6
        // var date=new Date();
        // document.write("Current date"+date);
        // document.write("<br>Elapsed milliseconds sice January 1,1970: "+date.getTime());
        // document.write("<br>Elapsed minutes sice January 1,1970: "+date.getTime()/60000);
        






        
        // // Question no 7
        // var date=new Date();
        // document.write()
        // document.write(date.getHours()>12? "It's PM":"It's AM");






        // // Question no 8
        // var laterDate=new Date("December 31, 2020");
        // document.write("Later Date: "+laterDate);






        // // Question no 9
        // var ramDate=new Date("June 18, 2015");
        // var current_Date=new Date();
        // var difference=current_Date.getTime()-ramDate.getTime();
        // document.write(Math.round(difference/86400000)+" Days have passed since 1st Ramadan,2015");





        // // Question no 10
        // var any=new Date("January 1, 2015");
        // var reference_date=new Date("December 3, 2018");
        // var difference=reference_date.getTime()-any.getTime();
        // document.write("On reference date "+reference_date+" ,"+difference/60000+" had passed since biggening of 2015");






        // // Question no 11
        // var date=new Date(); 
        // var get=date.getHours();
        // var set=date.setHours(gethour-1);
        // var get_New=date.getHours();
        // var current_Date=new Date();
        // document.write("Current date:"+current_Date+"<br> 1hours age, it was "+date);
        





        // // Question no 12
        // var current_Date=new Date();
        // var past_Date=new Date();
        // past_Date.setFullYear(current_Date.getFullYear()-100);
        // document.write("current date:"+current_Date+"<br>100 year back,it was "+past_Date);







        // // Question no 13
        // var age=+prompt("enter your age.")
        // var date=new Date();
        // var birth_Year=date.getFullYear()-age;
        // document.write("Your age is "+ age +"<br>Your birthYear is "+birth_Year);






        // // uestion no 14
        // var customer_Name=prompt("enter your name:");
        // var date=new Date();
        // var monthes=["January","February","March","April","May","June","July","August","September","October","November","December"];
        // var current_Month=monthes[date.getMonth()];
        // var units=+prompt("enter no of units:");
        // var per_Unit=+prompt("enter per unit charges");
        // var late_Charges=+prompt("enter late charges");
        // var net_Amount=units*per_Unit;
        // var gross_Amount=net_Amount + late_Charges;
        
        // document.write("<h1>K-Electric Bill</h1>");
        // document.write("Customer Name:"+"<b>"+customer_Name+"</b>");
        // document.write("<br>No of Units:"+"<b>"+units+"</b>");
        // document.write("<br>charges per Unit:"+"<b>"+per_Unit+"</b>");
        // document.write("<br>Net Amount Payable (Within Due Date):"+"<b>"+net_Amount+"</b>");
        // document.write("<br>Late Payment Surcharges:"+"<b>"+late_Charges+"</b>");
        // document.write("<br>Gross Amount Payable (after Due Date):"+"<b>"+gross_Amount+"</b>");






        
        // // Chapter # 35 to 38
        // // FUNCTION




        // // Question no 1
        // function date(){
        //     var date=new Date();
        //     document.write(date);
        // }
        // date();





        // // Question no 2
        // function name(f_name,l_name){
        //     document.write("Good morning "+f_name+" "+l_name+" sir.");
        // }
        // name("Usama","Malik");





        // // Question no 3
        // function sum(number,number2){
        //     return number+number2;
        // };
        // sum(10,2);





        // // Question no 4
        // function operation(number,number2,operator){
        //     if(operator=="+"){
        //         return number+number2;
        //     }
        //     else if(operator=="-"){
        //         return number-number2;
        //     }
        //     else if(operator=="*"){
        //         return number*number2;
        //     }
        //     else if(operator=="/"){
        //         return number/number2;
        //     }
        // }
        // document.write(operation(9,3,"+"));







        // // Question no 5
        // function Square(number){
        //     return Math.pow(number,2);
        // }
        // document.write(Square(10));




        // // Question no 6
        // function factorial(number){
        //     var fact=1;
        //     if(number==0){
        //         return 1
        //     }
        //     else if(number<0){
        //         return -1
        //     }
        //     else{
        //     for(var i=1;i<=number;i++){
        //         fact*=i;
        //     }
        //     return fact;
        // }

        // }
        
        // document.write(factorial(10));





        // // Question no 7
        // function counting(start_no,end_no){
        //     for(var i=start_no;i<=end_no;i++){
        //         document.write(i+"<br>");
        //     }
        // }
        // counting(10,22);





        // // Question no 8
        // function calculateHypotenuse(base,perp){
        //     function calculateSquare(x){
        //         return x*x;
        //     }
        //     var Hypotenuse=Math.sqrt(calculateSquare(base)+calculateSquare(perp));
        //     document.write("Hypothenuse:"+Hypotenuse);
        // }
        // calculateHypotenuse(6,8);






        // // Question no 9
        // function area(widht=19,height=20){
        //     var a=widht*height;
        //     return a;
        // }
        // document.write(area(10,10));









        // // Question no 10
        // function is_palindrome(input){
        //     var reverse=input.split("").reverse().join("");
        //     if(reverse==input){
        //         document.write("The word "+input+" is palindrome.");
        //     }
        //     else{
        //         document.write(input+" is not palindrome.");
        //     }
        // }
        // is_palindrome("madam");





        // // Question no 11
        // function titleCase(sentence){
        //     var sentence=sentence.split(" ");
        //     var arr=[];
        //     for(var i=0;i<sentence.length;i++){
        //         var a=sentence[i];
        //         arr[i]=sentence[i].replace(sentence[i][0],sentence[i][0].toUpperCase());
        //     }
        //     return arr.join(" ");
        // }
        // document.write(titleCase("the quik brown fox"));





        // // Question no 12
        //     function largest_word(str){
        //         var str=str.split(" ");
        //         word_length=str[0].length;
        //         for(var i=0;i<str.length;i++){
        //             if(str[i].length>word_length){
        //                 word_length=str[i].length;
        //                 var largest_wordd=str[i];

        //             }
        //         }
        //         return largest_wordd;
        //     }
        //     document.write(largest_word("web development corse"));





        // // // Question no 13
        // function Occ(str,letter){
        //     times=0;
        //     for(var i=0;i<str.length;i++){
        //         if(str[i]==letter){
        //             times+=1;
        //         }
        //     }
        //     return "There are "+times+" occurance of letter "+letter+" in string: "+str;
        // }
        // document.write(Occ("JSResourceS.com","o"));





        // // // Question no 14
        // function calcCircumference(radius){
        //     return "The circumference of circle is: "+2*Math.PI*radius;
        // }
        // function calcArea(radius){
        //     return "<br>The area of circle is: "+Math.PI*(radius**2);
        // }
        // document.write(calcCircumference(199));
        // document.write(calcArea(19));




