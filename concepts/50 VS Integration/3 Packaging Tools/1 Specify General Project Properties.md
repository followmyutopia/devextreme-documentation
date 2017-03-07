Regardless of which platform you are going to package your application for, set the general project properties. To do this, right-click the application project in the Visual Studio Solution Explorer and choose **Properties**. In the invoked window, specify the **General** properties.

![General Project Properties](Content/images/doc/16_2/DevExtreme/GeneralProperties.png)

- **Output Path**	
	Specify a folder for the output.
- **Start Page** 	
	Set the application page that will be loaded when running your application.
- **Application Title**  
	Specify the application title that will represent the application on devices.	
- **Root namespace**  
	A namespace used by the **Add** | **New Item...** dialog when adding a view using the [DevExtreme View template](/Documentation/Guide/VS_Integration/Project_Item_Templates/#View). In this template, the function that returns a ViewModel of the added view is declared in the namespace that is set to this project property. For details, refer to the [Set a Custom Namespace](/Documentation/Guide/VS_Integration/Project_Templates/#Set_a_Custom_Namespace) topic.
- **Version**  
	Specify your application's version.

	[note]When building an iOS package, specify only the "Major", "Minor" and "Build" versions. The "Revision" version will not be considered.

- **Screen Orientation**  
	Specify the device orientation that your application supports.
- **Show Splash Screen**  
	Indicates whether or not to show the predefined splash screen.