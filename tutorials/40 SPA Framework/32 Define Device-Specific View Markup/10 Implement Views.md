<article data-show="/Content/Applications/16_1/framework/DeviceSpecificView/step1/index.html" data-show-first="views/home.html">

Use a [simple application](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Prepare_a_Simple_Application) to implement device-specific views.

A view HTML template is defined using the [dxView](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/) markup component. You can have several view HTML templates that are related to the same view based on the same name specified via the **dxView**'s **name** configuration option. To denote for which device a particular view template is designed, specify extra options for the **dxView** markup component. These options should be the same names as the fields of the [device](/Documentation/ApiReference/Common/Object_Structures/device/) object, which is used for determining the current device: **platform**, **phone**, **tablet**, etc.


</article>