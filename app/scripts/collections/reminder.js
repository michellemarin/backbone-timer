/*global BackboneTimer, Backbone*/

BackboneTimer.Collections = BackboneTimer.Collections || {};

(function () {
    'use strict';

    BackboneTimer.Collections.Reminder = Backbone.Collection.extend({

        model: BackboneTimer.Models.Reminder

    });

})();
