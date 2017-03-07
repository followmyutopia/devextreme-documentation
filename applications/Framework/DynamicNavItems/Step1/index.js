(function() {
    "use strict";
    var MyApp = window.MyApp = { };
    $(function () {
        //highlight
        function logout() { }
        //highlight

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
            //highlight
            navigation: [
                {
                    title: "Login",
                    onExecute: "#login",
                    icon: "key",
                    visible: ko.observable(true)
                },
                {
                    title: "About",
                    onExecute: "#about",
                    icon: "info",
                    visible: ko.observable(true)
                },
                {
                    title: "Home",
                    onExecute: "#home",
                    icon: "home",
                    visible: ko.observable(false)
                },
                {
                    title: "Logout",
                    onExecute: logout,
                    icon: "runner",
                    visible: ko.observable(false)
                }
            ]
            //highlight
        });     
        MyApp.app.router.register(":view", { view: "home" });
        //highlight
        MyApp.app.navigate('login');
        //highlight
    });    
})();