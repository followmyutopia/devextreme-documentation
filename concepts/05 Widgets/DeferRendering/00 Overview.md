The **DeferRendering** is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the **DeferRendering** displays a loading indicator.

[note]The **DeferRendering** widget is designed for applications built using the [DevExtreme SPA Framework](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/). Bear in mind that code examples in this section are supposed to be used in the SPA Framework environment.

In the following example, the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget is populated with remote data. While this data is being loaded, the **DeferRendering** widget displays a loading indicator. Note that the **DeferRendering** requires its [renderWhen](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#renderWhen) option to be set to a Promise ([jQuery](http://api.jquery.com/Types/#Promise) or [native](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)). The content of the **DeferRendering** will be shown once this Promise is resolved.

    <!--HTML--><div data-options="dxView: { name: 'Products', title: 'Products' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }" data-bind="dxDeferRendering: {
            showLoadIndicator: true,
            renderWhen: isReady
        }">             
            <div data-bind="dxList: {
                dataSource: productList
            }"></div>
        </div>
    </div>

    <!--JavaScript-->MyApp.Products = function(params, viewInfo) {
        var isReady = $.Deferred();
        return {
            isReady: isReady.promise(),
            productList: db.Products,
            viewShown: function() {
                productList.load().done(function() {
                    isReady.resolve();
                });
            }
        };   
    };

#####See Also#####
- [SPA Framework - Views and Layouts](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/)
- [DeferRendering - Indicate the Loading State](/Documentation/Guide/Widgets/DeferRendering/Indicate_the_Loading_State/)
- [DeferRendering - Animate the Content Appearance](/Documentation/Guide/Widgets/DeferRendering/Animate_the_Content_Appearance/)
- [DeferRendering API Reference](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/)

[tags]deferRendering, defer rendering, overview