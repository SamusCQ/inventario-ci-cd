const { getInventory } = require('./inventoryService');

test('Debe retornar inventario', () => {
    const data = getInventory();

    expect(data.length).toBeGreaterThan(0);
});