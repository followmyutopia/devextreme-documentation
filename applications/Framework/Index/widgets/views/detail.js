WidgetDemo.detail = function (params) {
    var viewModel = {
        name: ko.observable(),
        phone: ko.observable(),
        address: ko.observable(),
        birthday: ko.observable(),
        active: ko.observable(),
        state: ko.observable(),
        actionsheet: {
            showActionSheet: function() {
                var actionSheet = $("#action_sheet").data("dxActionSheet");
                actionSheet.show();
            },
            items: [
                {
                    text: "Delete",
                    click: function() { },
                    type: "danger"
                }
            ]
        }
    };
    WidgetDemo.db.users.load({
        filter: ["id", "=", params.id]
    }).done(function(response) {
        var user = response[0];
        viewModel.name(user.name);
        viewModel.phone(user.phone);
        viewModel.address(user.address);
        viewModel.birthday(new Date(user.birthday));
        viewModel.active(user.active);
        viewModel.state(user.state);
    });
    return viewModel;
};