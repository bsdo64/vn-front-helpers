/**
 * Created by dobyeongsu on 2016. 12. 27..
 */

class Inventory {
  constructor(userInventory) {
    this.userInventories = userInventory;
  }

  get inventories () {
    return this.userInventories;
  }

  hasInventoryItems() {

  }
}

module.exports = Inventory;