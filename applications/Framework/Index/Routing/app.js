window.MyApp = window.MyApp || {};

$(function() {    
    demoApplication = MyApp.app = new DevExpress.framework.html.HtmlApplication(
	{
	    ns: MyApp,
        viewPortNode: document.getElementById("viewPort"),
        "defaultLayout": "navbar",
        "navigation": [
            {
                title: "Categories",
                onExecute: "#index",
                icon: "product"
            }
        ]
    });
    MyApp.app.router.register("products/:category", { view: "showCategory" });
    MyApp.app.router.register(":view", { view: "index" });
});
