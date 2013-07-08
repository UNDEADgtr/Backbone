//var Person = Backbone.Model.extend({
//    defaults: {
//        name: 'Dima',
//        age: 23,
//        job: 'web developer'
//    },
//    validate: function (attrs) {
//
//        if (attrs.age <= 0) {
//            return 'Возраст должен быть положительным!';
//        }
//
//    },
//    walk: function () {
//        return this.get('name') + ' is walking.';
//    }
//});
//
//var PeopleCollection = Backbone.Collection.extend({
//    model: Person
//});
//
//var PersonView = Backbone.View.extend({
//
//    initialize: function() {
//        //console.log(this.model)
//    },
//    //template: _.template('<strong><%= name %></strong> ( <%= age %> ) - <%= job %>'),
//    //template: _.template( $('#person-id').html() ),
//    template: template('person-id'),
//
//    tagName: 'li',
//    className: 'person',
//
//    render: function() {
//        //this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job') );
//        this.$el.html(this.template(this.model.toJSON()));
//        return this;
//    }
//});
//
////Вид списка людей
//var PeopleView = Backbone.View.extend({
//    tagName: 'ul',
//
//    initialize: function() {
//    },
//
//    render: function() {
//        this.collection.each(function(person) {
//            var personView = new PersonView({model: person});
//            this.$el.append(personView.render().el);
//        }, this);
//
//        return this;
//    }
//
//});
//
//var person = new Person;
////var personView = new PersonView({ model: person });
////
////
//var person2 = new Person({name: 'Петр', age: 'Менеджер'});
////var personView2 = new PersonView({model: person2});
////
//var peopleCollection = new PeopleCollection();
//
//peopleCollection.add(person);
//peopleCollection.add(person2);
//
//var peopleView = new PeopleView({collection: peopleCollection});
//
//$('#content').text(peopleView.render().el);
