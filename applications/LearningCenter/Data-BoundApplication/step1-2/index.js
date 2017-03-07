﻿window.MyApp = {};

$(function() {
    demoApplication = MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        animationSet: DevExpress.framework.html.animationSets['default'],
        layoutSet: DevExpress.framework.html.layoutSets['navbar'],
        navigation: [
            {
                title: "Products",
                onExecute: "#products",
                icon: "home"
            },
            {
                title: "About",
                onExecute: "#about",
                icon: "info"
            }
        ]
    });
    MyApp.app.router.register(":view/:id", { view: "products", id: undefined });
    MyApp.app.navigate();   
});