import Ember from 'ember';

export default Ember.Component.extend({
  newCommentForm: false,
  actions: {
    newCommentFormShow() {
      this.set('newCommentForm', true);
    },
    commentSave1() {
      var commentParams = {
        name: this.get('name'),
        commentPost: this.get('commentPost')
      };
      this.set('newCommentForm', false);
      this.sendAction('commentSave2', commentParams);
    }
  }
});
