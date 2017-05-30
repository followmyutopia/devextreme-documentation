<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a marker to the map.
<!--/shortDescription-->

<!--paramName1-->markerOptions<!--/paramName1-->
<!--paramType1-->object|array<!--/paramType1-->
<!--paramDescription1-->
A marker object and an array of marker objects.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery Deferred object which is resolved with an original marker instance when the marker is added.
<!--/returnDescription-->

<!--fullDescription-->
The marker object should include the following fields.

- **location** (required) - the marker location. You can specify the location in one of the following formats:
  - { lat: 40.749825, lng: -73.987963};
  - "40.749825, -73.987963";
  - [40.749825, -73.987963];
  - 'Brooklyn Bridge,New York,NY';
- **tooltip** (optional) - the marker tooltip;
- **onClick** (optional) - a callback function performed when the marker is clicked;
- **text** (optional) - the marker caption.
- **iconSrc** (optional) - a URL pointing to the custom icon to be used for the marker.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
<!--/fullDescription-->