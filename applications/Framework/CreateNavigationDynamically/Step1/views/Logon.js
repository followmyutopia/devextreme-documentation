MyApp.Logon = function (params) {

    //highlight
    var users = [
        { text: 'Administrator' },
        { text: 'Guest' }
    ],
    app = MyApp.app;

    var viewModel = {
        users: users,
        selectedUser: ko.observable(users[0]),
        logon: function () {}
    };
    //highlight

    return viewModel;
};