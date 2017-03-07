By default, the **ContextMenu** appears when a user right-clicks the [target element](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#target). This action corresponds to the [dxcontextmenu](/Documentation/ApiReference/UI_Widgets/UI_Events/#dxcontextmenu) event. If you need the **ContextMenu** to appear when another event is raised, assign the event's name to the [showEvent](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/showEvent/) option. This option can accept several events at once as well as an object.

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            showEvent: "dxcontextmenu dblclick"
        });
    });

The **ContextMenu** is closed when a user clicks anywhere outside it. You can redefine this behavior or turn it off completely using the [closeOnOutsideClick](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#closeOnOutsideClick) option. For example, the **ContextMenu** in the following code will not be closed until its own target element is clicked.

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            closeOnOutsideClick: function(e){
                return e.target === $("#someElement").get()[0];
            }
        });
    });