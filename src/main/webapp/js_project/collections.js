//Collection

App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task,
    url: 'http://localhost:8080/Backbone/rest'
});