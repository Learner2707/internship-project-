// 24/01/2023 (Tuesday)
{
  //====================================  Functions =====================================================

  //=================================================== function declararion   ==========================
  function add(val1, val2) {
    return val1 + val2;
  }
  let sum_result = add(10, 24);
  console.log(sum_result);

  // ======================================================  function expression  ======================================
  const add_function_exp = function (val1, val2) {
    return val1 + val2;
  };
  let sum_result_function_exp = add_function_exp(10, 24);
  console.log(sum_result_function_exp);

  // ======================================================= arrow functions  ===========================================
  const add_arrow_func = (val1, val2) => {
    return val1 + val2;
  };
  let sum_result_arrow = add_arrow_func(10, 24);
  console.log(sum_result_arrow);

  // shortcut for arrow function if it has only one statement  :
  // const add_arrow_func = (val1, val2) => val1 + val2;

  //  =======================================   IIFE  ============================
  (function add_iife(a, b) {
    console.log("I am an Immediately Invoked Function Expression");
    let result = a + b;
    console.log(result);
  })(5, 6);
}
//25/01/2023(Wednesday)
{
  // ==================================== this keyword  ============================================
  {
    const person = {
      firstName: "Vittu",
      lastName: "Singh",
      fullName: function () {
        return this.firstName + " " + this.lastName;
      },
    };
    console.log(person.fullName());
  }
  // ================================  call, apply, bind  ====================================
  {
    //  ==========================================  call() method   ===================================
    {
      const person = {
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
        description: function (department) {
          return (
            this.firstName +
            " " +
            this.lastName +
            " is a " +
            department +
            " Engineer."
          );
        },
      };
      const person1 = {
        firstName: "Vittu",
        lastName: "Singh",
      };
      const person2 = {
        firstName: "Reetool",
        lastName: "Gupta",
      };
      console.log(person.fullName.call(person1));
      console.log(person.fullName.call(person2));
      console.log(person.description.call(person1, "Frontend")); // call()  with arguments
      console.log(person.description.call(person2, "Backend"));
    }
    //   ================================================ apply() method  =======================================
    {
      const person = {
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
        description: function (department, city) {
          return (
            this.firstName +
            " " +
            this.lastName +
            " is a " +
            department +
            " Engineer in " +
            city
          );
        },
      };
      const person1 = {
        firstName: "Vittu",
        lastName: "Singh",
      };
      const person2 = {
        firstName: "Reetool",
        lastName: "Gupta",
      };
      console.log(person.description.apply(person1, ["Frontend", "Delhi"])); // apply()  with arguments
      console.log(person.description.apply(person2, ["Backend", "Pune"]));
    }
    //  ===================================== bind()  method   ===================================
    {
      const person = {
        firstName: "Vittu",
        lastName: "Singh",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
      };

      const member = {
        firstName: "Reetool",
        lastName: "Gupta",
      };

      console.log(person.fullName.bind(member)());
    }
  }
}
// 27/01/2023 (Friday)
{
  // ============================================  Hoisting  ========================================
  {
    console.log(a_hoist); //will show undefined
    var a_hoist = 5;
    //console.log(b);   // will result in ReferenceError
    let b = 5;
    //console.log(c);   // will result in ReferenceError
    const c = 5;
    hoisted();
    function hoisted() {
      console.log("Function is hoisted if it is declared this way. ");
    }
    //hoisting_func_exp();  // this results error saying that it is not a function
    var hoisting_func_exp = function () {
      console.log(
        "Function does not get hoisted if declared using function expression method"
      );
    };
  }
}

//31/01/2023 (Tuesday)
{
  //  ==========================================  Destructuring, rest operator, spread operator  ================================
  {
    // ==========================================  Object Destructuring  =========================================
    {
      const person = {
        firstName: "Vittu",
        lastName: "Singh",
        city: "Delhi",
        gender: "Male",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        },
      };
      const { firstName, lastName } = person; // object destructing with variable name same as keys of object
      console.log(firstName, lastName);

      const { firstName: fN, lastName: lN } = person; // object destructing with custom variable name (alias) of keys of object
      console.log(fN, lN);

      // destructuring object passed as argument to the function
      function object_destructure({ fullName: getFullName }) {
        const personfullName = getFullName.call(arguments[0]);
        console.log(personfullName);
      }
      object_destructure(person);

      // using rest oeprator
      function test_rest_operator({ firstName, lastName, ...other_info }) {
        console.log(firstName, lastName);
        console.log(other_info);
      }
      test_rest_operator(person);

      // using spread operator
      function display(args) {
        console.log(args);
      }
      display(person); //passing whole object
      display({ ...person }); //another way : using spread operator, whole object is passed here , {} should be used
      // display(...person);        // error: Spread syntax requires ...iterable[Symbol.iterator] to be a function

      // Assignment without declaration
      const numbers = [];
      const obj = { a: 1, b: 2 };
      ({ a: numbers[0], b: numbers[1] } = obj); // The properties `a` and `b` are assigned to properties of `numbers`
      /* Note: The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
        { a, b } = { a: 1, b: 2 } is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.
         However, ({ a, b } = { a: 1, b: 2 }) is valid, as is const { a, b } = { a: 1, b: 2 }.
      */

      // Assigning new variable names and providing default values simultaneously
      const { a: num1 = 100, b: num2 = 200 } = { a: 300 };
      console.log(num1); //300
      console.log(num2); //200
    }

    // ==========================================  Array Destructuring  =======================================
    {
      const arr = [1, 2, 3, 4, 5];
      const [a, b, c] = arr; //destructuring the array
      console.log(a, b, c);

      // using rest operator
      const [d, e, ...others] = arr;
      console.log(d, e);
      console.log(others);

      function calculate_sum([a, b, ...other_numbers]) {
        console.log(a + b + other_numbers.reduce((prev, curr) => prev + curr));
      }
      calculate_sum(arr);

      //using spread operator
      console.log([...arr]);

      function cal_sum_using_spread([...numbers]) {
        console.log(numbers.reduce((prev, curr) => prev + curr));
      }
      cal_sum_using_spread(arr);
    }
  }
}
//9/02/2023 (Thursday)
{
  //   ============================================== Sorting  ==========================================================
  {
    // Merge Sort
    function mergeSort(arr) {
      if (arr.length < 2) return arr;
      let mid = Math.floor(arr.length / 2);
      return mergeArrays(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
      );
      function mergeArrays(a, b) {
        let temp = [];
        while (a.length > 0 && b.length > 0) {
          temp.push(a[0] < b[0] ? a.shift() : b.shift());
        }
        return temp.concat(a.length ? a : b);
      }
    }

    let test = [5, 6, 7, 3, 1, 3, 15];
    console.log(mergeSort(test));
  }

  //Check palindrome
  function palindrome(str) {
    // let arr=[...str];
    // let temp_arr=[...arr];
    // let reverse_arr= arr.reverse();
    // return temp_arr===reverse_arr?true:false;
    // return temp_arr.length===reverse_arr.length &&
    // temp_arr.every((value,index)=>value===reverse_arr[index]);

    return str.split("").reverse().join("") === str;
  }
  console.log(palindrome("abaabaaba"));
}
//10/02/2023 (Friday)
{
  //Array Methods Practice
  {
    // Problem 1:
    // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
    // Solution :
    function camelize(str) {
      return str
        .split("-")
        .map((word, index) =>
          index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
    }
  }
  {
    // Problem 2:
    //     Write a function filterRange(arr, a, b) that gets an array arr,
    //     looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
    //     The function should not modify the array. It should return the new array.
    // Solution :
    function filterRange(arr, a, b) {
      return arr.filter((item) => a <= item && item <= b);
    }
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    console.log(filtered);
    console.log(arr);
  }
  {
    // Problem 3:
    //     Write a function filterRangeInPlace(arr, a, b) that gets an array arr and
    //     removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
    // The function should only modify the array. It should not return anything.

    // Solution :
    function filterRangeInPlace(arr, a, b) {
      for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
    }

    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    console.log(arr);
  }
  {
    // Problem 4:
    // We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
    // Create a function copySorted(arr) that returns such a copy.

    // Solution :
    function copySorted(arr) {
      return arr.slice().sort();
    }

    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);

    console.log(sorted);
    console.log(arr);
  }
  {
    // Problem 5: Create An extendable calculator
    // Create a constructor function Calculator that creates “extendable” calculator objects.
    // First, implement the method calculate(str) that takes a string like "1 + 2" in the format
    // “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

    // Then add the method addMethod(name, func) that teaches the calculator a new operation.
    // It takes the operator name and the two-argument function func(a,b) that implements it.

    //     No parentheses or complex expressions in this task.
    // The numbers and the operator are delimited with exactly one space.

    // Solution :
    function Calculator() {
      this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
      };

      this.calculate = function (str) {
        let calculationData = str.split(" ");
        let a = +calculationData[0];
        let op = calculationData[1];
        let b = +calculationData[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        }

        return this.methods[op](a, b);
      };

      this.addMethod = function (name, func) {
        this.methods[name] = func;
      };
    }
    let simpleCalculator = new Calculator();
    console.log(simpleCalculator.calculate("20 + 23"));
    let myCalculator = new Calculator();
    myCalculator.addMethod("*", (a, b) => a * b);
    myCalculator.addMethod("^", (a, b) => a ** b);
    myCalculator.addMethod("/", (a, b) => a / b);
    myCalculator.addMethod("%", (a, b) => a % b);
    console.log(myCalculator.calculate("6 % 4"));
  }
  {
    // Problem 6:  check Subset array of an array
    // Check if one array is a subset of another array
    // sample input: isSubset(arr1,arr2)
    // sample output: true if arr2 is subset of arr1

    // Solution:
    const isSubset = (array1, array2) =>
      array2.every((element) => array1.includes(element));

    console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
    console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
  }
}
// 13/02/2023(Monday)
{
  {
    //Problem 6 : Map to names
    // You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

    // Solution:

    let vittu = { name: "Vittu", age: 25 };
    let reetool = { name: "Reetool", age: 22 };
    let mehul = { name: "Mehul", age: 24 };

    let users = [vittu, reetool, mehul];

    let names = users.map((item) => item.name);

    console.log(names);
  }
  {
    //Problem 7: Map to objects
    //     You have an array of user objects, each one has name, surname and id.
    //     Write the code to create another array from it, of objects with id and fullName,
    //     where fullName is generated from name and surname.

    // Solution:
    let vittu = { name: "Vittu", surname: "Singh", id: 1 };
    let reetool = { name: "Reetool", surname: "Gupta", id: 2 };
    let mehul = { name: "Mehul", surname: "Bajaj", id: 3 };

    let users = [vittu, reetool, mehul];

    let usersMapped = users.map((user) => ({
      fullName: `${user.name} ${user.surname}`,
      id: user.id,
    }));

    console.log(usersMapped[0].id); // 1
    console.log(usersMapped[0].fullName); // Vittu Singh
  }
  {
    // Problem 8:
    // Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
    // The formula for the average is (age1 + age2 + ... + ageN) / N.

    //Solution :
    let vittu = { name: "Vittu", age: 25 };
    let reetool = { name: "Reetool", age: 30 };
    let mehul = { name: "Mehul", age: 29 };

    let arr = [vittu, reetool, mehul];
    function getAverageAge(users) {
      return users.reduce((prev, curr) => prev + curr.age, 0) / users.length;
    }
    console.log(getAverageAge(arr));
  }
  {
    // Problem 9:
    // Let arr be an array.
    // Create a function unique(arr) that should return an array with unique items of arr.
    // Solution :
    function unique(arr) {
      return arr.filter((element, index) => arr.indexOf(element) === index);
    }
    console.log(unique([1, 2, 2, 3, 3, 3, 3, 1, 4]));
  }
  {
    // Problem 10 :
    // Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
    // Solution :
    let vittu = { name: "Vittu", age: 25 };
    let reetool = { name: "Reetool", age: 22 };
    let mehul = { name: "Mehul", age: 24 };

    let users = [vittu, reetool, mehul];
    function sortByAge(arr) {
      return arr.sort((a, b) => a.age - b.age);
    }
    console.log(sortByAge(users));
  }
  {
    // Problem 11:
    // Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
    // Multiple runs of shuffle may lead to different orders of elements.
    // All element orders should have an equal probability

    // Solution :
    // function shuffle(array) {
    //   array.sort(() => Math.random() - 0.6);     // normal method
    // }
    function shuffle(array) {
      //Fisher-Yate's Shuffle method
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // counts of appearances for all possible permutations
    let count = {
      123: 0,
      132: 0,
      213: 0,
      231: 0,
      321: 0,
      312: 0,
    };

    for (let i = 0; i < 1000000; i++) {
      let array = [1, 2, 3];
      shuffle(array);
      count[array.join("")]++;
    }

    // show counts of all possible permutations
    for (let key in count) {
      console.log(`${key}: ${count[key]}`);
    }
  }
  {
    // Problem 12:
    // Let’s say we received an array of users in the form {id:..., name:..., age:... }.
    // Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
    let users = [
      { id: "john", name: "John Smith", age: 20 },
      { id: "ann", name: "Ann Smith", age: 24 },
      { id: "pete", name: "Pete Peterson", age: 31 },
    ];
    // let usersById = groupById(users);
    console.log(groupById(users));
    /*
    // after the call we should have:
    
    usersById = {
      john: {id: 'john', name: "John Smith", age: 20},
      ann: {id: 'ann', name: "Ann Smith", age: 24},
      pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */

    // Solution:
    function groupById(users) {
      // let temp={};
      // users.forEach(element => {
      //   temp[element["id"]]=element;
      // });
      // return temp;

      return users.reduce((obj, currValue) => {
        obj[currValue["id"]] = currValue;
        return obj;
      }, {});
    }
  }
}
//15/02/2023(Wednesday)
{
  {
    // Problem 13:
    //   In this challenge, you are required to calculate and print the sum of the elements in an array,
    //  keeping in mind that some of those integers may be quite large.
    // Function Description:
    // Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
    // aVeryBigSum has the following parameter(s):
    // int ar[n]: an array of integers .
    // Return:
    // long: the sum of all array elements

    // Solution :
    function aVeryBigSum(ar) {
      return ar.reduce((prev, curr) => prev + curr, 0);
    }
  }
  {
    // Problem 14:diagonalDifference
    // Given a square matrix, calculate the absolute difference between the sums of its diagonals.

    // Solution:
    function diagonalDifference(arr) {
      let leftToRight = 0,
        rightToLeft = 0;
      for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arr.length - i - 1];
      }
      return Math.abs(leftToRight - rightToLeft);
    }
    console.log(
      diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ])
    );
  }
  {
    // Problem 15:plusMinus
    // Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
    // Print the decimal value of each fraction on a new line with  places after the decimal.

    // Solution:
    function plusMinus(arr) {
      let pos = 0,
        neg = 0,
        zero = 0;
      arr.forEach((el) => {
        if (el > 0) pos += 1;
        else if (el < 0) neg += 1;
        else zero += 1;
      });
      console.log((pos / arr.length).toFixed(6));
      console.log((neg / arr.length).toFixed(6));
      console.log((zero / arr.length).toFixed(6));
    }
    plusMinus([1, 1, 0, -1, 7, -1]);
  }
  {
    // Problem 16:staircase
    // Print a staircase of size n
    //     #
    //    ##
    //   ###
    //  ####
    // #####

    // Solution:

    function staircase(n) {
      for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "#".repeat(i + 1));
      }
    }
    staircase(5);
  }
  {
    // Problem 17:miniMaxSum
    // Given five positive integers, find the minimum and maximum values that can be calculated
    // by summing exactly four of the five integers. Then print the respective minimum and maximum values
    // as a single line of two space-separated long integers.
    // Solution:
    function miniMaxSum(arr) {
      const sortedArr = arr.sort((a, b) => a - b);
      console.log(
        sortedArr.slice(0, 4).reduce((prev, curr) => prev + curr) +
          " " +
          sortedArr.slice(1, 5).reduce((prev, curr) => prev + curr)
      );
    }
  }
}
// 16/02/2023(Thursday)
{
  {
    // Problem 18: Birthday Cake Candles
    //     You are in charge of the cake for a child's birthday. You have decided the cake will have one candle
    // for each year of their total age. They will only be able to blow out the tallest of the candles.
    //  Count how many candles are tallest.

    // Example:
    // candles=[4,4,1,3];

    // The maximum height candles are 4 units high. There are 2 of them, so return 2.

    // Solution:
    function birthdayCakeCandles(candles) {
      let count = 0;
      let max = Math.max(...candles);

      for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) count++;
      }
      return count;
    }
    console.log(birthdayCakeCandles([4, 4, 1, 3]));
  }
  {
    // Problem 19:
    // Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
    // The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

    // The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

    // If a[i] > b[i], then Alice is awarded 1 point.
    // If a[i] < b[i], then Bob is awarded 1 point.
    // If a[i] = b[i], then neither person receives a point.
    // Solution:
    function compareTriplets(a, b) {
      let rating = [0, 0];
      for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) rating[0]++;
        if (a[i] < b[i]) rating[1]++;
      }
      return rating;
    }
  }
  {
    // Problem 20:
    //     Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
    // Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    // - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
    // Solution:
    function timeConversion(s) {
      let hours = +s.slice(0, 2);
      let minutes = +s.slice(3, 5);
      let format = s.slice(8, 10);
      if (format == "AM") {
        if (s === "12:00:00AM") return "00:00:00";
        else if (hours === 12) return `00${s.slice(2, 8)}`;
        else return s.slice(0, 8);
      } else {
        if (s === "12:00:00PM") return "12:00:00";
        else if (hours === 12) return s.slice(0, 8);
        else return `${hours + 12}${s.slice(2, 8)}`;
      }
    }
  }
}
