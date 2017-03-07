MyApp.home = function (params) {
   
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
    //highlight
    var ensureViewTemplateFromFileLoaded = function () {
        if (!MyApp.app.getViewTemplateInfo("dynamicViewFromFile")) {
            return MyApp.app.loadTemplates("views/dynamicView.html");
        }

        return $.Deferred().resolve().promise();
    };

    var displayViewFromFile = function() {
        ensureViewTemplateFromFileLoaded().done(function() {
            MyApp.app.navigate("dynamicViewFromFile");
        });
    };

    //highlight
    var viewModel = {
        displayDynamicView: displayDynamicView,
        //highlight
        displayViewFromFile: displayViewFromFile
        //highlight
    };
    return viewModel;
};