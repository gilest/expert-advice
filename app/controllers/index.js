import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';

export default Controller.extend({
  session: service(),

  queryParams: ['page', 'filter'],
  page: 1,
  filter: '',

  initialSearchValue: '',

  actions: {
    enteredRoute() {
      this.set('initialSearchValue', this.get('filter'));
    },
    filter(enteredText) {
      debounce(() => {
        this.setProperties({
          filter: enteredText,
          page: 1
        })
      }, 100);
    }
  }
});
