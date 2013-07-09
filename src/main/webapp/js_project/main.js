(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {},
        template: {}

    }

    window.vent = _.extend({}, Backbone.Events);

    App.template = function(id) {
        return _.template( $('#' + id).html() );
    };

}());