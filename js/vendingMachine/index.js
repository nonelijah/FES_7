import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";
import MachineFunc from "./js/machineFunc.js";

const colaGenerator = new ColaGenerator();
await colaGenerator.setup();

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setup();

// const machineFunc = new MachineFunc();
// machineFunc.setup();
