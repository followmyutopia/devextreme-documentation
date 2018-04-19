===========================================================================
<!--default-->'instantly'<!--/default-->
<!--acceptValues-->'instantly' | 'onDemand'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies when to apply changes made in the widget to the **PivotGrid**.
<!--/shortDescription-->

<!--fullDescription-->
The following modes are available: 

- *"instantly"*     
Applies changes immediately.

- *"onDemand"*      
Applies or cancels changes only when this is requested from the API - by calling the [applyChanges()](/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Methods/#applyChanges) or [cancelChanges()](/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Methods/#cancelChanges) method or by changing the [state](/Documentation/ApiReference/UI_Widgets/dxPivotGridFieldChooser/Configuration/#state) object.
<!--/fullDescription-->
