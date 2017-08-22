By default, the change of the image is animated. You can specify how long the animation is using the [animationDuration](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationDuration) option. The lower its value, the faster the animation. In case you need to disable animation completely, set the [animationEnabled](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationEnabled) option to **false**.

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person3.png"
            ],
            height: 300,
            loop: true,
            animationDuration: 100
        });
    });

#####See Also#####
- [Gallery - Enable the Slideshow](/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/)
- [Gallery - Switch Between Images](/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/)
- [Gallery - Transform and Combine Images](/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/)
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, animate, animation duration, disable animation