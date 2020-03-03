import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('question', {
  default: {
    user: FactoryGuy.belongsTo('user'),
    title: 'Why xyz?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: 'test,factory object,not real',
    views: 1213,
    slug: 'why-xyz'
  }
});
