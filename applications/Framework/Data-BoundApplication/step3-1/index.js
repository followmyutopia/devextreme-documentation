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
              title: "About",
              onExecute: "#about",
              icon: "info"
          }
        ]
    });
    MyApp.app.router.register(":view/:id", { view: "home", id: undefined });
    MyApp.app.navigate();   
});