class Weapon {
  constructor(name, damage) {
    this.name = name;
    this.damage = Math.min(Math.max(damage, 1), 20);
  }
}

export const weapons = [
  new Weapon("Paladin's Hammer", 15),
  new Weapon("Schwert der tausend Wahrheiten", 18),
  new Weapon("Flammenwerfer der Vergeltung", 17),
  new Weapon("Laser-Katana des Chaos", 20),
  new Weapon("Donnerfaust", 14),
  new Weapon("Schatten-Dolch", 13),
  new Weapon("Riesige Gummiente", 5),
  new Weapon("Verfluchter Löffel", 6),
  new Weapon("Bananen-Schleuder", 8),
  new Weapon("Buch der endlosen Fußnoten", 10),
  new Weapon("Fliegender Teppich-Bumerang", 12),
  new Weapon("Laute der Zerstörung", 9),
  new Weapon("Schmetterlingsschwert", 16),
  new Weapon("Käse-Kanone", 7),
  new Weapon("Wurstschwert des Wahnsinns", 11),
  new Weapon("Elektrische Zange", 15),
  new Weapon("Goldener Morgenstern", 18),
  new Weapon("Froststab des Eises", 14),
  new Weapon("Zauberstab des Lichts", 13),
  new Weapon("Stachelkeule", 17),
  new Weapon("Schildbrecher-Axt", 19),
  new Weapon("Magischer Bumerang", 12),
  new Weapon("Drachenbogen", 14),
  new Weapon("Lichtschwert der Gerechtigkeit", 20),
  new Weapon("Mystische Sichel", 16),
];

