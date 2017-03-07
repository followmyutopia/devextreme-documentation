window.MyApp = {};

$(function() {
    demoApplication = MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        
        navigationType: "navbar",
        navigation: [
          {
              title: "Product Details",
              onExecute: "#product-details",
              icon: "product"
          }
        ]
    });
    MyApp.app.router.register(":view", { view: "product-details" });
    MyApp.app.navigate();   
});