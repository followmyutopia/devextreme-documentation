By default, the **Gallery** widget displays one image at a time. To fit more images into a single **Gallery** view, specify the [initialItemWidth](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#initialItemWidth) option. In this case, the widget shows as many images scaled down to the **initialItemWidth** as it can display without cropping them.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person4.png"
            ],
            height: 300,
            width: 600,
            initialItemWidth: 250
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [width]="600"
        [initialItemWidth]="250">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person4.png"
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

When distributing images along the total width, the **Gallery** may add margins between them. To eliminate them, assign **true** to the [stretchImages](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#stretchImages) option.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png"
            ],
            height: 200,
            width: 320,
            initialItemWidth: 120,
            stretchImages: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="200"
        [width]="320"
        [initialItemWidth]="120"
        [stretchImages]="true">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person4.png"
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

[note]The width of an image when it is displayed in the **Gallery** cannot exceed its actual width. 

The **Gallery** widget allows you to display not only the current image, but also parts of the previous and the next ones. To enable this feature, assign **true** to the [wrapAround](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#wrapAround) option. Note that in this case, the width of images will be less than the specified **initialItemWidth**.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png"
            ],
            height: 200,
            width: 320,
            initialItemWidth: 200,
            wrapAround: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="200"
        [width]="320"
        [initialItemWidth]="200"
        [wrapAround]="true">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person3.png",
            "https://js.devexpress.com/Content/images/doc/19_1/PhoneJS/person4.png"
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
- [Gallery - Customize Item Appearance](/Documentation/Guide/Widgets/Gallery/Customize_Item_Appearance/)
- [Gallery Demos](/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, item width, show several images, stretch image