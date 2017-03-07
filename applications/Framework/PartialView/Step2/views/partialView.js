//highlight
MyApp.createSubscribeViewModel = function (header) {
    return {
        header: header,
        email: ko.observable(),
        subscribed: ko.observable(false),
        subscribe: function () {
            this.subscribed(true);
        }
    }
}
//highlight