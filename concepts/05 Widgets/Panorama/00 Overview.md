The **Panorama** widget is a full-screen widget that allows you to arrange items on a long horizontal canvas split into several views. Each view contains several items, and an end user navigates the views with the swipe gesture. The **Panorama** is often used as a navigation map on the first page of an application. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-panorama-overview/ios7" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

Most primitive **Panorama** needs an collection of [items](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#items)
and a [title](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#title). In addition, you can specify a [backgroundImage](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/). For example, the following code adds a simple **Panorama** to your page.

    <!--HTML-->
    <div id="panoramaContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#panoramaContainer").dxPanorama({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal"
            }, {
                title: "Seafood",
                text: "Seafood: ocean and sea"
            },
            // . . .
            ],
            title: "Online Menu",
            backgroundImage: {
                url: '/here/goes/your/image.png',
                height: 600,
                width: 800
            }
        });
    });

    <!--CSS-->
    #panoramaContainer {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

Note that all data source items follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxPanorama/Default_Item_Template/) pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Panorama - Customize Item Appearance](/Documentation/Guide/Widgets/Panorama/Customize_Item_Appearance)
- [Panorama API Reference](/Documentation/ApiReference/UI_Widgets/dxPanorama/)

[tags]panorama, collection container, collection widget, navigation, overview