import * as Stats from './Stats';

const Types = {
  "fire": {
    theme: '#ffc499',
    logo: require('../resources/images/types/fire.png')
  },
  "grass": {
    theme: '#DEFDE0',
    logo: require('../resources/images/types/grass.png')
  },
  "electric": {
    theme: '#fffc96',
    logo: require('../resources/images/types/electric.png')
  },
  "water": {
    theme: '#9eedff',
    logo: require('../resources/images/types/water.png')
  },
  "ground": {
    theme: '#f4e7da',
    logo: require('../resources/images/types/ground.png')
  },
  "rock": {
    theme: '#d5d5d4',
    logo: require('../resources/images/types/rock.png')
  },
  "fairy": {
    theme: '#fceaff',
    logo: require('../resources/images/types/fairy.png')
  },
  "poison": {
    theme: '#9778ff',
    logo: require('../resources/images/types/poison.png')
  },
  "bug": {
    theme: '#98d7a5',
    logo: require('../resources/images/types/bug.png')
  },
  "dragon": {
    theme: '#97b3e6',
    logo: require('../resources/images/types/dragon.png')
  },
  "psychic": {
    theme: '#c038ff',
    logo: require('../resources/images/types/psychic.png')
  },
  "flying": {
    theme: '#F5F5F5',
    logo: require('../resources/images/types/flying.png')
  },
  "normal": {
    theme: '#F5F5F5',
    logo: require('../resources/images/types/normal.png')
  },
  "fighting": {
    theme: '#E6E0D4',
    logo: require('../resources/images/types/fighting.png')
  },
  "ghost": {
    theme: '#948FDE',
    logo: require('../resources/images/types/ghost.png')
  },
  "steel": {
    theme: '#DCEAEB',
    logo: require('../resources/images/types/steel.png')
  },
  "ice": {
    theme: '#83D8F7',
    logo: require('../resources/images/types/ice.png')
  },
  "dark": {
    theme: '#71717C',
    logo: require('../resources/images/types/dark.png')
  },
  "unknown": {
    theme: '#FDFEFE',
    logo: require('../resources/images/types/unknown.png')
  },
  "shadow": {
    theme: '#C17FC4',
    logo: require('../resources/images/types/fire.png')
  }
}

const statistics = {
  "hp": Stats.hp,
  "attack": Stats.attack,
  "defense": Stats.defence,
  "special-attack": Stats.specialAttack,
  "special-defense": Stats.specialDefence,
  "speed": Stats.speed,
  "accuracy": Stats.accuracy,
  "evasion": Stats.evasion
}

export {
  Stats,
  Types,
  statistics
}
