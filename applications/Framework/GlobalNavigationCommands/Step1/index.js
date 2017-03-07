(function() {    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            //highlight
            layoutSet: DevExpress.framework.html.layoutSets['simple'],
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
        //highlight
        MyApp.app.router.register(":view", { view: "navigation" });
        MyApp.app.navigate();
        //highlight
    });    
})();