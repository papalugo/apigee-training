var num1 = context.getVariable("request.queryparam.n1");
var num2 = context.getVariable("request.queryparam.n2");

var result = parseInt(num1) + parseInt(num2);
context.setVariable("total", result);