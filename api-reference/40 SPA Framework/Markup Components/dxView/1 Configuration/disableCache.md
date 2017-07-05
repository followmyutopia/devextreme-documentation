<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Indicates whether to cache the view.
<!--/shortDescription-->

<!--fullDescription-->
By default, this option is not specified, which means that [caching](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache) of this view is enabled. In this instance, the first time the view is displayed - it is cached. Each following time when this view must be displayed repeatedly, it is obtained from the cache. This allows the application to not have to create this view each time it is displayed. For details on the process of the view display, refer to the [View Life Cycle](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.

To disable view caching, set this option to **true**. In this mode, this view will be created and rendered each time it is displayed.

To disable caching totally for all application views, set the application's [disableViewCache](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#disableViewCache) configuration option to **true**.

To see an example, refer to the [Disable View Caching](/Documentation/Tutorial/SPA_Framework/Disable_View_Caching/#Disable_View_Caching) tutorial.
<!--/fullDescription-->