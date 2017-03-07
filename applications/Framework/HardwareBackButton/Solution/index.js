(function () {

    var MyApp = window.MyApp = {};

    $(function () {

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['simple']
        });
        //highlight
        function onNavigatingBack(e) {
            alert("isHardwareButton=" + (e.isHardwareButton ? "true" : "false"));
        };
        //highlight
        MyApp.app.router.register(":view", { view: "home" });
        //highlight
        MyApp.app.on("navigatingBack", onNavigatingBack);
        //highlight
        MyApp.app.navigate();
    });    
})();