/**
 * Created by dobyeongsu on 2016. 12. 27..
 */

class Item {
  constructor(userItems) {
    this.userInventories = userItems;
  }

  get inventories () {
    return this.userInventories;
  }

  hasInventoryItems() {

  }
}

module.exports = Item;