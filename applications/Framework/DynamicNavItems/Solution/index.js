(function() {
    "use strict";
    var MyApp = window.MyApp = { };
    $(function () {
        
        function logout() {
            //highlight
            var navigation = MyApp.app.navigation;

            navigation[0].option("visible", true);
            navigation[2].option("visible", false);
            navigation[3].option("visible", false);

            MyApp.app.navigate("login", { root: true });
            //highlight
        }
        

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
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
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate('login');
    });    
})();