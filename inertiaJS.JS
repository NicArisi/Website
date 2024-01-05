const calculator = {
  displayValue: '0',
  Mass: null,
  Radius: null,
  Length: null,
  CMInertia: null,};

function calculate(SetUp) {
  if (operator === 'Solid Cylinder') {
    return 0.5*mass*radius* Math.pow(radius,2);
  } else if (operator === 'Hoop') {
    return mass*radius* Math.pow(radius,2);
  } else if (operator === 'Solid Sphere') {
    return 2/5*mass*radius* Math.pow(radius,2);
  }else if(operator === 'SolidCylinderAboutCentralDia'){
    return 1/4*mass*Math.pow(radius,2)+(1/12)*mass*Math.pow(Length,2);
  }else if(operator === 'HoopAboutDiameter'){
    return 1/2*mass*radius* Math.pow(radius,2);
  }else if(operator === 'Rod about center of mass'){
    return 1/2*mass*radius* Math.pow(radius,2);
  }else if(operator === 'ThinSphericalShell'){
    return 2/3*mass*Math.pow(radius,2)
  }else if(operator === 'RodAboutEnd'){
    return 1/3*mass*Math.pow(Length,2);
  }else{
    return CMInertia+mass*math.pow(Length,2);
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