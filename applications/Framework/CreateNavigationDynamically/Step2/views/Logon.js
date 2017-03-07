MyApp.Logon = function (params) {

    var users = [
        { text: 'Administrator' },
        { text: 'Guest' }
    ],
    app = MyApp.app;

    var viewModel = {
        users: users,
        selectedUser: ko.observable(users[0]),
        //highlight
        logon: function () {
            var navigation,
                startupView;

            if (this.selectedUser().text === "Administrator") {
                navigation = [
                    {
                        title: "Administrator",
                        onExecute: "#AdminView",
                        icon: "product"
                    }
                ];
                startupView = "AdminView";
            }
            else {
                navigation = [
                    {
                        title: "Guest",
                        onExecute: "#GuestView",
                        icon: "product"
                    }
                ];
                startupView = "GuestView";
            }

            navigation.push({
                title: "Shared",
                onExecute: "#SharedView",
                icon: "info"
            });

            app.createNavigation(navigation);
            app.renderNavigation();
            app.navigate(startupView, { root: true });
        }
        //highlight
    };

    return viewModel;
};