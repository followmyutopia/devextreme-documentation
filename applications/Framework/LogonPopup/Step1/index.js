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
                //highlight
                {
                    "title": "Secure",
                    "onExecute": "#SecureRoot",
                    "icon": "info"
                }
                //highlight
            ]
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });    
})();