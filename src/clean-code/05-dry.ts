type Size = "" | "S" | "M" | "L";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        const element = this[key];
        switch (typeof element) {
          case "string":
            if ((<string>(<unknown>element)).length <= 0)
              throw new Error(`${key} is empty`);

            break;
          case "number":
            if (<number>(<unknown>element) <= 0)
              throw new Error(`${key} is zero`);

            break;

          default:
            throw new Error(`${key} is not valid`);
        }
      }
    }
    return true;
  }

  toString() {
    // No Dry
    if (!this.isProductReady) return;

    return `${this.name} (${this.price}), ${this.size}`;
  }
}

(() => {
  const bluePlants = new Product("Blue large pants", 10, "M");
  console.log(bluePlants.toString());
})();
