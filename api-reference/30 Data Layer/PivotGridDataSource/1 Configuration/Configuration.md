<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->

<!--shortDescription-->
This section describes the configuration options of the **PivotGridDataSource** object.
<!--/shortDescription-->

<!--fullDescription-->
[note]To create a **PivotGridDataSource** instance that uses custom data access logic, pass the [CustomStore configuration object](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/) to the **PivotGridDataSource** constructor as shown below. 

    <!--JavaScript-->
    var myPivotGridDataSource = new DevExpress.data.PivotGridDataSource({
        load: function(loadOptions) {
            // data loading logic
        },
        byKey: function(key) {
            // data access by key logic
        }
    });
<!--/fullDescription-->