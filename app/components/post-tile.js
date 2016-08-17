import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      this.sendAction('destroyPost', post);
    }
  }
});
