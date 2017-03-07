﻿(function() {
    
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
            //highlight
            navigation: [
            {
                title: "Home 1",
                onExecute: "#home/1",
                icon: "home"
            },
            {
                title: "Home 2",
                onExecute: "#home/2",
                icon: "home"
            }
            ]
            //highlight
        });
        //highlight
        MyApp.app.router.register(":view/:item", { view: "home", item: 1 });
        //highlight
        MyApp.app.navigate();
    });    
})();