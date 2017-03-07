<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the function called when the Store causes an error.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option takes on the JavaScript **Error** object as a parameter.

    <!--JavaScript-->
    var storeConfig = {
        errorHandler: function(error) {
            console.log(error.message);
        }
    };
<!--/fullDescription-->