By default, the change of the image is animated. You can specify how long the animation is using the [animationDuration](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationDuration) option. The lower its value, the faster the animation. In case you need to disable animation completely, set the [animationEnabled](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#animationEnabled) option to **false**.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png"
            ],
            height: 300,
            loop: true,
            animationDuration: 100
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [loop]="true"
        [animationDuration]="100">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/19_2/PhoneJS/person3.png"
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
- [Gallery - Enable the Slideshow](/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/)
- [Gallery - Switch Between Images](/Documentation/Guide/Widgets/Gallery/Switch_Between_Images/)
- [Gallery - Transform and Combine Images](/Documentation/Guide/Widgets/Gallery/Transform_and_Combine_Images/)
- [Gallery Demos](/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, animate, animation duration, disable animation