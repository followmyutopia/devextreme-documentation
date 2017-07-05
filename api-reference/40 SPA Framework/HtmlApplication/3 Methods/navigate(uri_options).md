<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Navigates to the specified URI.
<!--/shortDescription-->

<!--paramName1-->uri<!--/paramName1-->
<!--paramType1-->string|object<!--/paramType1-->
<!--paramDescription1-->
A string containing the URI to which the application should navigate.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
Specifies additional navigation parameters.
<!--/paramDescription2-->
<!--paramName2_field1-->root<!--/paramName2_field1-->
<!--paramType2_field1-->Boolean<!--/paramType2_field1-->
<!--paramDescription2_field1-->
Indicates whether to create a new navigation stack based on the navigated view.
<!--/paramDescription2_field1-->
<!--paramName2_field2-->target<!--/paramName2_field2-->
<!--paramType2_field2-->string<!--/paramType2_field2-->
<!--paramDescription2_field2-->
Specifies whether to add the navigated view to the navigation stack or replace the current view. The following values are accepted: 'blank' and 'current'.
<!--/paramDescription2_field2-->
<!--paramName2_field3-->direction<!--/paramName2_field3-->
<!--paramType2_field3-->string<!--/paramType2_field3-->
<!--paramDescription2_field3-->
The direction in which the layout controller will animate the transition to show the view. The following values are accepted: 'backward', 'forward' or 'none'.
<!--/paramDescription2_field3-->
<!--paramName2_field5-->modal<!--/paramName2_field5-->
<!--paramType2_field5-->Boolean<!--/paramType2_field5-->
<!--paramDescription2_field5-->
Specifies whether the navigated view should be shown in modal mode.
<!--/paramDescription2_field5-->

<!--fullDescription-->
The following values can be passed as the *uri* parameter.

- **string**  
    The string must confirm the routing rule that is registered in the application's router. For details on how to declare a routing rule, refer to the [Declare a Routing](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) topic.  

        <!--JavaScript-->app.router.register(":view/:id", { view: "home", name: "World" });

    <!---->

        <!--JavaScript-->app.navigate('contacts/1');

- **object**  
    This object must expose the fields that correspond to the routing rule parameters.

        <!--JavaScript-->app.router.register(":view/:id", { view: "home", name: "World" });

    <!---->

        <!--JavaScript-->app.navigate({
            view: 'contacts',
            id: 1
        });


Using the second parameter of this function, you can specify the following parameters.

- **root**  
    *This field can be set in a [mobile application](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode) only*. If you pass an object with the **root** field set to **true** as the second parameter of the **navigate** method, the specified view will be invoked as a root view. This means that a new navigation stack will be created as if you used the application's global navigation to navigate to this view. The view that will be invoked from the root view with an unspecified **root** parameter will be saved to the navigation history based on this root view.

        <!--JavaScript-->app.navigate('OrderItems/' + orderId, { root: true });

- **target**  
    You can pass an object with the **target** field set to the following values:
    - **'blank'** - adds the invoked view to the navigation history (the default value);
    - **'current'** - replaces the current view in the navigation history with the invoked view.
    - **'back'** - replaces the previous view in the navigation history with the invoked view.

            <!--JavaScript-->app.navigate('OrderItems/' + orderId, { target: 'current' });

- **direction**  
    This field can be set in a [mobile application](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode) only. Specify the direction in which the layout will animate the transition to the view. This option can be set to the "backward", "forward" or "none" value.

- **modal**  
    Set this field to **true** to display the navigated view in a modal popup window. For this purpose, add the [Popup Layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Popup_Layout) to your application. This layout uses the [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) widget to display a view in a popup window. By default, the **SimpleLayoutController** controller is used to manage popup window content. So, when defining a modal view, find out which [content placeholders](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout) and [command containers](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views) are available in the [Simple Layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout). If the navigated view should always be displayed in a popup modal window, specify its [modal](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal) option. In this instance, you will not have to specify this parameter each time you navigate to this view.

[note]Only the **target** option is considered when the [webSite](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode) mode is set for the application. The **root** and **direction** options are valid for mobile applications. To learn more about root views and navigation history in mobile applications, refer to the [Navigation History in Mobile Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) topic.

If none of the parameters are specified, the **navigate** method will display the view that is set as a default view in the routing rule (see the [Declare a Routing](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) topic).

As an alternative to the **navigate** method, you can introduce a [command](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/) and set its [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) option to a string or an object representing a URL to navigate to. In this instance, the **root**, **target** and **direction** options can be set for the command as well to define the navigation details.

To learn more about the **navigate** method and other methods used to navigate to a view, refer to the [Navigate to a View](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_to_a_View) topic.

To navigate back to a previous view, use the [back](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#back) method, or define a [command](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views) with the [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) option set to the '#_back' method. For details, refer to the [Navigate Back in Mobile Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigate_Back_in_Mobile_Apps) and [Navigation in Web Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps) topics.
<!--/fullDescription-->