To make an application 'live' and attractive, different animations should be applied to different elements in the application. For instance, when you navigate from a view to another view in a mobile application, the content of the new view replaces the content of the old view with a certain animation. The header in a view can be animated differently from the rest of the content on both views. All these animations should be registered as [animation presets](/Documentation/Guide/SPA_Framework/Animation/#Animation_Presets) and collected to the application's [animationSet](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#animationSet). The framework comes with [ready-to-use animation sets](/Documentation/Guide/SPA_Framework/Animation/#Predefined_Animation_Presets). In the application template, the 'default' animation set is used.

    <!--JavaScript-->window.MyApp = {};
    MyApp.$(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,        
            animationSet: DevExpress.framework.html.animationSets['default'],
			//...
        });
    });

The animations that a predefined animation set includes are used by the [predefined layouts](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) to animate transitions between views. In addition, animations from this set can be used to animate list and detail views specifically. For details, refer to the [Animation](/Documentation/Guide/SPA_Framework/Animation/) article.

