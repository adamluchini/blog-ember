import Ember from 'ember';

export default Ember.Route.extend({
  model(commentParams){
    return this.store.findRecord('comment', commentParams.comment_id);
  }
});
