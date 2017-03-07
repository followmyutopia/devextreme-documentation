<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->

<!--shortDescription-->
This section describes configuration options used to configure the data source.
<!--/shortDescription-->

<!--fullDescription-->
[note]To create a **DataSource** instance that uses custom data access logic, pass the [CustomStore configuration object](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/) to the **DataSource** constructor. As an example, consider the following synthetic implementation, which generates a read-only infinite list.

    <!--JavaScript-->
    var infiniteListSource = new DevExpress.data.DataSource({
        load: function(loadOptions) {
            var result = [ ];
            for(var i = 0; i < loadOptions.take; i++)
                result.push({ id: 1 + loadOptions.skip + i });
            return result;
        },
        byKey: function(key) {
            return { id: key };
        }
    });
<!--/fullDescription-->