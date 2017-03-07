<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->set error bars value. For 'stdError', 'stdDeviation', 'variance' types has multiplier character<!--/d-->
===========================================================================
<!--default-->1<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the value to be used for generating error bars.
<!--/shortDescription-->

<!--fullDescription-->
Depending on the value of the **type** option, the **value** option applies as follows.

- **type**: *'percent'*		
The **value** option specifies the percentage of the series point value to be taken.

- **type**: *'stdError'*		
The **value** option multiplies the calculated standard error.

- **type**: *'stdDeviation'*		
The **value** option multiplies the calculated standard deviation.

- **type**: *'variance'*		
The **value** option multiplies the calculated variance.

- **type**: *'fixed'*		
The **value** option specifies constant error bar values.
<!--/fullDescription-->