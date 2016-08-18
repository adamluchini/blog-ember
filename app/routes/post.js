import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
    ,
    commentSave3(commentParams) {
      var newComment = this.store.createRecord('comment', commentParams);

      newComment.save();
      this.transitionTo('index');
    },
    commentSave5(newComment){
      var newerComment = this.store.createRecord('comment', newComment);
      newerComment.save();
      this.transitionTo('index');
    }
  }
});
