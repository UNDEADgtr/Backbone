//

FriendList = Backbone.Collection.extend({
    initialize: function () {
        this.bind("add", function (model) {
            alert("hey");
            view.render(model);
        })
    }
});

FriendView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click #add-input': 'getFriend'
    },

    initialize: function () {
        this.friendslist = new FriendList;
        _.bindAll(this, 'render');
    },

    getFriend: function () {
        var friend_name = $('#input').val();
        this.friendslist.add({name: friend_name});
    },

    render: function (model) {
        $("#friends-list").append("<li>" + model.get("name") + "</li>");
        console.log('rendered')
    }

});

var view = new FriendView({el: 'body'});





//
//Backbone.Router.extend({
//    routes: {
//        "": "start", // Пустой hash-тэг
//        "!/": "start", // Начальная страница
//        "!/success": "success", // Блок удачи
//        "!/error": "error" // Блок ошибки
//    },
//
//    start: function () {
//        $(".block").hide(); // Прячем все блоки
//        $("#start").show(); // Показываем нужный
//    },
//
//    success: function () {
//        $(".block").hide();
//        $("#success").show();
//    },
//
//    error: function () {
//        $(".block").hide();
//        $("#error").show();
//    }
//});
//
//var controller = new Controller(); // Создаём контроллер
//
//var Start = Backbone.View.extend({
//    el: $("#start"), // DOM элемент widget'а
//    events: {
//        "click input:button": "check" // Обработчик клика на кнопке "Проверить"
//    },
//    check: function () {
//        if (this.el.find("input:text").val() == "test") // Проверка текста
//            controller.navigate("success", true); // переход на страницу success
//        else
//            controller.navigate("error", true); // переход на страницу error
//    }
//});
//
//var start = new Start();

