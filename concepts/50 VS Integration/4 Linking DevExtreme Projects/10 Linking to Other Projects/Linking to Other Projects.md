To link an application built using a [DevExtreme project template](/Documentation/Guide/VS_Integration/Project_Templates/#DevExtreme_App_Project_Template) to another project, use the **Link to...** item in a context menu of the DevExtreme project. This menu item appears in the context menu of a DevExtreme project when there is a non-DevExtreme project in the current solution.

![Link DevExtreme Project To Another Project](Content/images/doc/16_1/DevExtreme/DevExtremeProject_LinkTo.png)

As an example, you can develop an application using one of the DevExtreme Project Templates, and then add a Win8Phone (download it from the PhoneGap site so that you can then find it by the *\cordova_3.7.0\WP8\platforms\wp8\ApplicationTemplate.csproj* path on the hard drive within the **Add Existing Project** dialog) or Win8 (choose the **JavaScript**|**Store Apps**|**Windows Apps**|**Blank App (Windows)** project template in the **Add Project** dialog) standard template to the solution. To deploy the application as a Win8Phone or Win8 application, link the DevExtreme project to the Win8Phone/Win8 project using the **Link to...** dialog.

- Right-click the DevExtreme project.
- Choose **Link to...** in the invoked context menu.
- Within the opened dialog, choose the newly added Win8Phone/Win8 project. Links to all the files of the DevExtreme project and the files of the projects that are referenced in the linked project will be added to the Win8Phone/Win8 project.
- Remove the *index.html* file in the Win8Phone project. If the main application file is called differently, remove it and change the project's **Start page** option to *index.html*. In Win8 projects, the main application file must include references to WinJS libraries. So, you will have to customize it. To learn how, refer to the [Linking to a Win8 Project](/Documentation/Guide/VS_Integration/Linking_DevExtreme_Projects/#Linking_to_Other_Projects/Linking_to_a_Win8_Project) topic.
