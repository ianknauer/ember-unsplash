import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.unsplash.com',
  headers: {
       'Authorization': 'Client-ID a2e6a431b8bcb3e0c43ee4027c8a4dfc23c81369a561a521e1513c85fdc7d9b9'
   }
});
