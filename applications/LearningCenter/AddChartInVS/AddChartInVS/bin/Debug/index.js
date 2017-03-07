window.Application1 = window.Application1 || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/Themes article

    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        navigator["splashscreen"].hide();
        if (window.devextremeaddon != null) {
            window.devextremeaddon.setup();
        }
        document.addEventListener("backbutton", onBackButton, false);
    }

    function onBackButton() {
        DevExpress.processHardwareBackButton();
    }

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !Application1.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "tizen":
                window["tizen"].application.getCurrentApplication().exit();
                break;
            case "android":
                navigator["app"].exitApp();
                break;
            case "win":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        animationSet: DevExpress.framework.html.animationSets[Application1.config.animationSet],
        layoutSet: DevExpress.framework.html.layoutSets[Application1.config.layoutSet],
        navigation: Application1.config.navigation,
        commandMapping: Application1.config.commandMapping
    });
    Application1.app.router.register(":view/:id", { view: "home", id: undefined });
    Application1.app.on("navigatingBack", onNavigatingBack);
    Application1.app.navigate();
});
