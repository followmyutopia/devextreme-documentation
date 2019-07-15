<!--id-->dxValidationGroup<!--/id-->
===========================================================================
<!--module-->ui/validation_group<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->DOMComponent<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ValidationGroup** is a widget that allows you to validate several editors simultaneously.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Validation/Overview/jQuery/Light/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Common/UI_Widgets/Data_Validation/"
}

You can use the [DevExpress.validationEngine.validateGroup(group)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#validateGroupgroup) method to validate a particular validation group by passing its instance as a parameter.

    <!--JavaScript-->DevExpress.validationEngine.validateGroup($("#sampleGroup").dxValidationGroup("instance"));

In addition, you can access a validation group's configuration using the [DevExpress.validationEngine.getGroupConfig(group)](/Documentation/ApiReference/Common/Utils/validationEngine/Methods/#getGroupConfiggroup) method. The returned configuration exposes the **validators** included to the group, the **validate()** method to validate the editors that are associated with the validators and the **validated** event that occurs after the group is validated.

[note]Nested validation groups are not supported.

#####See Also#####
- [ASP.NET MVC Controls - Client-Side Data Validation](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/)
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->