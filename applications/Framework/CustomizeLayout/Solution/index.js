(function() {
    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['slideout'],
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
            ],
            commandMapping: {
                "custom-footer-toolbar": {
                    commands: [
                        { id: "remove", icon: "remove", location: "before" },
                        { id: "edit", icon: "edit", location: "center" },
                        { id: "find", icon: "find", location: "after" },
                        { id: "close", location: "before" },
                        { id: "save", location: "center" },
                    ]
                }
            }
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });    
})();