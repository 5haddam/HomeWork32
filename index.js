const obj = { X:12, Y:3, znak: '/' };

class SuperMath {
  check(obj) {
    if (this.isValidInput(obj)) {
      if (confirm(`if you want to do math action ${obj.znak} with numbers ${obj.X} and ${obj.Y}`)) {
        alert(`The result is ${this.calculator(obj)}`);
      } else {
        this.input();
      }
    } else {
      this.input();
    }
  }
  
  isValidInput(obj) {
    return typeof obj.X === 'number' && typeof obj.Y === 'number' && '+ - / * %'.indexOf(obj.znak) !== -1;
  }
  
  calculator(obj) {
    switch (obj.znak) {
      case '+':
        return obj.X + obj.Y;
      case '-':
        return obj.X - obj.Y;
      case '/':
        return obj.X / obj.Y;
      case '*':
        return obj.X * obj.Y;
      case '%':
        return obj.X % obj.Y;
    }
  }

  input() {
    const obj = {};
    obj.X = parseFloat(prompt('Please, enter the first number'));
    obj.Y = parseFloat(prompt('Please, enter the second number'));
    obj.znak = prompt('Please, enter the operator');
    this.check(obj);
  }
}

p = new SuperMath();
p.check(obj);