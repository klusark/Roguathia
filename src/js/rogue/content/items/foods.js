
import { Comestible } from '../../definitions/equipment';
import { rarity } from '../../constants/decorators';

@rarity(50)
export class Ration extends Comestible {
  constructor(opts) {
    super(opts);
    this.name = 'ration';
  }
}