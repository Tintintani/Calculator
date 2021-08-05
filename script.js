const calculator = {
    result: null,
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

getNumber = (num) => {
    if (calculator.secondOperand == null && calculator.firstOperand == null) text = "";
    if (calculatorReset) {
        document.getElementById("outputTopLine").style.textAlign = "right";
        document.getElementById("outputTopLine").innerHTML = null;
        document.getElementById("outputBottomLine").innerHTML = null;
        text = "";
        calculatorReset = false;
    }

    text += num.value;
    Operand += num.value;
    document.getElementById("outputTopLine").innerHTML = text;
    secondOperandTurn
        ? ((calculator.secondOperand = parseFloat(Operand)), (operatorPlaced = false))
        : (calculator.firstOperand = parseFloat(Operand));
    console.log(calculator.firstOperand + "," + calculator.secondOperand);
    console.log("text = " + text);
    operatorTurn = true;
    check();
};

setOperator = (op) => {
    if ((op.value == "-" && calculatorReset) || operatorTurn) {
        if (equaled) equaled = false;
        if (operatorPlaced) {
            text = text.toString().substring(0, text.length - 1);
            console.log("text = " + text);
        }

        if (text == "") {
            text += Operand = "-";
            document.getElementById("outputTopLine").style.textAlign = "right";
            document.getElementById("outputTopLine").innerHTML = text;
            calculatorReset = false;
            console.log(text + "sign");
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
    if (!equaled) {
        Operand = "";
        document.getElementById("outputTopLine").innerHTML = text = calculator.firstOperand = evaluate();
        document.getElementById("outputBottomLine").innerHTML = null;
        secondOperandTurn = false;
        decimalPlaced = false;
        operatorTurn = true;
        operatorPlaced = false;
        calculator.secondOperand = null;
        equaled = false;
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
    calculator.firstOperand = calculator.secondOperand = null;
    console.log("AC");
    equaled = true;
};

addDecimal = (decimal) => {
    if (!decimalPlaced) {
        text += decimal.value;
        Operand += decimal.value;
        document.getElementById("outputTopLine").innerHTML = text;
        decimalPlaced = true;
    }
};

clearOperand = () => {
    if (calculator.secondOperand == null && operatorPlaced == false) {
        if (text.length <= 1) AC();
        else {
            text = Number(text)
                .toString()
                .substring(0, text.length - 1);
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
        console.log("Second Operand " + Operand);
    }
};
