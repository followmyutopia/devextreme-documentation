<article data-show="/Content/Applications/16_2/LearningCenter/HelloFantasticWorld/HelloFantasticWorld6.html">
By default, the "greeting" view is added as a root view (available from the navigation control). Do the following to treat this view as a secondary view, and navigate to it using a button on the "home" view.

- In the *app.config.js* file, remove the object that represents the "greeting" navigation item from the array that is assigned to the **navigation** option of the **HtmlApplication**'s configuration object.

        <!--JavaScript-->"navigation": [
            {
              "title": "Home",
              "onExecute": "#home",
              "icon": "home"
            },
            {
              "title": "About",
              "onExecute": "#about",
              "icon": "info"
            }
        ]

- Add the **greet** function to the "home" view's ViewModel. In this function, call the **navigate** method of the [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object, passing "greeting" as a parameter. "greeting" is the name of the view to which to navigate. This parameter value conforms to the routing format that is specified for the application by default (see the *index.js* file).
- Add the **Button** widget to the "home" view's HTML template and bind its **onClick** option to the ViewModel's **greet** function.
 
 <!---->
 
    <!--HTML--><div data-options="dxView: {name: 'home', title: 'Home'}">
        <div class="home-view" data-options="dxContent : { targetPlaceholder: 'content' } " >
            <h1 data-bind="text: message"></h1>
            Enter your name: <div data-bind="dxTextBox: { value: name }" style="width: 200px"></div>
            <div data-bind="dxButton: { text: 'Say Hello', onClick: sayHello }"></div>
            <div data-bind="dxButton: { text: 'Greet', onClick: greet }"></div>
        </div>
    </div>

<!---->  
  
    <!--JavaScript-->Application1.home = function () {
          var viewModel = {
              message: ko.observable('Welcome!'),
              name: ko.observable(''),
              sayHello: function () {
                  this.message("Hello " + this.name() + '!');
              },
              greet: function () {
                  Application1.app.navigate("greeting");
              }
          };
          return viewModel;
      };

Run the application to see that the implemented navigation operates properly. Note that the "navbar" layout automatically adds a **Back** button to the "greeting" view. For details on navigation, refer to the [Navigation and Routing](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/) article.
  
</article>