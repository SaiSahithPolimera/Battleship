const Ships = () => {
  return [
    {
      name: "Turn Out",
      length: 3,
      sunk: false,
      hitCount: 0,
      hit: function () {
        this.hitCount += 1;
      },
      isSunk: function () {
        if (this.hitCount === this.length) {
          this.sunk = true;
          return this.sunk;
        } else {
          return this.sunk;
        }
      },
    },
    {
      name: "Lier",
      length: 4,
      sunk: false,
      hitCount: 0,
      hit: function () {
        this.hitCount += 1;
      },
      isSunk: function () {
        if (this.hitCount === this.length) {
          this.sunk = true;
          return this.sunk;
        } else {
          return this.sunk;
        }
      },
    },
    {
      name: "Zinnia",
      length: 5,
      sunk: false,
      hitCount: 0,
      hit: function () {
        this.hitCount += 1;
      },
      isSunk: function () {
        if (this.hitCount === this.length) {
          this.sunk = true;
          return this.sunk;
        } else {
          return this.sunk;
        }
      },
    },
    {
      name: "Wielingen",
      length: 6,
      sunk: false,
      hitCount: 0,
      hit: function () {
        this.hitCount += 1;
      },
      isSunk: function () {
        if (this.hitCount === this.length) {
          this.sunk = true;
          return this.sunk;
        } else {
          return this.sunk;
        }
      },
    },
  ];
};

module.exports = Ships;
