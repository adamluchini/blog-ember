import Ember from 'ember';

export default Ember.Component.extend({
  newPostForm: false,
  actions: {
    newPostFormShow() {
    this.set('newPostForm', true);
  },
  save1() {
    var params = {
      title: this.get('title'),
      body: this.get('body'),
      image: this.get('image'),
    };
    this.set('newPostForm', false);
    this.sendAction('save2', params);
    }
  }
});
