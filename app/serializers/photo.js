import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {

      for (var i=0; i < payload.length; i++) {
        payload[i].thumbUrl = payload[i].urls.thumb;
        payload[i].regularUrl = payload[i].urls.regular;
      }

      // Return the payload, run the super - bubble up the chain
      return this._super(store, primaryModelClass, payload, id, requestType);
    },

  normalizeSingleResponse(store, type, payload) {
   return {
     data: {
       id: payload.id,
       type: type.modelName,
       attributes: {
         width: payload.width,
         height: payload.height,
         likes: payload.likes,
         thumbUrl: payload.urls.thumb,
         regularUrl: payload.urls.regular,
       }
     }
   };
 }

});
