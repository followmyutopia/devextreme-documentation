window.Application4 = window.Application4 || {};

$(function() {    
    demoApplication = Application4.app = new DevExpress.framework.html.HtmlApplication({
        ns: Application4,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: Application4.config.defaultLayout,
        navigation: Application4.config.navigation
    });
    Application4.app.router.register(":view/:id", { view: "Index", id: undefined });
});
