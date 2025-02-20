// SECTION VARIABLES

const heroes = [
  {
    name: 'Strongman',
    type: 'dwarf',
    damage: 5,
    health: 100
  },
  {
    name: 'Heavy Hitter',
    type: 'elf',
    damage: 10,
    health: 50
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 25,
  level: 1
}

// !SECTION VARIABLES

// SECTION LOGIC

function attackBoss() {
  console.log("before hit boss has " + boss.health + " health");

  let totalDamage = 0
  heroes.forEach(hero => {
    //... Calculate total damage
    totalDamage += hero.damage
  })
  //... Reduce the boss health and update the boss's health on the page
  boss.health -= totalDamage
  console.log("after hit boss has " + boss.health + " health");
}

function bossAttack() {
  heroes.forEach(hero => {
    // Reduce hero's health by boss's damage
    console.log(hero.name + " has " + hero.health + "health before the hit");

    hero.health -= boss.damage
    checkHeroHealth()
    console.log(hero.name + " has " + hero.health + "health after the hit");
  })
  // Update heroes' health on the page
}

function checkForLoss() {
  const youLose = heroes.every(hero => hero.health == 0)
  if (!youLose) return

  if (youLose) {
    window.alert("You Died")
    // window.close()
  }
  return
}
function checkHeroHealth() {
  const hero = heroes.forEach(hero => {
    if (hero.health < 1) {
      hero.health = 0
    }
  })
}

// !SECTION LOGIC

setInterval(bossAttack, 1000)
// setInterval(checkForLoss, 1000)
hi  