(function() {    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
            navigation: [
                {
                    "title": "Home",
                    "onExecute": "#home",
                    "icon": "home"
                },
                {
                    "title": "Secure",
                    "onExecute": "#SecureRoot",
                    "icon": "info"
                }
            ]
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.router.register("login/:backUri");
        //highlight
        MyApp.app.on("initialized", function () {
            MyApp.loggedIn = false;
        });

        MyApp.app.on("navigating", function (e) {
            var params = MyApp.app.router.parse(e.uri),
                viewInfo = MyApp.app.getViewTemplateInfo(params.view);
            if (viewInfo.secure && !MyApp.loggedIn) {
                e.cancel = true;
                MyApp.app.navigate({ view: "login", backUri: e.uri });
            }
        });
        //highlight

        MyApp.app.navigate();
    });    
})();