A **Toolbar** item may be plain text or a widget. Text items should have the [text](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#text) field specified.

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                text: 'Delete',
                location: 'before'
            }, {
                text: 'Products',
                location: 'center'
            }, {
                text: 'Add',
                location: 'after'
            }]
        });
    });

Items that contain a widget should have the [widget](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#widget) field specified. In addition, you need to declare the [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options) object that will configure the widget. For a full list of fields this object has, refer to the API reference of the widget.

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back',
                    onClick: function () {
                        // ...
                    }
                },
                location: 'before'
            }, {
                widget: 'dxSelectBox',
                options: {
                    width: 140,
                    items: ['All', 'Family', 'Favorites'],
                    onItemClick: function (e) {
                        // ...
                    }
                },
                location: 'after'
            },
            // . . .  
            ]
        });
    });

#####See Also#####
- [Toolbar - Specify Item Location](/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location)
- [Toolbar - Customize Item Appearance](/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance)
- [Toolbar Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-toolbar-overview)
- [Toolbar API Reference](/Documentation/ApiReference/UI_Widgets/dxToolbar/)

[tags]toolbar, type, item type, widget item
