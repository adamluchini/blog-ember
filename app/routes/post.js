import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      comments: this.store.findAll('comment')
    });
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
    },

    commentSave3(commentParams) {
    var newComment =  this.store.createRecord('comment', commentParams);
    console.log(commentParams);
    console.log(commentParams.commentPost);

    newComment.save();

      this.transitionTo('post');
    }
  }
});
