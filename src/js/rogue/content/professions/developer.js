
import Profession from '../../definitions/profession';

import * as Foods from '../items/foods';
import * as Heads from '../items/heads';
import * as Necks from '../items/necks';
import * as Potions from '../items/potions';
import * as Thresholds from '../../constants/skill-thresholds';
import * as Traits from '../traits/_all';

const devCfg = {
  hp  : '100d1',
  mp  : '9d5',
  str : '1d1',
  con : '1d1',
  int : '4d5',
  dex : '1d1',
  wis : '4d5',
  cha : '4d5',
  titles: ['Developer'],
  traits: [Traits.Infravision({ level: 3 }), Traits.Telepathy({ level: 65 }), Traits.Clairvoyance({ level: 3, req: 2 }), Traits.Stealth({ level: 40 })],
  skillCaps: { shot: Thresholds.Expert, stab: Thresholds.Skilled },
  startingItems: [
    // { init: () => new Weapons.Bow({ bucName: 'uncursed' }) },
    { init: () => new Heads.NightGoggles({ bucName: 'uncursed' }) },
    { init: () => new Necks.Protection({ bucName: 'uncursed' }) },
    { init: () => new Foods.Ration({ charges: '1d3', bucName: 'uncursed' }) },
    { init: () => new Potions.Healing({ charges: '1d1', bucName: 'uncursed', startIdentified: true }) }
  ]
};

export default class Developer extends Profession {
  constructor() {
    super(devCfg);
  }
}