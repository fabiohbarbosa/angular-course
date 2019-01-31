function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

const myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);