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
  //  =============================================  Destructuring, rest operator, spread operator  =============================================================
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
    //  Merge Sort
    function mergeSort (arr) {
      if (arr.length < 2) return arr;
      let mid = Math.floor(arr.length /2);
      let subLeft = mergeSort(arr.slice(0,mid));
      let subRight = mergeSort(arr.slice(mid));
      return merge(subLeft, subRight);
    }
    function merge (a,b) {
      let result = [];
      while (a.length >0 && b.length >0)
          result.push(a[0] < b[0]? a.shift() : b.shift());
      return result.concat(a.length? a : b);
  }
  let test = [5,6,7,3,1,3,15];
console.log(mergeSort(test));
  }

}
