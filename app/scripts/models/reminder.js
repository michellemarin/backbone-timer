/*global BackboneTimer, Backbone*/

BackboneTimer.Models = BackboneTimer.Models || {};

(function () {
    'use strict';

    BackboneTimer.Models.Reminder = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
