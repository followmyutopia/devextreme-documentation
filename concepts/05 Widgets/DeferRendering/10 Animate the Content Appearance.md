To animate the content when it appears on the page, specify the [animation](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation) option. You can assign one of the [predefined animations](/Documentation/ApiReference/Common/utils/animationPresets/) or an [object configuring custom animation](/Documentation/ApiReference/Common/Object_Structures/animationConfig/) to this option.

    <!--HTML--><div data-options="dxView: { name: 'Products', title: 'Products' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }" data-bind="dxDeferRendering: {
            showLoadIndicator: true,
            renderWhen: isReady,
            animation: 'slide'
        }">
            <!-- Widget content -->
        </div>
    </div>

In most cases, elements appear on the page as a single whole, but if you have a collection of similar elements, they can appear one after another in a uniform fashion. This is called "staggering animation". For example, if the **DeferRendering** contains the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget, you can animate each item of the **List** using the following configuration.

    <!--HTML--><div data-options="dxView: { name: 'Products', title: 'Products' }">
        <div data-options="dxContent: { targetPlaceholder: 'content' }" data-bind="dxDeferRendering: {
            showLoadIndicator: true,
            renderWhen: isReady,
            animation: 'stagger-3d-drop',
            staggerItemSelector: '.dx-list-item'
        }">
            <div data-bind="dxList: {
                ...
            }">
            </div>
        </div>
    </div>

Here, the `.dx-list-item` is a [selector](https://api.jquery.com/category/selectors/) pointing to each **List** item. Note also that the **animation** option accepts one of the [predefined animations](/Documentation/ApiReference/Common/utils/animationPresets/). All predefined staggering animations have a `stagger-` prefix in their names.

#####See Also#####
- [SPA Framework - Animation](/Documentation/17_2/Guide/SPA_Framework/Animation/)
- [DeferRendering - Indicate the Loading State](/Documentation/Guide/Widgets/DeferRendering/Indicate_the_Loading_State/)
- [DeferRendering API Reference](/Documentation/ApiReference/UI_Widgets/dxDeferRendering/)

[tags]deferRendering, defer rendering, animation, staggered animation, predefined animations