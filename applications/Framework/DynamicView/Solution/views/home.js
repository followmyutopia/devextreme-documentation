MyApp.home = function (params) {
   
    //highlight
    var $markup = $(
            "<div data-options=\"dxView: { name: 'dynamicView', title: 'Dynamic View' } \">" +
                "<div data-options=\"dxContent: { targetPlaceholder: 'content' } \">" +
                    "This is a dynamically created view" +
                "</div>" +
            "</div");
    //highlight

    var ensureViewTemplateLoaded = function () {
        if (!MyApp.app.getViewTemplateInfo("dynamicView")) {
            //highlight
            MyApp.app.loadTemplates($markup);
            //highlight
        }
    };
    //highlight
    var displayDynamicView = function () {
        ensureViewTemplateLoaded();
        MyApp.app.navigate("dynamicView");
    }
    //highlight
    var ensureViewTemplateFromFileLoaded = function () {
        if (!MyApp.app.getViewTemplateInfo("dynamicViewFromFile")) {
            //highlight
            return MyApp.app.loadTemplates("views/dynamicView.html");
            //highlight
        }

        return $.Deferred().resolve().promise();
    };
    //highlight
    var displayViewFromFile = function() {
        ensureViewTemplateFromFileLoaded().done(function() {
            MyApp.app.navigate("dynamicViewFromFile");
        });
    };
    //highlight

    var viewModel = {
        //highlight
        displayDynamicView: displayDynamicView,
        displayViewFromFile: displayViewFromFile
        //highlight
    };
    return viewModel;
};