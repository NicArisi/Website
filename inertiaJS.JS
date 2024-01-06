const calculator = {
  displayValue: '0',
  Mass: null,
  Radius: null,
  Length: null,
  CMInertia: null,};

function processInputs(){
	calculator.Mass = parseFloat(document.getElementById("Mass").value);
	calculator.Radius = parseFloat(document.getElementById("Radius").value);
	calculator.Length = parseFloat(document.getElementById("Length").value);
	calculator.CMInertia = parseFloat(document.getElementById("CMInertia").value);
}

function calculate(operator) {
  const mass = calculator.Mass;
  const radius = calculator.Radius;
  const length = calculator.Length;
  const CMInertia = calculator.CMInertia;
  if (operator === 'Solid Cylinder') {
    calculator.displayValue = 0.5*mass* Math.pow(radius,2);
  } else if (operator === 'Hoop') {
    calculator.displayValue = mass* Math.pow(radius,2);
  } else if (operator === 'Solid Sphere') {
    calculator.displayValue = 2/5*mass* Math.pow(radius,2);
  }else if(operator === 'SolidCylinderAboutCentralDia'){
    calculator.displayValue = ((1/4)*mass*Math.pow(radius,2))+((1/12)*mass*Math.pow(Length,2));
  }else if(operator === 'HoopAboutDiameter'){
    calculator.displayValue = 1/2*mass* Math.pow(radius,2);
  }else if(operator === 'Rod about center of mass'){
    calculator.displayValue = 1/2*mass* Math.pow(radius,2);
  }else if(operator === 'ThinSphericalShell'){
    calculator.displayValue = 2/3*mass*Math.pow(radius,2)
  }else if(operator === 'RodAboutEnd'){
    calculator.displayValue = 1/3*mass*Math.pow(Length,2);
  }else{
    calculator.displayValue = CMInertia+mass*math.pow(Length,2);
  }
  updateDisplay();
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
