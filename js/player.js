export function createPlayer(name, health, weapon, armor, ring) {
  let criticalChance = Math.floor(Math.random() * 61);

  if (ring && ring.effect) {
    if (ring.effect.health) health += ring.effect.health;
    if (ring.effect.attack) weapon.damage += ring.effect.attack;
    if (ring.effect.defense) armor.defense += ring.effect.defense;
    if (ring.effect.critChance) criticalChance += ring.effect.critChance;
  }

  return {
    name,
    health: Math.min(Math.max(health, 0), 200),
    weapon,
    armor,
    ring,
    criticalChance,
    isAlive() {
      return this.health > 0;
    }
  };
}



export function attack(attacker, opponent) {
  const baseDamage = attacker.weapon.damage;
  const isCritical = Math.random() * 100 < attacker.criticalChance;
  const finalDamage = isCritical ? baseDamage * 1.5 : baseDamage;
  const damageReduced = finalDamage * (1 - (opponent.armor.defense / 100));

  opponent.health -= damageReduced;
  opponent.health = Math.max(opponent.health, 0);

  console.log(`${attacker.name} greift ${opponent.name} an und verursacht ${damageReduced.toFixed(2)} Schaden${isCritical ? ' (Kritisch!)' : ''}.`);

  return isCritical;
}


