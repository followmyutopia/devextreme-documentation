

window.TipCalculator = window.TipCalculator || {};

$(function() {
    document.addEventListener("deviceready", function() { navigator.splashscreen.hide(); });

    TipCalculator.app = new DevExpress.framework.html.HtmlApplication({
        namespace: TipCalculator,
        navigationType: 'empty'
    });

    TipCalculator.app.router.register(":view", { view: "home" });
    TipCalculator.app.navigate();   
});

Globalize.culture(navigator.language || navigator.browserLanguage);
//Globalize.culture("fr");