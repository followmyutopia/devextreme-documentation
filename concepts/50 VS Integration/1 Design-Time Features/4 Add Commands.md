The View Designer gives you the freedom from having to write HTML code for adding [Commands](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views) to a View. Press **Add command** on the strip at the bottom of the Design View; this will invoke the **Add Command** dialog.

![Add Command](Content/images/doc/16_1/DevExtreme/AddCommand.png)

In this dialog, specify an identifier for the added command. You can choose an identifier from the drop-down list of predefined identifiers or specify a custom one. But take into account that the command identifier must be unique within the application. If you choose a predefined identifier, [default mapping](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping) will used for this command. This means that the command will be displayed in a predefined place of the command containers that are located on the [built-in layouts](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) used in your application. If you set a custom identifier for your command, use the rest of the editors in the Add Command dialog to specify command containers for your command and a place on the widgets that these command containers represent. Set a required command container for the required platforms available for the layouts used in your application.

[note]The set of command containers that are offered to be chosen for a command depends on the current project. If the current project is **Shared**, set a required context for the currently designed view by using the [Select a project to show the view in its context](/Documentation/Guide/VS_Integration/Design-Time_Features/#Set_Device_Settings) combobox on the toolbar.

A code template for a command will be added to the corresponding place in the dxView's source automatically.

	<!--HTML--><div data-options="dxView : { name: 'products', title: 'products' } " >
		<div data-bind="dxCommand: { title: 'edit', id: 'edit' }"></div>
		<div data-options="dxContent : { targetPlaceholder: 'content' } ">
			<!--view content is here-->
		</div>
	</div>

All changes that you specified for command mapping within the dialog will be saved to the application's *app.config* file.

Specify command options. You can do this manually in code, setting the required fields of the [configuration object](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/) that is passed to the command's constructor. Alternatively, you can use the Properties grid. It displays all the options that can be specified for the Command that is currently selected in the Source or Design View.

![Command Properties](Content/images/doc/16_1/DevExtreme/CommandProperties.png)

You can change command mapping specified for the command. For this purpose, press **Edit** on the command strip at the bottom of the Design View. 

![Edit Command](Content/images/doc/16_1/DevExtreme/EditCommand.png)

The **Edit Command** dialog will be invoked. This dialog is identical to the **Add Command** dialog. The changes will be saved to the application's configuration file again.

[note]The changes performed in the **Add Command**/**Edit Command** dialog influence all application views, since command mapping is specified globally for an entire application. So, be attentive to the command identifiers to avoid the unexpected placement of a command.

