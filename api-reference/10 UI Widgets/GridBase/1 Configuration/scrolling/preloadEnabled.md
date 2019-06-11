<!--id-->GridBase.Options.scrolling.preloadEnabled<!--/id-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the widget should load pages adjacent to the current page. Applies only if **scrolling**.[mode]({basewidgetpath}/Configuration/scrolling/#mode) is *"virtual"*.
<!--/shortDescription-->

<!--fullDescription-->
In virtual scrolling mode, a page is loaded when it gets into the viewport. If you set this option to **true**, adjacent pages will be loaded as well. Note that although this setting makes scrolling smoother, it may cause lags on devices with low performance.
<!--/fullDescription-->