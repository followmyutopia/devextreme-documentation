<article data-show="/Content/Applications/17_1/framework/PartialView/step2/index.html" data-show-first="views/home.html">

To try binding a partial view to the ViewModel of the view in which it is displayed, implement the following scenario. Let the 'home' view be a *News* view and the 'about' view be a *Blog* view. Both these views will have a block for subscribing to this page (news or blog). This block will be defined as a partial view (within the 'partialView.html' file) and will be bound to a partial ViewModel.

- To turn the 'home' and 'about' view into 'news' and 'blog' respectively, specify the **title** field within the **home** and **about** ViewModels (add an *about.js* file and add a link to it within the application page).

- Define the "Subscribe" block within the 'partialView' view in the following manner.

        <!--HTML-->    <h2 data-bind="text: header"></h2>
        <div style="padding: 0 15px">
          <div data-bind="visible: !subscribed()">
            <div data-bind="dxTextBox: { value: email, placeholder: 'Enter your e-mail' }"></div>
            <div data-bind="dxButton: { text: 'Subscribe', onClick: subscribe } " ></div>
          </div>
          <div data-bind="visible: subscribed">
            Thank you. <span data-bind="text: email"></span> is subscribed.
          </div>
        </div>

- According to the markup of the partial view, the ViewModel object of the views where this partial markup block will be displayed should have the following fields.
    
        <!--JavaScript-->header: header,
        email: ko.observable(),
        subscribed: ko.observable(false),
        subscribe: function() {
            this.subscribed(true);
        }
        
    To avoid a duplicated code, implement a **createSubscribeViewModel** function that will return an object with these fields. Pass a value for the **header** field as the function's parameter. Place the function definition to a separate *partialView.js* file (provide a link to it within the application page).
    
- Add a **subscribeBlock** field to the 'news' and 'blog' ViewModels and assign the object returned by the **createSubscribeViewModel** function to it.

- Bind the partial markup provided by the **viewPlaceholder** element in the 'news' and 'blog' view templates to the object provided by the ViewModels' **subscribeBlock** field. For this purpose, use [with](http://knockoutjs.com/documentation/with-binding.html) Knockout binding.
  
</article>