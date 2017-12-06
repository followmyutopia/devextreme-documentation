===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->Array<Number><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a set of subvalues to be designated by the subvalue indicators.
<!--/shortDescription-->

<!--fullDescription-->
In addition to one main value, you can indicate several extra values on a gauge. These are called *subvalues*. To specify the subvalues, assign an array with them to the **subvalues** field.

You can obtain and change the subvalues at runtime. In order to do this, use the [subvalues()]({basewidgetpath}/Methods#subvalues) and [subvalues(subvalues)]({basewidgetpath}/Methods#subvaluessubvalues) methods. Note that in that case, you need to initialize the **subvalues** option at least with an empty array.

    <!--JavaScript-->var gaugeOptions = {
        // ...
        subvalues: []    
    }

Subvalues are designated by subvalue indicators. You can customize the appearance of these indicators using the [subvalueIndicator]({basewidgetpath}/Configuration/subvalueIndicator) configuration object.
<!--/fullDescription-->