===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not [view caching](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#viewCache) is disabled.
<!--/shortDescription-->

<!--fullDescription-->
By default, this option is not specified, which means that view caching is enabled. In this instance, the first time a view is displayed, it is cached. Thereafter, when the view must be displayed repeatedly, it is obtained from the cache, so that the application does not need to create a view each time it is displayed. For details on the view display process, refer to the [View Life Cycle](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) topic.

To disable view caching, set this option to **true**. In this mode, each view will be created and rendered each time it is displayed.

To disable the caching of a specific view only, set the [disableCache](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#disableCache) configuration option of the dxView component representing this view to **true**.
<!--/fullDescription-->