Open the *home.dxview* file. In the View Designer, you can write HTML code and see the results in a simulator.

<article  data-show="/Content/Applications/17_2/LearningCenter/HelloFantasticWorld/HelloFantasticWorld2.html">
  
####Add Custom Markup####

- Remove the default view content, leaving the **div** element with the **data-options** attribute set to [dxView](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/) and the **div** element with the **data-options** attribute set to [dxContent](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxContent/). The first one defines a view template and the second one indicates the placeholder to which the view content must be inserted in the [layout](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Define_Layouts) applied to the view.

        <!--HTML--><div data-options="dxView : { name: 'home', title: 'Home' } " >
            <div class="home-view" data-options="dxContent : { targetPlaceholder: 'content' } " >    
            </div>
        </div>
    
    Note that the name given to the view using the **name** configuration option of the dxView component is important. The specified name will be used to identify the view.
    
- Add the **h1** element and write "Welcome" in it. 

        <!--HTML--><div data-options="dxView : { name: 'home', title: 'Home' } " >
            <div class="home-view" data-options="dxContent : { targetPlaceholder: 'content' } " >
                <h1>Welcome!</h1>
            </div>
        </div> 
  
- Click the simulator to update its content. The new view content will be displayed in the simulator.
 
    ![Home View in the Designer](Content/images/doc/17_2/DevExtreme/ViewDesigner_HomeView.png)

</article>
<article  data-show="/Content/Applications/17_2/LearningCenter/HelloFantasticWorld/HelloFantasticWorld3.html">
####Bind the View to the ViewModel####

Open the *home.js* file. A JavaScript function has already been implemented. This function is associated with the "home" view because it has the same name as the view's HTML template. The object returned by this function is a ViewModel object. Do the following to bind a view element to the ViewModel field.

- Add the **message** field to the ViewModel object. Set this field to "Welcome!"

        <!--JavaScript-->Application1.home = function () {
            var viewModel = {
                message: 'Welcome!'
            };
            return viewModel;
        };

- In the view's HTML template, replace the simple "Welcome!" string with the **h1** element bound to the **message** field of the ViewModel via the [text](http://knockoutjs.com/documentation/text-binding.html) [Knockout](http://knockoutjs.com/) binding.  

        <!--HTML--><div data-options="dxView : { name: 'home', title: 'Home'} " >
            <div class="home-view" data-options="dxContent : { targetPlaceholder: 'content' } " >
                <h1 data-bind="text: message"></h1>
            </div>
        </div>

- Run the application to check that the **message** field value is displayed on the "home" view.

</article>
<article  data-show="/Content/Applications/17_2/LearningCenter/HelloFantasticWorld/HelloFantasticWorld4.html">
####Update a ViewModel Field Dynamically####

Do the following to add a text box to the "home" view and concatenate the "Welcome!" text with the entered text at runtime.

- In the *home.js* file, make the ViewModel's **message** field [observable](http://knockoutjs.com/documentation/observables.html).
- In the *home.js* file, add an observable **name** field to the ViewModel.

- Open the *home.dxview* file in the View Designer. In the **DevExpress Mobile Widgets** section of the Toolbox, find the [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widget and drag and drop it to the simulator. Bind the text box's [value](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#value) configuration option to the **name** field of the ViewModel.

- Add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the view in the same way you added the **TextBox** widget. Assign the **sayHello** ViewModel field to the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) configuration option of the button. In the *home.js* file, add the **sayHello** field to the ViewModel and assign a function to it. In this function, update the value of the ViewModel's **message** field when the **name** field is changed.
  
<!---->
 
    <!--HTML--><div data-options="dxView: {name: 'home', title: 'Home'}">
        <div class="home-view" data-options="dxContent : { targetPlaceholder: 'content' } " >
            <h1 data-bind="text: message"></h1>
            Enter your name: <div data-bind="dxTextBox: { value: name }" style="width: 200px"></div>
            <div data-bind="dxButton: { text: 'Say Hello', onClick: sayHello }"></div>
        </div>
    </div>

<!---->
  
    <!--JavaScript-->Application1.home = function () {
        var viewModel = {
            message: ko.observable('Welcome!'),
            name: ko.observable(''),
            sayHello: function () {
                this.message("Hello " + this.name() + '!');
            }
        };
        return viewModel;
    };

As you can see in the code above, we used the **TextBox** and **Button** widgets from the DevExtreme [widget library](/Documentation/ApiReference/UI_Widgets/). These widgets are supplied with styles for each platform so that your application looks native on any platform. These styles are collected in platform-specific CSS files that are already linked in the **index.html** file. 

</article>