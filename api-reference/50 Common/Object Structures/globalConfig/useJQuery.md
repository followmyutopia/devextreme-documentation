<!--id-->globalConfig.useJQuery<!--/id-->
===========================================================================
<!--hidden--><!--/hidden-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether DevExtreme widgets use jQuery.
<!--/shortDescription-->

<!--fullDescription-->
If jQuery scripts are linked above DevExtreme scripts, the flag's default value is **true**. If they are linked below DevExtreme scripts or not linked - **false**. You can change the flag's value manually only in the first case. In the second case, widgets do not use jQuery regardless of the flag's value.

[note]With [modules](/Documentation/Guide/Common/Modularity/), this flag is ignored, and the widgets use jQuery if the jQuery integration module is linked.
<!--/fullDescription-->