MyApp.categories = function (params) {

    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            load: function (loadOptions) {
                return $.getJSON('https://sampleservices.devexpress.com/api/Categories');
            }
        })
    };

    return viewModel;
};