<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_framework_html_view_engine_components">framework/html/view_engine_components</a><!--/module-->
<!--type-->object<!--/type-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A markup component used to configure transitions for content that changes in a [layout](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/).
<!--/shortDescription-->

<!--fullDescription-->
Use the dxTransition markup component to specify the type of animation shown when the contents of a [layout](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/) element are being changed.

Enclose the required part of the layout in a **dxTransition** element to apply the specified transition type to this part. In this case, when you switch between views, the contents of the enclosed part will change smoothly, according to the specified transition type.

The following example shows a layout whose "header" and "content" content placeholders are enclosed in a dxTransition element.

    <!--HTML--><div data-options="dxLayout : { name: 'myLayout' }" >
        <div data-options="dxTransition: { name: 'myTransition', animation: 'slide' }">
            <div data-options="dxContentPlaceholder : { name: 'header'} " >
                <div data-bind="dxToolbar: { items: [ { text: title, location: 'center' } ] }"> </div>
            </div>
            <div data-options="dxContentPlaceholder : { name: 'content'}">
                <div class="load-panel" data-bind="dxLoadPanel: { visible: true }"> </div>
            </div>
        </div>
        <div data-options="dxContentPlaceholder : { name: 'footer' }">
            <div data-bind="dxNavBar: { }" 
                data-options="dxCommandContainer: { id: 'footer-command-container' }">
            </div>
        </div>
    </div>
<!--/fullDescription-->