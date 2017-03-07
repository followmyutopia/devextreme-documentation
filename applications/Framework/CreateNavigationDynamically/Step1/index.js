﻿var MyApp = window.MyApp = { };
$(function () {
    //highlight
    var layoutSet = DevExpress.framework.html.layoutSets['navbar'],
        simpleLayoutController = new DevExpress.framework.html.SimpleLayoutController();

    layoutSet.push({ controller: simpleLayoutController, customResolveRequired: true });
    //highlight

    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        animationSet: DevExpress.framework.html.animationSets['default'],
        //highlight
        layoutSet: layoutSet,
        //Navigation will be initialized on logon
        //navigation: []
        commandMapping: {
            "ios-header-toolbar": {
                commands: [
                    {
                        id: "LogOff",
                        showIcon: false,
                        align: 'right'
                    }
                ]
            },
            "android-footer-toolbar": {
                commands: [
                    {
                        id: "LogOff",
                        showIcon: false,
                        align: 'right'
                    }
                ]
            },
            "win8-phone-appbar": {
                commands: [
                    {
                        id: "LogOff"
                    }
                ]
            }
        }
        //highlight
    });

    //highlight
    MyApp.app.on("resolveLayoutController", function (args) {
        if (args.viewInfo.viewName === "Logon") {
            args.layoutController = simpleLayoutController;
        }
    });

    MyApp.logoff = function () {
        MyApp.app.navigate("Logon", { root: true });
    };
    //highlight

    MyApp.app.router.register(":view", { view: "Logon" });
    MyApp.app.navigate();
});    