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

  attack(defender) {
    const baseDamage = this.weapon.damage;
    const isCritical = Math.random() * 100 < this.criticalChance;
    const finalDamage = isCritical ? baseDamage * 1.5 : baseDamage;
    const damageReduced = finalDamage * (1 - (defender.armor.defense / 100));

    defender.health -= damageReduced;
    defender.health = Math.max(defender.health, 0);

    console.log(`${this.name} greift ${defender.name} an und verursacht ${damageReduced.toFixed(2)} Schaden${isCritical ? ' (Kritisch!)' : ''}.`);

    return isCritical;
  }
}

export { Player };
