{
  // 24/01/2023 (Tuesday)
  {
    //====================================  Functions =====================================================
    //================================= function declararion   ===================
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
}
{
  //25/01/2023(Wednesday)
  {
    // ==================================== this keyword  ============================================
    const person = {
      firstName: "Vittu",
      lastName: "Singh",
      fullName: function () {
        return this.firstName + " " + this.lastName;
      },
    };
    console.log(person.fullName());
  }
  {
    // ================================  call, apply, bind  ====================================
    {
      //  ==========================================  call() method   ===================================
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
    {
      //   ================================================ apply() method  =======================================
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
    {
      //  ===================================== bind()  method   ===================================
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
{// 27/01/2023 (Friday)
  { // ============================================  Hoisting  ========================================
    console.log(a_hoist);    //will show undefined
    var a_hoist = 5;    
    //console.log(b);   // will result in ReferenceError 
    let b = 5;
    //console.log(c);   // will result in ReferenceError 
    const c = 5;
    hoisted();
    function hoisted(){
      console.log("Function is hoisted if it is declared this way. ");
    }
    //hoisting_func_exp();  // this results error saying that it is not a function
    var hoisting_func_exp = function(){
      console.log("Function does not get hoisted if declared using function expression method")
    }


  }

}
