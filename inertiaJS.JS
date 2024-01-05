const calculator = {
  displayValue: '0',
  Mass: null,
  Radius: null,
  Length: null,
  CMInertia: null,};

function calculate(SetUp) {
  if (operator === 'Solid Cylinder') {
    calculator.displayValue = 0.5*mass*radius* Math.pow(radius,2);
  } else if (operator === 'Hoop') {
    calculator.displayValue = mass*radius* Math.pow(radius,2);
  } else if (operator === 'Solid Sphere') {
    calculator.displayValue = 2/5*mass*radius* Math.pow(radius,2);
  }else if(operator === 'SolidCylinderAboutCentralDia'){
    calculator.displayValue = 1/4*mass*Math.pow(radius,2)+(1/12)*mass*Math.pow(Length,2);
  }else if(operator === 'HoopAboutDiameter'){
    calculator.displayValue = 1/2*mass*radius* Math.pow(radius,2);
  }else if(operator === 'Rod about center of mass'){
    calculator.displayValue = 1/2*mass*radius* Math.pow(radius,2);
  }else if(operator === 'ThinSphericalShell'){
    calculator.displayValue = 2/3*mass*Math.pow(radius,2)
  }else if(operator === 'RodAboutEnd'){
    calculator.displayValue = 1/3*mass*Math.pow(Length,2);
  }else{
    calculator.displayValue = CMInertia+mass*math.pow(Length,2);
  }
}

function resetCalculator() {
  Mass= null;
  Radius= null;
  Length= null;
  CMInertia= null;
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();
