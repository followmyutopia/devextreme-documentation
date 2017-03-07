<article data-show="/Content/Applications/16_1/LearningCenter/Data-BoundApplication/step1-2/index.html">

Implement an HTML template for the "Products" view.

- Add the *products.dxview* and *products.js* code files in the same way you created the "Categories" view.

- Register these files within the application page - the *index.html* file of the **Desktop** and **Mobile** projects.

- Implement an HTML template for the "Products" view in the same manner as you did for the "Categories" view above.

Here is the code that you will get.

    <!--HTML--><div data-options="dxView : { name: 'products', title: 'Products' } " >
        <div data-options="dxContent : { targetPlaceholder: 'content' } " >
            <div data-bind="dxList: { items: [
                    { id: 1, name: 'Whiskey', category_id: 1 },
                    { id: 2, name: 'Cognac', category_id: 1 },
                    { id: 3, name: 'Banana', category_id: 2 },
                    { id: 4, name: 'Pineapple', category_id: 2 }
                ] }">
                <div data-options="dxTemplate : { name: 'item' } ">
                    <div data-bind="text: name" ></div>
                </div>
            </div>
        </div>
    </div>

[note]The "Products" view will not appear in the application's navigation automatically. You will implement navigation to this view from the "Categories" view below in this tutorial.
</article>