MyApp.home = function (params) {

    var viewModel = {
        handleCreate: function () {
            alert("Create button was pressed.");
        },
        //highlight
        handleAdd: function () {
            alert("Add button was pressed.");
        }
        //highlight
    };

    return viewModel;
};