WidgetDemo.Index = function (params) {

    var viewModel = {
        users: WidgetDemo.db.users.toDataSource()
    };

    return viewModel;
};