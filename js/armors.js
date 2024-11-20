class Armor {
  constructor(name, defense) {
    this.name = name;
    this.defense = Math.min(Math.max(defense, 1), 30);
  }
}

export const armors = [
  new Armor("Programmierer Brille", 15),
  new Armor("Feurige Tunika", 20),
  new Armor("Titanium-Schutzanzug", 30),
  new Armor("Mächtige Badehose", 5),
  new Armor("Mystischer Umhang der Schüchternheit", 10),
  new Armor("Ritterrüstung aus Pappe", 8),
  new Armor("Plüschmantel des Kuschelns", 12),
  new Armor("Wolkenanzug", 25),
  new Armor("Hühnerhaut-Hemd", 7),
  new Armor("Alte Zeitung als Rüstung", 3),
  new Armor("Glitzerndes Disco-Outfit", 18),
  new Armor("Superhelden-Cape", 15),
  new Armor("Unsichtbare Schutzweste", 14),
  new Armor("Dosenpanzerung", 9),
  new Armor("Anzug des Bänkers", 11),
  new Armor("Schildkrötenpanzer", 22),
  new Armor("Kettenhemd der Drachen", 27),
  new Armor("Zauberhafte Robe", 20),
  new Armor("Schleier des Schattens", 13),
  new Armor("Steinerner Brustpanzer", 17),
  new Armor("Federleichte Schutzjacke", 10),
  new Armor("Rüstung des Sturms", 24),
  new Armor("Lederweste des Waldläufers", 12),
  new Armor("Golem-Hülle", 28),
  new Armor("Flammenfeste Schutzkleidung", 19)
];
