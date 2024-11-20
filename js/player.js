class Player {
  constructor(name, health, weapon, armor, ring) {
    this.name = name;
    this.health = Math.min(Math.max(health, 0), 200);
    this.weapon = weapon;
    this.armor = armor;
    this.ring = ring;
    this.criticalChance = Math.floor(Math.random() * 61);

    if (ring && ring.effect) {
      if (ring.effect.health) this.health += ring.effect.health;
      if (ring.effect.attack) this.weapon.damage += ring.effect.attack;
      if (ring.effect.defense) this.armor.defense += ring.effect.defense;
      if (ring.effect.critChance) this.criticalChance += ring.effect.critChance;
    }
  }

  isAlive() {
    return this.health > 0;
  }
}

class Battle {
  static attack(attacker, opponent) {
    const baseDamage = attacker.weapon.damage;
    const isCritical = Math.random() * 100 < attacker.criticalChance;
    const finalDamage = isCritical ? baseDamage * 1.5 : baseDamage;
    const damageReduced = finalDamage * (1 - (opponent.armor.defense / 100));

    opponent.health -= damageReduced;
    opponent.health = Math.max(opponent.health, 0);

    console.log(`${attacker.name} greift ${opponent.name} an und verursacht ${damageReduced.toFixed(2)} Schaden${isCritical ? ' (Kritisch!)' : ''}.`);

    return isCritical;
  }
}

export { Player, Battle };
