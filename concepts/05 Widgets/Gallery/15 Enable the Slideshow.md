The **Gallery** widget supports the display of images in a slideshow. To specify the time span that the widget must wait before moving on to the next image, assign a positive number to the [slideshowDelay](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#slideshowDelay) option. This number specifies the time span in milliseconds. If it is zero, slideshow is disabled.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person3.png"
            ],
            height: 300,
            slideshowDelay: 1500
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [slideshowDelay]="1500">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person3.png"
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxGalleryModule
        ],
        // ...
    })

---

#####See Also#####
- [Gallery - Switch Between Images](/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/)
- [Gallery - Animate the Image Change](/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/)
- [Gallery - Transform and Combine Images](/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/)
- [Gallery Demos](/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, loop, slideshow, slideshowDelay