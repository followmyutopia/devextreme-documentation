A controller for DevExtreme ASP.NET MVC Controls needs to follow [certain guidelines](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/#ASPNET_MVC_and_Web_API_Controllers). Implementing it by hand is a time-consuming and sometimes error-prone task. Scaffolding a controller, on the other hand, helps you avoid common pitfalls and quickly get a controller that is compatiable with the controls.

A scaffolded API controller contains REST actions that perform CRUD operations on entities from the selected data context. Follow the instructions below to scaffold such a controller:

1. In **Solution Explorer**, right-click the Controllers folder. On the appeared menu, point to **Add** and then click **New Scaffolded Item...**.

    ![DevExtreme ASP.NET MVC Controls - Add New Scaffolded Item in Context Menu](/Content/images/doc/18_1/Common/MvcWrappers/scaffolding_new-item.png)

2. In the **Add Scaffold** window, choose **DevExtreme Web API Controller with actions, using Entity Framework** for an ASP.NET MVC 5 app or **DevExtreme API Controller with actions, using Entity Framework** for an ASP.NET Core MVC app and click **Add**.

    ![DevExtreme ASP.NET MVC Controls - Add New Scaffolded Item in Context Menu](/Content/images/doc/18_1/Common/MvcWrappers/scaffolding_add-scaffold-window.png)

3. In the **Add Controller** window, select the DataContext class and model type for which to generate the controller, enter the controller's name, and click **Add**.

    ![DevExtreme ASP.NET MVC Controls - Add New Scaffolded Item in Context Menu](/Content/images/doc/18_1/Common/MvcWrappers/scaffolding_add-controller-window.png)

Now when the controller is ready, add a control that will work with it: **DataGrid**, **Chart**, **TreeList**, etc. See [Fundamentals](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/) for details.

<!-- Now that the controller is ready, add a control that will work with it using the [view scaffolder](). -->
