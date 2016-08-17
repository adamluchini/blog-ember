import Ember from 'ember'
export default Ember.Route.extend({
  model(){
    var posts = this.store.findAll('post');
    return posts;
  },
  actions: {
    save3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    update(post, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destoryPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
