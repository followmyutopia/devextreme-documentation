<article data-show="Content/Applications/16_1/UIWidgets/dxPanorama/markup.html,
        Content/Applications/16_1/UIWidgets/dxPanorama/script.js">

The [Panorama](/Documentation/ApiReference/UI_Widgets/dxPanorama/) widget is a full screen widget that allows you to locate widgets, display data and provide services by using a long horizontal canvas that extends beyond the frames of the screen. Content is divided into items that can be explored by panning and flicking. When viewing an item, you will be able to see a portion of the item next to it. This widget is often used as a navigation map on the first page of an application. Although **Panorama** was designed based on the native WindowsPhone8 Panorama widget, it can be used on any platform.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpanoramapanoramapanorama/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source)  
- [Handle item events](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events)  
- [Customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify panorama title and background**

All widget items are displayed against the same background and title. The title text is specified using the [title](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#title) option. If you want to use a background image, you should pass a configuration object containing the following properties to the [backgroundImage](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/) option.

- [height](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/#height)  
 Specifies the height of the background image.

- [width](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/#width)  
 Specifies the width of the background image.

- [url](/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/#url)  
 Specifies the url of the background image file.

<!---->

    <!--JavaScript-->
    var panoramaOptions = {
        dataSource: panoramaData,
        title: "Online restaurant",
        backgroundImage: {
            width: 500,
            height: 300,
            url: "/images/panoramaBackground.png"
        }
    }
</article>