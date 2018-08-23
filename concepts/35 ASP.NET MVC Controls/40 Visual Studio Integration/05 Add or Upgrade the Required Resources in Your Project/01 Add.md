To add resources DevExtreme ASP.NET MVC Controls require to your project, follow these steps:

1. Open your project in Visual Studio. See [Environment and Requirements](/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/#Environment_and_Requirements) for information on supported Visual Studio versions.

2. Right-click your project in the **Solution Explorer** window and select **Add DevExtreme to the Project** on the menu.

    ![DevExtreme ASP.NET MVC Controls - Project Converter Context Menu Item](/Content/images/doc/18_2/Common/MvcWrappers/projConverter_contextMenu.png)

3. In the invoked dialog box, click **OK**.

    ![DevExtreme ASP.NET MVC Controls - Project Converter Confirmation Dialog](/Content/images/doc/18_2/Common/MvcWrappers/projConverter_confirmDialog.png)

4. Wait a few seconds while DevExtreme and its dependencies are being added. This process is logged in the **Output** window.

    ![DevExtreme ASP.NET MVC Controls - Project Converter Output Window](/Content/images/doc/18_2/Common/MvcWrappers/projConverter_outputWindow.png)

5. **ASP.NET Core MVC only**. Follow the instructions from the DevExtreme_Readme.html file.

Now DevExtreme ASP.NET MVC Controls are set up for your project. If any issues appear during the process, address them by following the messages in the **Output** window. After that, repeat the steps above starting with step 2.

[note] **ASP.NET MVC 5 only**. Certain resources are added, but not linked, because either they are already linked in the basic project template, or they provide specific functionality. Those resources are jQuery, JSZip for client-side exporting in the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) control and data for the [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/) control. To link any of those resources, uncomment the corresponding code lines in the **AppStart/DevExtremeBundleConfig.cs** file.

#####See Also#####
- [ASP.NET MVC Controls - Fundamentals](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
