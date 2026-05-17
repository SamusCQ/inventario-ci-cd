const inventory = [
    { id: 1, name: "Laptop", stock: 5 },
    { id: 2, name: "Mouse", stock: 10 }
];

function getInventory() {
    return inventory;
}

module.exports = { getInventory };