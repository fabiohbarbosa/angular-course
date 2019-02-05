// example 1
function printLabel(obj : { label: string }) {
  console.log(obj.label);
}

const myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// example 2
interface MyObject {
  size: number;
  label: string;
}

function printLabelInterface(obj: MyObject) {
  console.log(obj.label);
}

printLabelInterface(myObj)
