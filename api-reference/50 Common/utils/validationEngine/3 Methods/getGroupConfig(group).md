<!--id-->validationEngine.getGroupConfig(group)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets a validation group with a specific key.
<!--/shortDescription-->

<!--paramName1-->group<!--/paramName1-->
<!--paramType1-->String|Object<!--/paramType1-->
<!--paramDescription1-->
The validation group's name or instance.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
The validation group.
<!--/returnDescription-->

<!--fullDescription-->
The object returned by the **getGroupConfig(group)** function has the following structure.

- **group**  
    The string or object passed as the parameter.
- **validators**  
    An array of **Validator** widgets that are included to the validated group.
- **validate()**   
    The method that allows you to validate the widgets included to the current group.
- **validated**  
    The event that occurs after the group is validated. You can attach/detach a handler using the **on(eventName, eventHandler)**/**off(eventName)** methods of the group.

<!---->
    
    <!--JavaScript-->
    let validationGroup = DevExpress.validationEngine.getGroupConfig('myGroup');
    // ===== or when using modules =====
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationGroup = validationEngine.getGroupConfig('myGroup');

<!--/fullDescription-->