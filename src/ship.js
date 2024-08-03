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
          return true;
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
          return true;
        } else {
          return this.sunk;
        }
      },
    },
    {
      name: "Zinnia",
      length: 6,
      sunk: false,
      hitCount: 0,
      hit: function () {
        this.hitCount += 1;
      },
      isSunk: function () {
        if (this.hitCount === this.length) {
          return true;
        } else {
          return this.sunk;
        }
      },
    },
    {
      name: "Wielingen",
      length: 8,
      sunk: false,
      hitCount: 0,
      hit: function () {
        this.hitCount += 1;
      },
      isSunk: function () {
        if (this.hitCount === this.length) {
          return true;
        } else {
          return this.sunk;
        }
      },
    },
  ];
};

module.exports = Ships;
