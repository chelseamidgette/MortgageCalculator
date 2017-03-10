

//final calculation
function monthlyPayment(){

	var interestRate = parseFloat(document.getElementById("rate").value);
	var loanBalance = parseFloat(document.getElementById("balance").value);
	var loanTerm = parseFloat(document.getElementById("term").value);
	var paymentPeriod = parseFloat(document.getElementById("period").value);

	// monthly interest rate
	var monthlyInterestRate = (interestRate / 100) / paymentPeriod;

	// number of payments
	var numberOfPayments = (loanTerm * paymentPeriod);

	//compounded interest rate
	var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

	//interest quotient
	var interestQuotient = ((monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1));

	var monthlyPayment = ( loanBalance * interestQuotient ).toFixed(2);

	document.getElementById("result").innerHTML = "Your monthly payment is " + monthlyPayment
};
