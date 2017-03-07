<article data-show="/Content/Applications/16_2/LearningCenter/Data-BoundApplication/step2-1/index.html">

Implement an HTML template for the "ProductDetails" detail view.

- Add the "ProductDetails" view in the same manner you added the "Categories" view. The name that is specified for the view in the Add New Item dialog will be used as a name of the view's JavaScript function and the view's markup. Specify the 'product_details' name in the Add New Item dialog since this name is used in the code below for the "ProductDetails" view.

- Register the *product_details.dxview* and *product_details.js* files within the application page - the *index.html* file of the **Desktop** and **Mobile** projects.

- Open the *product_details.dxview* file. In the invoked View Designer, add the "Id" and "Name" fields to the view. To help you organize several widgets into a coherent detail view, the framework supplies a set of CSS classes called **fieldset**. To add a fieldset to the view, drag the **dxFieldset** item from the Toolbox to the view in the simulator. A **div** element decorated with the **dx-fieldset** class will be added. The fieldset contains fields - **div** elements decorated with the **dx-field** class. A field's name is represented by a **div** element decorated with the **dx-field-label** class. A field's value is represented by a **div** element decorated with the **dx-field-value** class.
 
Here is the code that you will get after modifying the template code to provide the "Id" and "Name" fields.
 
    <!--HTML--><div data-options="dxView : { name: 'product_details', title: 'Product' } " >
          <div data-options="dxContent : { targetPlaceholder: 'content' } " >
                <div class="dx-fieldset">
                      <div class="dx-field">
                            <div class="dx-field-label">Id: </div>
                            <div class="dx-field-value" data-bind="text: 1"></div>
                      </div>
                      <div class="dx-field">
                            <div class="dx-field-label">Name: </div>
                            <div class="dx-field-value" data-bind="text: 'Banana'"></div>
                      </div>
                </div>
          </div>
    </div> 
  
</article>