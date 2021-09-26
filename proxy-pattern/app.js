class TestApi {
  constructor() {
    this.getValue = this.getValue;
  }

  getValue = (coin) => {
    console.log("Making request...");

    switch (coin) {
      case "Bitcoin":
        return "1000$";
      case "Litecoin":
        return "500$";
      case "Etherium":
        return "100$";
    }
  };
}

class TestProxy {
  constructor() {
    this.api = new TestApi();
    this.cache = {};
  }

  getValue = (coin) => {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }

    return this.cache[coin];
  };
}

const proxy = new TestProxy();

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Etherium"));
