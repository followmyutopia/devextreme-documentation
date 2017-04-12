[note]In this article, the [Button](/Documentation/Guide/Widgets/Button/Overview/) widget is used to switch images. This choice is made for purely demonstrational purposes, and you can do the same operations using another widget following the same guidelines.

To switch the **Gallery** to the next or previous image, call the [nextItem(animation)](/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#nextItemanimation) or [prevItem(animation)](/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#prevItemanimation) method, respectively.

    <!--JavaScript-->
    $(function () {
        var gallery = $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person4.png"
            ],
            height: 300
        }).dxGallery("instance");

        $("#nextButton").dxButton({
            text: "Next",
            onClick: function () {
                gallery.nextItem(true);
            }
        });

        $("#prevButton").dxButton({
            text: "Previous",
            onClick: function () {
                gallery.prevItem(true);
            }
        });
    });

To navigate to a specific image, call the [goToItem(itemIndex, animation)](/Documentation/ApiReference/UI_Widgets/dxGallery/Methods/#goToItemitemIndex_animation) method. The first argument should be the index of the required image in the [dataSource](/Documentation/ApiReference/UI_Widgets/dxGallery/Configuration/#dataSource).

    <!--JavaScript-->
    $(function () {
        var gallery = $("#galleryContainer").dxGallery({
            dataSource: [
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person1.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person2.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person3.png",
                "https://js.devexpress.com/Content/images/doc/17_1/PhoneJS/person4.png"
            ],
            height: 300
        }).dxGallery("instance");

        $("#buttonContainer").dxButton({
            text: "Go to the third image",
            onClick: function () {
                gallery.goToItem(2, true);
            }
        });
    });

#####See Also#####
- [Gallery Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-gallery-overview)
- [Gallery API Reference](/Documentation/ApiReference/UI_Widgets/dxGallery/)