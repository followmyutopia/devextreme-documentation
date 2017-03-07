<article data-show="/Content/Applications/16_2/LearningCenter/Data-BoundApplication/step3-1/index.html">
  
Use [dxAction](/Documentation/ApiReference/SPA_Framework/Markup_Components/#dxAction) binding to navigate to a view by clicking a list item. **dxAction** binding allows you to add the **click** handler to an HTML element.

- Use **dxAction** binding in the "Categories" view to navigate from the this view to the "Products" view when clicking a list item. Assign a string that specifies the URI to navigate to.

        <!--HTML-->
        <div data-options="dxTemplate : { name: 'item' }" data-bind="dxAction: '#products/1'">
            <div data-bind="text: name"></div>
        </div>

    Here, the URI navigates to the "Products" view and passes the <b>id</b> of the selected category as the second parameter.

- The string that is assigned to the **dxAction** binding must conform to the routing format declared for the application. Open your *index.js* file and ensure that the default routing format is ":view/:id".

        <!--JavaScript-->Application1.app.router.register(":view/:id", { view: startupView, id: undefined });

- Use **dxAction** binding in the "Products" view to navigate from the "Products" view to the "ProductDetails" view when clicking a list item. Use the same technique that you used for navigating from the "Categories" view to the "Products" view.

        <!--HTML-->
        <div data-options="dxTemplate : { name: 'item' }" data-bind="dxAction: '#product_details/1'">
            <div data-bind="text: name"></div>
        </div>

</article>