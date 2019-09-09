---
id: Utils.errorHandler
module: data/errors
export: errorHandler
type: function(e)
---
---
##### shortDescription
Specifies the function that is executed when a data layer object throws an error.

##### param(e): Error
A JavaScript **Error** object.

---
<!--->

    <!--JavaScript-->
    DevExpress.data.errorHandler = function (error) {
        console.log(error.message);
    };

#####See Also#####
- [Handling Errors](/Documentation/Guide/Data_Layer/Data_Layer/#Handling_Errors)