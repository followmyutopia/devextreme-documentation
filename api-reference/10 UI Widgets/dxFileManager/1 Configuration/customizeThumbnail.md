===========================================================================
<!--type-->function(fileItem)<!--/type-->
===========================================================================

<!--shortDescription-->
Allows you to provide custom icons to be used as thumbnails.
<!--/shortDescription-->

<!--fullDescription-->
This function should return one of the following:

- The icon's URL
- The icon's name if the icon is from the [DevExtreme icon library](/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library)
- The icon's CSS class if the icon is from an external icon library (see [External Icon Libraries](/Documentation/Guide/Themes_and_Styles/Icons/#External_Icon_Libraries))
- The icon in the [Base64](https://en.wikipedia.org/wiki/Base64) format

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileManager/CustomThumbnails/jQuery/Light/"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->fileItem<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
File or folder parameters.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
An icon to use as a thumbnail.
<!--/typeFunctionReturnDescription-->