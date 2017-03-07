(function() {    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['simple'],
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
        //highlight
        MyApp.app.router.register(":view", { view: "navigation" });
        //highlight
        MyApp.app.navigate();
    });    
})();