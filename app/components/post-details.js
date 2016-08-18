import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('comment');
  },

  actions: {
    delete(post) {
      this.sendAction('destroyPost', post);
    }
  }
});
