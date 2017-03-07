window.MyApp = {};

$(function() {
    demoApplication = MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        animationSet: DevExpress.framework.html.animationSets['default'],
        layoutSet: DevExpress.framework.html.layoutSets['navbar'],
        navigation: [
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    });
    MyApp.app.router.register(":view/:id", { view: "about", id: undefined });
    MyApp.app.navigate();   
});