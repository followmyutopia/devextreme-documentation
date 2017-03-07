window.MyApp = {};

$(function() {
    demoApplication = MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        animationSet: DevExpress.framework.html.animationSets['default'],
        layoutSet: DevExpress.framework.html.layoutSets['navbar'],
        navigation: [
            {
                title: "Categories",
                onExecute: "#categories",
                icon: "home"
            },
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    });
    MyApp.app.router.register(":view/:id", { view: "categories", id: undefined });
    MyApp.app.navigate();   
});