The **Gallery** is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Gallery** widget to your page. The simplest configuration of the widget requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource) and [height](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#height) to be specified.

    <!--HTML--><div id="galleryContainer"></div>

<!---->

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person4.png"
            ],
            height: 300
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Gallery - Switch Between Images](/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/)
- [Gallery - Set the Initial Image](/Documentation/Guide/Widgets/Gallery/Set_the_Initial_Image/)
- [Gallery - Enable the Slideshow](/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/)
- [Gallery - Animate the Image Change](/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/)
- [Gallery - Transform and Combine Images](/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/)
- [Gallery - Customize Item Appearance](/Documentation/Guide/Widgets/Gallery/Customize_Item_Appearance/)
- [Gallery Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, overview