//Views

//Main

App.Views.App = Backbone.View.extend({
    initialize: function () {

        new App.Views.Test();
        //var addTask = new App.Views.AddTask({collection: App.tasks});
        //var allTaskView = new App.Views.Tasks({ collection: App.tasks }).render();
        //$('#allTasks').append(allTaskView.el);
    }
});

var task = new App.Collections.Tasks();

App.Views.Test = Backbone.View.extend({
    el: '#addTask',

    events: {
        'submit': 'test'
    },
    test: function (e) {
        e.preventDefault();
        console.log(task.models);
        this.f0(this.f1, this.f2);

    },
    f0: function (f, callback) {
        f();
        callback();
    },
    f1: function () {
        console.log('s1');
        console.log(task.models);

        task.fetch({
            success: function(){
                console.log('done')
                console.log(task.models)

            }
        });


        var sum;
        for (var i = 0; i < 1000000; i++) {
            sum += i
        }

        console.log('f1');
        console.log(task.models);
    },
    f2: function () {
        console.log('s2')
        console.log(task.models);
        console.log('f2')
        console.log(task.models);
    }

})


//Add task view

App.Views.AddTask = Backbone.View.extend({

    initialize: function () {
        this.title = $('#title');
        this.when = $('#when');
        this.description = $('#description');
    },

    el: '#addTask',

    events: {
        'submit': 'addTask'
    },

    addTask: function (e) {
        e.preventDefault();

        var newTask = this.collection.create({
            title: this.$('#title').val(),
            when: this.$('#when').val(),
            description: this.$('#description').val()
        }, {wait: true});

        this.clearForm();

    },
    clearForm: function () {
        this.title.val('');
        this.when.val('');
        this.description.val('');
    }
});

/*
 |---------------------------------------------------
 |  All Tasks View
 |---------------------------------------------------
 */
App.Views.Tasks = Backbone.View.extend({

    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },

    tagName: 'tbody',

    render: function () {
        this.collection.each(this.addOne, this);

        return this;
    },

    addOne: function (task) {
        var taskView = new App.Views.Task({ model: task });
        console.log(taskView.render().el);
        this.$el.append(taskView.render().el);
    }
});

/*
 |---------------------------------------------------
 | Single Task View
 |---------------------------------------------------
 */

App.Views.Task = Backbone.View.extend({
    tagName: 'tr',

    template: App.template('taskTemplate'),

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});