(function() {
    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            //highlight
            layoutSet: DevExpress.framework.html.layoutSets['simple']
            //highlight
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });    
})();