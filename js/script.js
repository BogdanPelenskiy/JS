// document.getElementById("hello").innerHTML = "HUIIIIIII";


// let d = document.body.children[0]
// alert(d.outerHTML)



// let newHeader = document.createElement("h2");
// let newText = document.createTextNode("HELLO WOELSD");
// newHeader.className =
// "newClass";
// newHeader.id =
// "newId";
// newHeader.innerHTML = "I header!";



// let m = 5;
// let n = ++m; // prefix increment (first m increases by 1, then n=m)
// console.log(m); // 6
// console.log(n); // 6
// let k = 5;
// let l = k++; // postfix increment (first l=k, then k increases by 1)
// console.log(k); // 6
// console.log(l); // 5



// console.log(false == 0); // true
// console.log("1" == 1); // true
// console.log(1 == "01"); // true
// console.log(true == 1); // true


// let x = prompt("Enter your number", "");
// let res = x >= 0 && x <= 100;
// console.log(res); 

// const x = 5;
// if (x > 0) {
//   console.log("Positive", String(x));
// }


// const cities = ["Rome", "Lviv", "Warsaw"];
// cities.splice(1, 2);
// console.log('cities:', cities);

// let str = 'Message';
// let a;
// for (a of str) {
// document.write(a + "<br>");
// }



// function sum(a = 2, b = 4) {
// let Suum = a + b;
// console.log(Suum);
// }

// sum(44, 42)




// let arr = [1, 2, 3, 4, 5];

// let sendMessage = function() { alert( 'Some message' ); };
// sendMessage();




// function sum(x, y){
//     return x + y;
//     }
//     function subtract(x, y){
//     return x - y;
//     }
//     function operation(x, y, func){
//     let result = func(x, y);
//     console.log(result);
//     }
//     console.log("Sum");
//     operation(10, 6, sum); // 16
//     console.log("Subtract");
//     operation(10, 6, subtract); // 4


// try {
//     console.log('Try block start');
//     i + f;
//     console.log('Try block end');
//     } catch(error) {
//     console.log('Catch is ignored because there are no errors');
//     }
//     console.log('Code after try..catch');



// function enterPIN() {
//     let pin = prompt("Enter PIN-number (max length 4):", "");
//     if (pin.length > 4) {
//     throw new Error("Line length greater than 4 characters");
//     }
//     return pin;
//     }
//     try {
//     let result = enterPIN();
//     console.log(result);
//     } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
//     }



// let Person ={
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//     };
//     Person.nationality = "English";
//     console.log(Person);

// a = this;
// console.log(a);



// class Book {
//     constructor(author) {
//     this.bookname = author;
//     }
//     static readBook() {
//     return "You reading new book!";
//     }
//    };
//    let newbook = new Book("Dumas");
// //    console.log(newbook.readBook()); // Error
//    console.log(Book.readBook()); // You reading new book!




   // class Student {
   //  constructor(name) {
   //  this.name = name;
   //  }
   //  showName() {
   //  alert(this.name);
   //  }
   //  }
   //  // Using:
   //  let student = new Student("Sam");
   //   student.showName(); // Sam
   //   let student1 = new Student("Bohdan");
   //   student1.showName(); // Bohdan
   //   let student2 = new Student("Bond");
   //   student2.showName(); // Bond



// document.getElementById("calcResult").innerHTML = "HUIIIIIII";
// document.getElementById("calcResult").style.color = "blue";
// document.getElementById("calcResult").style.fontSize = "40px";





// let height = window.innerHeight;
// console.log('height:', height);


// const site = window.open("https://www.google.com", "_blank", "width=400, height=400");
// setInterval(() => { site.close(); }); // Closes the window after 5 seconds



// if(navigator.geolocation){
//    navigator.geolocation.getCurrentPosition(function(pos){
//    alert( 'latitude: '+pos.coords.latitude+' longitude: '+pos.coords.longitude+' altitude:'+pos.coords.altitude+' accuracy: '+pos.coords.accuracy+' speed: '+pos.coords.speed );
//    },function(e){alert(e);},
//    {enableHighAccuracy: true, timeout: 4000, maximumAge: 0 } );
//    } else alert(" Your browser does not support geolocation.");

// document.addEventListener('mousemove', function() {
//    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
// });

// document.getElementById("btn").addEventListener("click", function() {
//    alert("You clicked the button!");
// });

// let texts = "Hello my friend, how are you?";
// let str = /how/;
// let result = texts.test(str);
// console.log(result); // true



// const isBossHappy = true;
// const willIGetPremium = new Promise(
// function (resolve, reject) {
// if (isBossHappy) {
// const bonus = {
// kind: 'premium',
// amount: 500
// };
// resolve(bonus); // done
// } else {
// const reason = new Error('Premium rejected!');
// reject(reason); // reject
// }
// }
// );


// willIGetPremium
// .then(function (result) {
// console.log(result); // output: { kind: 'premium', amount: 500 }
// },
// function (error) {
// console.log(error.message); // output: 'Premium rejected!'
// });
// willIGetPremium
// .then(function (result) {
// console.log(result); // output: { kind: 'premium', amount: 500 }
// });

// const promise = new Promise(function (resolve, reject) {
//    setTimeout(function() {
//    resolve("Done1", "Done2");
//    }, 2000);
//    });
//    promise.then(function (res1, res2) {
//    console.log(`${res1} ${res2}`); // "Done1 undefined"
//    });



// const doSomethingAsync = () => {
//    return new Promise(resolve => {
//    setTimeout(() => resolve("I did something"), 2000);
//    });
//    };
//    const doSomething = async () => {
//    console.log(await doSomethingAsync());
//    };
//    console.log("Before");
//    doSomething();
//    console.log("After");