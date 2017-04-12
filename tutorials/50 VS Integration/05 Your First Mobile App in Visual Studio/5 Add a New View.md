<article data-show="/Content/Applications/17_1/LearningCenter/HelloFantasticWorld/HelloFantasticWorld5.html">
Add a new view to the **views** folder.
  
- Right-click the **views** folder in the Solution Explorer and choose **Add** | **New Item...** in the context menu, which will invoke the **Add New Item** dialog.

  ![Greeting View](Content/images/doc/17_1/DevExtreme/Tutorial_AddProductsView.png)

- In the invoked dialog, choose the **View** template, specify the name as "greeting" and click **Add**. As a result, you will get automatically generated *greeting.dxview* and *greeting.js* code files. These files will be registered within the *index.html* file automatically.

- Remove the default content from the greeting view's HTML template and add the **h1** element bound to the **message** field of the ViewModel.

Here is the code that you will get.

    <!--HTML--><div data-options="dxView : { name: 'greeting', title: 'greeting' } " >
        <div class="home-view" data-options="dxContent : { targetPlaceholder: 'content' } " >
            <h1 data-bind="text: message"></h1>
        </div>
    </div>

<!---->
  
    <!--JavaScript-->Application1.greeting = function (params) {
        var viewModel = {
            message: 'Hello!'
        };
        return viewModel;
    };

[note]The function implemented in the newly added JavaScript file must have the same name as the value of the **name** configuration option of the view's markup. Since the name given to the view in the **Add New Item** dialog is used to name the fake function in the JavaScript file, check to make sure that the **name** configuration option of the view's markup has the same name. Alternatively, you can change the function's name, but make sure it is similar to the view's name in the markup.

Run the application. The newly added view is automatically added to the application's navigation.
  
</article>