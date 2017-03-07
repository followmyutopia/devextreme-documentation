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
          },
          {
              title: "Products",
              onExecute: "#products",
              icon: "info"
          }
        ]
    });
    MyApp.app.router.register(":view", {view: "home"});
    MyApp.app.navigate();   
});