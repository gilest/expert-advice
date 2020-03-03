import { click, visit } from '@ember/test-helpers';

export default {
  url: '/login',

  selectors: {
    submitButton: '.login-form__submit',
    errorMessage: '.login-form__error'
  },

  async visit() {
    return visit(this.url);
  },

  async clickSubmit() {
    return click(this.selectors.submitButton);
  }
};
