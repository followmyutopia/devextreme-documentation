<article data-show="/Content/Applications/17_1/LearningCenter/HelloFantasticWorld/HelloFantasticWorld7.html">
Pass the text entered in the "home" view to the "greeting" view and concatenate it to the "Hello" string.

- In the *index.js* file, check to make sure that the application's routing format allows you to pass a parameter. By default, the routing format has a second **id** parameter.

        <!--JavaScript-->Application1.app.router.register(":view/:id", { view: "home", id: undefined });

- In the "home" ViewModel's **greet** function, expand the parameter passed in the **navigate** function with the value of the **name** field (the value entered in the text box). This will conform to the new routing format.
- Make the **message** field of the "greeting" ViewModel observable. Set this field to the text passed as a parameter from the view's URL.
                
<!---->                
                
    <!--JavaScript-->greet: function () {
        Application1.app.navigate("greeting/" + this.name());
    }
  
<!---->
  
    <!--JavaScript-->Application1.greeting = function (params) {
        var viewModel = {
            message: ko.observable('Hello ' + params.id + '!')
        };
        return viewModel;
    };

</article>