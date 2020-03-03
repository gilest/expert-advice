import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('user', {
  default: {
    email: FactoryGuy.generate((n) => `doctor${n}@online.de`),
    account: FactoryGuy.generate(function(n) {
      return { id: n }
    })
  }
});
