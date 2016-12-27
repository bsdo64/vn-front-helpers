const { describe, it } = require('mocha');
const { expect } = require('chai');

describe('Item Class', function() {
  const Item = require('../lib').Item;

  it('should be a class', function(){
    expect(Item).to.be.a('function');
  });

  describe('Item Instance', function() {

    it('should have getter inventories', function(){
      const inventoryDump = require('./dumps/Inventory');
      const item = new Item(inventoryDump);
      expect(item.inventories).to.be.a('array');
    });

    it('should have getter inventories', function(){
      const Inventory = require('./dumps/Inventory');
      const item = new Item(Inventory);
      expect(item.inventories).to.be.a('array');
    });

  });
});