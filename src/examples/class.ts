class MyExampleClass {

  label: string;

  constructor(label: string, public size: number) {
    this.label = label;
  }

  printFields() {
    console.log(this.label);
    console.log(this.size);
  }

}

new MyExampleClass('label example', 10).printFields();
