 { // 24/01/2023 (Tuesday)
{//====================================  Functions =====================================================
//================================= function declararion   ===================
function add(val1, val2) {
  return val1 + val2;
}
let sum_result = add(10, 24);
// console.log(sum_result);

// ======================================================  function expression  ======================================
const add_function_exp = function (val1, val2) {
  return val1 + val2;
};
let sum_result_function_exp = add_function_exp(10, 24);
// console.log(sum_result_function_exp);

// ======================================================= arrow functions  ===========================================
const add_arrow_func = (val1, val2) => {
  return val1 + val2;
};
let sum_result_arrow = add_arrow_func(10, 24);
console.log(sum_result_arrow);

// shortcut for arrow function if it has only one statement  :
// const add_arrow_func = (val1, val2) => val1 + val2;


//  =======================================   IIFE  ============================
(function add_iife(a,b){
    console.log("I am an Immediately Invoked Function Expression");
    let result=a+b;
    console.log(result);
})(5,6);

}

}

