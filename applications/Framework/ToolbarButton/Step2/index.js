(function() {
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['simple'],
            //highlight
            commandMapping: {
                "ios-header-toolbar": {
                    commands: [
                        {
                            id: "add",
                            location: "before"
                        }
                    ]
                },
                "android-simple-toolbar": {
                    commands: [
                        {
                            id: "add",
                            location: "before"
                        }
                    ]
                },
                "win8-phone-appbar": {
                    defaults: {
                        "showText": false,
                        "showIcon": true
                    },
                    commands: [
                        {
                            id: "add",
                            icon: "plus"
                        }
                    ]
                },
                "tizen-simple-toolbar": {
                    commands: [
                        {
                            id: "add",
                            location: "before"
                        }
                    ]
                },
                "generic-header-toolbar": {
                    commands: [
                        {
                            id: "add",
                            location: "before"
                        }
                    ]
                },
            }
            //highlight
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });    
})();