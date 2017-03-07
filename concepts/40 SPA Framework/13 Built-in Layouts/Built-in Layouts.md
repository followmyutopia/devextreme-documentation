In most cases, you do not have to define [layouts](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Define_Layouts) yourself. The framework comes with a set of predefined layouts. You can find them in the following folder.

- [DevExtreme Mobile](/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Mobile)/[DevExtreme Web](/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Web)  
	The **lib**/**layouts** folder of the product's zip archive.
- [DevExtreme Complete](/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete).  
	The **DevExtreme**/**sources**/**lib**/**layouts** folder.

A folder with layouts is added to the [project template](/Documentation/Guide/SPA_Framework/Application_Project/) as well. So you don't have to add them manually.

As you can see in the **layouts** folder, each layout is represented by a set of three files.

- *.html*  
	Includes HTML layout templates for different devices.
- *.css*  
	Includes CSS rules specific for different devices.
- *.js*  
	Contains a layout controller that shows a view using the layout template that is appropriate for the device on which the application is running.

Before using predefined layouts, find out which [content placeholders](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout) and [command containers](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views) are available in their device-specific versions. This information will be required when defining views and mapping the commands that are added to these views.

Below you will find details about each of the predefined layouts. In addition, you will learn how to use **layout sets** to specify which layouts should be used in your application and when.

