(function() {
    
    var MyApp = window.MyApp = { };
    $(function () {
        //highlight
        MyApp.emptyController = new DevExpress.framework.html.EmptyLayoutController;
        //highlight

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            //highlight
            layoutSet: [
                { controller: new DevExpress.framework.html.SlideOutController },
                { customResolveRequired: true, controller: MyApp.emptyController }
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
        //highlight
        MyApp.app.on("resolveLayoutController", function(args) {
            var viewName = args.viewInfo.viewName;
            if(viewName === "about") {           
                args.layoutController = MyApp.emptyController
            }
        });
        //highlight
        MyApp.app.navigate();
    });    
})();