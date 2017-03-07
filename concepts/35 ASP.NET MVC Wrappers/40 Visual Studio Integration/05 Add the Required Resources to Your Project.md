[note]At present, ASP.NET Core projects are not supported since the structure of the ASP.NET Core project template has not been established yet.

To add resources required by DevExtreme ASP.NET MVC Wrappers to your project, follow these steps.

1. Open your project in Visual Studio. See [Environment and Requirements](/Documentation/Guide/ASP.NET_MVC_Wrappers/Prerequisites_and_Installation/#Environment_and_Requirements) for information on supported Visual Studio versions.
2. Right-click your project in the **Solution Explorer** window and select **Add DevExtreme to the Project** on the menu.

    ![DevExtreme HTML5 ASPNET MVCWrappers](/Content/images/doc/16_2/Common/MvcWrappers/projConverter_contextMenu.png)

3. In the appeared dialog box, click **OK**.

    ![DevExtreme HTML5 ASPNET MVCWrappers](/Content/images/doc/16_2/Common/MvcWrappers/projConverter_confirmDialog.png)

4. Wait a few seconds while DevExtreme and its dependencies are being added. At that time, you can follow the log of this process in the **Output** window.

    ![DevExtreme HTML5 ASPNET MVCWrappers](/Content/images/doc/16_2/Common/MvcWrappers/projConverter_outputWindow.png)

A success message concluding the log means that all is set up for you to start using DevExtreme ASP.NET MVC Wrappers in your project. If any issues appear during the process, address them by following the messages in the **Output** window. After that, repeat the steps above starting with step 2.

[note] Certain resources are added, but not linked, because either they are already linked in the basic project template, or they provide a very specific functionality. Those resources are: jQuery, JSZip for client-side export in the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget and data for the [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/) widget. To link any of those resources, uncomment the corresponding codelines in the **AppStart/DevExtremeBundleConfig.cs** file.

#####See Also#####
- [ASP.NET MVC Wrappers - Fundamentals](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/)
- [ASP.NET MVC Wrappers - Data Binding](/Documentation/Guide/ASP.NET_MVC_Wrappers/Data_Binding/)

[tags]asp.net mvc wrappers, visual studio integration, add resources, add libraries, convert a project