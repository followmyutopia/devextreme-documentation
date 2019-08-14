<!--id-->validationEngine.validateGroup(group)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Validates editors from a specific validation group.
<!--/shortDescription-->

<!--paramName1-->group<!--/paramName1-->
<!--paramType1-->String|Object<!--/paramType1-->
<!--paramDescription1-->
The validation group's name or instance.
<!--/paramDescription1-->

<!--returnType-->dxValidationGroupResult<!--/returnType-->
<!--returnDescription-->
The validation result.
<!--/returnDescription-->

<!--fullDescription-->
    <!--JavaScript-->
    let validationResult = DevExpress.validationEngine.validateGroup('myGroup');
    // ===== or when using modules =====
    import validationEngine from 'devextreme/ui/validation_engine';

    let validationResult = validationEngine.validateGroup('myGroup');

#####See Also#####
- [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Configuration/#validationRules)
<!--/fullDescription-->