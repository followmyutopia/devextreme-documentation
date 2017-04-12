The **Gallery** widget supports the display of images in a slideshow. To specify the time span that the widget must wait before moving on to the next image, assign a positive number to the [slideshowDelay](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#slideshowDelay) option. This number specifies the time span in milliseconds. If it is zero, slideshow is disabled.

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person3.png"
            ],
            height: 300,
            slideshowDelay: 1500
        });
    });

#####See Also#####
- [Gallery - Switch Between Images](/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/)
- [Gallery - Animate the Image Change](/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/)
- [Gallery - Transform and Combine Images](/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/)
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, loop, slideshow, slideshowDelay