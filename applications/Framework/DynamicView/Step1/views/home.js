MyApp.home = function (params) {
    //highlight
    var $markup = $(
            "<div data-options=\"dxView: { name: 'dynamicView', title: 'Dynamic View' } \">" +
                "<div data-options=\"dxContent: { targetPlaceholder: 'content' } \">" +
                    "This is a dynamically created view" +
                "</div>" +
            "</div");
        

    var ensureViewTemplateLoaded = function () {
        if (!MyApp.app.getViewTemplateInfo("dynamicView")) {
            MyApp.app.loadTemplates($markup);
        }
    };

    var displayDynamicView = function () {
        ensureViewTemplateLoaded();
        MyApp.app.navigate("dynamicView");
    }

    var viewModel = {
        displayDynamicView: displayDynamicView
    };
    //highlight
    return viewModel;
};