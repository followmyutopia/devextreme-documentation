When you use a project template for an application, the application's namespace is generated automatically. You may need to use a custom namespace. In this topic, you will learn specific notes on how to set a custom namespace for the [DevExtreme SPA Framework](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework)-based applications created using the [Basic Application](/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application) or [Multi-Channel Application](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application) project templates.

To change the namespace of an application project on the stage on which the project has certain implemented content, do the following.

- Change the application namespace.  
	Set the [namespace](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#namespace) option of the **HtmlApplication** project to the new namespace name.

- Change the namespace of the functions implemented in the project.  
	In particular, pay attention to the functions that return ViewModel objects.

- Set the new namespace for the views that will be added by the **Add** | **New Item...** dialog  further.  
	The template that is used by the **Add** | **New Item...** dialog for creating views has a JavaScript file. In this file, there is a function that returns a ViewModel for the view. The namespace for this function is the project name by default. To change the default namespace to a custom one, use the **Root namespace** property of the application project.

	![Root Namespace](Content/images/doc/17_2/DevExtreme/RootNamespace.png)

