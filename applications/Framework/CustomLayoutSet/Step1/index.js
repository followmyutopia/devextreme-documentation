(function() {
    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            //highlight
            layoutSet: [
                { platform: "android", controller: new DevExpress.framework.html.NavBarController() },
                { controller: new DevExpress.framework.html.SlideOutController() },
            ],
            //highlight
            navigation: [
              {
                title: "Home",
                onExecute: "#home",
                icon: "home"
              },
              {
                title: "About",
                onExecute: "#about",
                icon: "info"
              }
            ]
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });    
})();