window.MyApp = {};

$(function() {
    demoApplication = MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        
        navigationType: "navbar",
        navigation: [
          {
            title: "Categories",
            onExecute: "#home",
            icon: "home"
          }
        ]
    });
    MyApp.app.router.register(":view", {view: "home"});
    MyApp.app.navigate();   
});