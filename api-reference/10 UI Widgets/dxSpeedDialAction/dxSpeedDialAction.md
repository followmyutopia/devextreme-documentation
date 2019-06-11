<!--id-->dxSpeedDialAction<!--/id-->
<!--widgettree-->
icon: "tel",
onClick: function() {
    DevExpress.ui.notify({
        message: 'Calling...',
        width: 350
    });
}
<!--/widgettree-->
===========================================================================
<!--module-->ui/speed_dial_action<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **SpeedDialAction** is a button that performs a custom action. It can be represented by a Floating Action Button (FAB) or a button in a speed dial menu opened with the FAB.
<!--/shortDescription-->

<!--fullDescription-->
When there is only one **SpeedDialAction** on a page, it is represented by a Floating Action Button (FAB).

When there are multiple **SpeedDialAction**s, they are collected in a speed dial menu that can contain up to five actions. In this case, the FAB opens the menu. You can use the [floatingActionButtonConfig](/Documentation/ApiReference/Common/Object_Structures/globalConfig/floatingActionButtonConfig/) object to change the maximum number of actions, and the FAB's position and icons in the opened and closed states.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FloatingActionButton/Overview/jQuery/MaterialBlueLight/"
}
<!--/fullDescription-->