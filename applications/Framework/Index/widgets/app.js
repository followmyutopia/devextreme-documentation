window.WidgetDemo = window.WidgetDemo || {};

$(function() {
    demoApplication = WidgetDemo.app = new DevExpress.framework.html.HtmlApplication({
        ns: WidgetDemo,
        
        defaultLayout: WidgetDemo.config.defaultLayout,
        navigation: WidgetDemo.config.navigation
    });
    WidgetDemo.app.router.register(":view/:id", { view: "Index", id: undefined });
});
