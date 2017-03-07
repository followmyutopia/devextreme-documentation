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
        ],
        commandMapping: {
            "ios-header-toolbar": {
                commands: [
                    { id: "search", location: 'after', showText: false }
                ]
            },
            "android-simple-toolbar": {
                commands: [
                    { id: "search", location: 'after', showText: false }
                ]
            },
            "tizen-footer-toolbar": {
                commands: [
                      { id: "search", location: 'center', showText: false }
                ]
            },
            "generic-header-toolbar": {
                commands: [
                    { id: "search", location: 'after', showText: false }
                ]
            },
            "win8-phone-appbar": {
                commands: [
                    { id: "search", location: 'center', showText: true }
                ]
            }
        }
    });
    MyApp.app.router.register(":view/:id", { view: "categories", id: undefined });
    MyApp.app.navigate();   
});