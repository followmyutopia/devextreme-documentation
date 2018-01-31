By default, the image that the **Gallery** widget displays initially is the first item of the data source. To specify another item to be initially displayed, assign its index in the [dataSource](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource) to the [selectedIndex](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#selectedIndex) option.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person3.png"
            ],
            height: 300,
            selectedIndex: 2
        });
    });

#####Angular 

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [selectedIndex]="2">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        galleryDataSource = [
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person1.png",
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person2.png",
            "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person3.png"
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

As an alternative, you can specify the initial image using its data source object. In this case, assign the object to the [selectedItem](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#selectedItem) option.

---
#####jQuery

    <!--JavaScript-->
    var galleryData = [{
        imageAlt: "Maria",
        imageSrc: "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person1.png"
    }, {
        imageAlt: "John",
        imageSrc: "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person2.png"
    }, {
        imageAlt: "Xavier",
        imageSrc: "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person3.png"
    }];

    $(function () {
        $("#galleryContainer").dxGallery({
            dataSource: galleryData,
            height: 300,
            selectedItem: galleryData[1]
        });
    });

#####Angular 

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryDataSource"
        [height]="300"
        [selectedItem]="selectedItem">
    </dx-gallery>

    <!--TypeScript-->
    import { DxGalleryModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        galleryDataSource = [{
            imageAlt: "Maria",
            imageSrc: "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person1.png"
        }, {
            imageAlt: "John",
            imageSrc: "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person2.png"
        }, {
            imageAlt: "Xavier",
            imageSrc: "https://js.devexpress.com/Content/images/doc/18_1/PhoneJS/person3.png"
        }];
        selectedItem = this.galleryDataSource[1];
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
- [Gallery - Enable the Slideshow](/Documentation/Guide/Widgets/Gallery/Enable_the_Slideshow/)
- [Gallery - Animate the Image Change](/Documentation/Guide/Widgets/Gallery/Animate_the_Image_Change/)
- [Gallery Demos](/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)

[tags]gallery, initial image, selected image, selectedIndex, selectedItem