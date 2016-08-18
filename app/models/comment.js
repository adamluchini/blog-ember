import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  commentPost: DS.belongsTo('post', {async: true})
});
