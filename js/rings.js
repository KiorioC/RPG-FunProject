class Ring {
  constructor(name, effect, description) {
    this.name = name;
    this.effect = effect;
    this.description = description;
  }
}

export const rings = [
  new Ring("Ring der Stärke", { attack: +5 }, "Erhöht den Angriff um 5 Punkte"),
  new Ring("Ring des Schutzes", { defense: +10 }, "Erhöht die Verteidigung um 10%"),
  new Ring("Ring des Fluchs", { attack: -3 }, "Verringert den Angriff um 3 Punkte"),
  new Ring("Ring der Heilung", { health: +10 }, "Erhöht die Gesundheit um 10 Punkte"),
  new Ring("Ring der Schwächung", { defense: -5 }, "Verringert die Verteidigung um 5%"),
  new Ring("Ring der Präzision", { critChance: +5 }, "Erhöht die kritische Trefferchance um 5%"),
  new Ring("Ring der Verwirrung", { critChance: -5 }, "Verringert die kritische Trefferchance um 5%")
];
