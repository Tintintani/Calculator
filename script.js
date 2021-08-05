const calculator = {
    result: null,
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

getNumber = (num) => {
    if (text == "0") text = "";
    if (equaled && calculator.secondOperand == null) text = "";

    if (calculatorReset) {
        document.getElementById("outputTopLine").style.textAlign = "right";
        document.getElementById("outputTopLine").innerHTML = null;
        document.getElementById("outputBottomLine").innerHTML = null;
        text = "";
        calculatorReset = false;
    }

    equaled = false;

    operatorPlaced = false;
    text += num.value;
    Operand += num.value;
    document.getElementById("outputTopLine").innerHTML = text;
    secondOperandTurn
        ? ((calculator.secondOperand = parseFloat(Operand)))
        : (calculator.firstOperand = parseFloat(Operand));
    console.log(calculator.firstOperand + "," + calculator.secondOperand);
    console.log("text = " + text);
    operatorTurn = true;
    check();
};

setOperator = (op) => {
    if (firstMinusSign || operatorTurn) {
        if (equaled) equaled = false;
        if (operatorPlaced) {
            text = text.toString().substring(0, text.length - 1);
            console.log("text = " + text);
        }

        if (firstMinusSign && text == "") {
            text += Operand = "-";
            document.getElementById("outputTopLine").style.textAlign = "right";
            document.getElementById("outputTopLine").innerHTML = text;
            calculatorReset = false;
            console.log(text + "sign");
            firstMinusSign = false;
            return;
        }

        text += op.value;
        calculator.operator = op.value;
        document.getElementById("outputTopLine").innerHTML = text;
        console.log("text = " + text);
        secondOperandTurn = true;
        Operand = "";
        operatorPlaced = true;
    }
    shiftOperand();
};

check = () => {
    if (calculator.firstOperand != null && calculator.secondOperand != null) {
        calculator.result = evaluate();
        document.getElementById("outputBottomLine").innerHTML = evaluate();
        secondOperandTurn = true;
        console.log("check");
    }
};

shiftOperand = () => {
    decimalPlaced = false;
    if (calculator.firstOperand != null && calculator.secondOperand != null) {
        calculator.secondOperand = null;
        document.getElementById("outputBottomLine").innerHTML = calculator.firstOperand = calculator.result;
        Operand = "";
        console.log("shiftOperand");
    }
};

evaluate = () => {
    if (!equaled) {
        const { firstOperand, secondOperand, operator } = calculator;
        switch (operator) {
            case "+":
                return firstOperand + secondOperand;
            case "-":
                return firstOperand - secondOperand;
            case "×":
                return firstOperand * secondOperand;
            case "÷":
                return firstOperand / secondOperand;
            case "%":
                return (firstOperand * secondOperand) / 100;
        }
    }
};

equals = () => {
    if (!equaled && secondOperandTurn) {
        Operand = "";
        document.getElementById("outputTopLine").innerHTML = text = calculator.firstOperand = evaluate();
        document.getElementById("outputBottomLine").innerHTML = null;
        secondOperandTurn = false;
        operatorTurn = true;
        operatorPlaced = false;
        calculator.secondOperand = null;
        equaled = true;
        console.log("=");
    }
};

AC = () => {
    (Operand = ""), (text = "");
    document.getElementById("outputTopLine").innerHTML = "Calculator";
    document.getElementById("outputTopLine").style.textAlign = "left";
    document.getElementById("outputBottomLine").innerHTML = null;
    secondOperandTurn = false;
    decimalPlaced = false;
    calculatorReset = true;
    operatorTurn = false;
    operatorPlaced = false;
    firstMinusSign = true;
    calculator.firstOperand = calculator.secondOperand = null;
    console.clear();
    console.log("AC");
    equaled = true;
};

addDecimal = (decimal) => {
    if (!decimalPlaced) {
        document.getElementById("outputTopLine").style.textAlign = "right";
        if (equaled && calculator.secondOperand == null) {
            text = "";
            console.log("dfsfd");
            calculatorReset = equaled = false;
        }
        text += decimal.value;
        Operand += decimal.value;
        document.getElementById("outputTopLine").innerHTML = text;
        decimalPlaced = true;
        console.log("text = " + text);
    }
};

clearOperand = () => {
    if (calculator.secondOperand == null && operatorPlaced == false) {
        if (equaled) AC();
        if (text.length <= 1) AC();
        else {
            text = Number(text).toString().substring(0, text.length - 1);
            Operand = Operand.substring(0, Operand.length - 1);
            calculator.firstOperand = parseFloat(Operand);
            document.getElementById("outputTopLine").innerHTML = text;
            console.log("First Operand " + Operand);
            check();
            return;
        }
    } else if (Operand.length > 1) {
        text = text.toString().substring(0, text.length - 1);
        Operand = Operand.substring(0, Operand.length - 1);
        calculator.secondOperand = parseFloat(Operand);
        document.getElementById("outputTopLine").innerHTML = text;
        check();
        console.log("Second Operand " + Operand);
    } else if (Operand.length == 1) {
        Operand = "";
        calculator.secondOperand = null;
        text = text.toString().substring(0, text.length - 1);
        document.getElementById("outputTopLine").innerHTML = text;
        document.getElementById("outputBottomLine").innerHTML = calculator.firstOperand;
        console.log("Second Operand " + Operand);
    }
};
