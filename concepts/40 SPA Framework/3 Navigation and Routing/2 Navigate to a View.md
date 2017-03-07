Once you have defined routing rules, you can use URLs containing view names and their parameters to navigate between views in your application. The following example demonstrates a URL for navigating to the "product-details" view. In this URL, the *id* parameter is passed to the navigated view, according to pre-defined routing rules.

	<!--JavaScript-->"#product-details/{id}"

As you can see, you can use format items within the strings that specify a URL. When formatting these strings, the format items will be replaced with the corresponding fields of the current ViewModel. In the example above, it is implied that the current ViewModel includes the **id** field.

	<!--JavaScript-->home = function() {
		var viewModel = {
			id: 123 
		};
		return viewModel;
	}

A URL can be defined by an object, in which case, that object's fields must present the values of the application's [routing rule](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#DeclareaRouting) parameters. The following object is equivalent to the string above. In this object, a ViewModel field value is passed as a parameter.

	<!--JavaScript-->{view: 'product-details', id: id}

Defining a URL by using an object is useful when you need to pass several parameters to the navigated view. You can combine several parameters to an object and register a single parameter in a routing rule instead of several ones.

	<!--JavaScript-->{view: 'product-details', settings: {id: id, name: name}}

[note]When specifying an object as a parameter, make sure that it is a small object that does not contain references to other objects, and that it can be serialized using the JSON.stringify function.

The following list details where you can specify a URL (a string or an object) to navigate to a view.

- **Commands**

    When defining a [command](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views), assign a URL (a string or an object) to the [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) option. The view specified by the URL will be rendered when executing the command.

		<!--HTML--><div data-options="dxView: { name: 'home', title: 'Home' }">
			<!--Approach 1 - Assign a string-->
			<div data-bind="dxCommand: { id: 'myCommand', title: 'Show Contacts', location: 'create', onExecute: '#product-details/{id}'}"></div>
			<!--Approach 2 - Assign a object-->
			<div data-bind="dxCommand: { id: 'myCommand', title: 'Show Contacts', location: 'create', onExecute: {view: 'product-details', id: id}}"></div>
		</div>


- **Widgets**

    When defining a widget, specify a URL (a string or an object) as a handler for a widget event (assign the URL to the corresponding option or pass it as a parameter to the **on** method). For a better UI design, navigate to views using the events that fire as a result of clicking a widget or a widget element.

		<!--HTML--><div data-options="dxView: { name: 'home', title: 'Home' }">
			<!--Approach 1 - Assign a string-->
			<div data-bind="dxButton: { text: 'Show Contacts', onClick: '#product-details/{id}' }"></div>
			<!--Approach 2 - Assign an object
				<div data-bind="dxButton: { text: 'Show Contacts', onClick: {view: 'product-details', id: id} }"></div>
			-->
		</div>

- **dxAction Binding**

    You can navigate to a view when clicking any HTML element. For this purpose, use [dxAction](/Documentation/ApiReference/SPA_Framework/Markup_Components/#dxAction) binding for that element and assign a URL (a string or an object) to that binding.

		<!--HTML--><div data-bind="dxList: { dataSource: dataSource }">
			<!--Approach 1 - Assign a string-->
			<div data-options="dxTemplate : { name: 'item' }" 
				 data-bind="text: name, dxAction: '#product-details/{id}'" >
			</div>
			<!--Approach 2 - Assign an object
				<div data-options="dxTemplate : { name: 'item' }" 
					 data-bind="text: name, dxAction: {view: 'product-details', id: id}" >
				</div>
			-->
		</div>

Whatever method you chose to navigate to a view with, the [navigate](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) function of the **HtmlApplication** object will be called internally. This function ensures that the application is properly initialized and uses the navigation manager to change the current view. You can call this function directly to navigate to a view from any place in your application. The following code snippet demonstrates a sample function that uses the **navigate** function to render the "product-details" view for a specified product identifier.

	<!--JavaScript-->function goToProduct(id) {
		//Approach 1 - Pass a string
		myApplication.navigate("product-details/" + id);
		//Approach 2 - Pass an object
		//myApplication.navigate({view: "product-details", id: id});
	}

The **navigate** function can accept a second parameter specifying additional options.

To learn how to build a navigation strategy in your application, refer to the [Navigation History in Mobile Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) and [Navigation in Web Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_in_Web_Apps) topics in this section.
