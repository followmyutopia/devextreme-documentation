<article data-show="/Content/Applications/17_1/LearningCenter/HelloFantasticWorld/HelloFantasticWorld1.html">

- From the main menu in Visual Studio, select **File** | **New** | **Project...** to invoke the **New Project** dialog.

    ![New Project Dialog](Content/images/doc/17_1/DevExtreme/Tutorial_NewProject.png)

- In the **Projects** tree view on the left, select **DevExtreme**. In the **Templates** list view, select the [DevExtreme XX.X Basic Application](/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application) template, specify the new solution's name ("Application1" in this example) and click **OK**. You will see a project with the specified name in the Solution Explorer. It includes the following.
  
    ![Solution Structure](Content/images/doc/17_1/DevExtreme/TutorialSolution.png)

  - **css**  
      A folder with common and platform-specific style sheet files.
  - **js**  
      A folder with all the JavaScript libraries required for the application.
  - **layouts**  
      A folder with the files representing the [predefined layouts](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) that come with the framework.
  - **views**  
      A folder with three sample views - "home", "about" and "blank". The "home" view is implemented in three files:
        
      - *home.dxview*  
          An HTML template for the "home" view. Since this file has the *.dxview* extension, a [View Designer](/Documentation/Guide/VS_Integration/Design-Time_Features/) is used to open this file. You can rename this file to *home.html* and implement HTML markup for the view without using the View Designer, although the View Designer is helpful.
      - *home.css*  
          A set of CSS rules applied to the view's markup.
      - *home.js*  
          The working JavaScript code for the view. 
            
      The view's HTML template, together with the applied CSS classes, is a View in terms of the **MVVM** pattern. According to this pattern, Views can be bound to corresponding ViewModels. The ViewModel is basically your custom JavaScript code, which is responsible for providing data from the Model to the View taking into account different user interactions. The Model is represented by the data that you can obtain from virtually anywhere. So, you may choose to connect to remote data sources via AJAX requests, bind to JavaScript objects or even use HTML5 local storage.
        
      The "about" view is rather simple and presented by a single *about.html* file.
      
  - *index.html*  
      An application page where all the required resources are linked and a **div** element working as a view port is added.
  - *index.css*  
      A file with application style sheets.
  - *index.js*  
      A file where the [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object is created and configured.
  - *app.config.js*  
      A file that includes the configuration object used to initialize the application. The following configuration options are predefined in this file.
      - [layout set](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet).  
      In the project template, the "navbar" layout set is specified. This means that the [Navbar layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout) will be used in major views (make sure that it is linked in the *index.html* file).
      - [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation)  
      To configure the [NavBar](/Documentation/ApiReference/UI_Widgets/dxNavBar/) widget used in the "navbar" layout as a navigation control, the **navigation** option is specified for the application. The array assigned to this option specifies configuration options for navigation items. As you can see, the "home" and "about" views will be available from the navigation control.
      - [animationSet](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#animationSet)  
      Specify the 'default' animation set for the application. This is a [predefined animation set](/Documentation/Guide/SPA_Framework/Animation/#Predefined_Animation_Sets). The animations it includes are used by the "navbar" layout to animate transitions between views. In addition, animations from this set can be used for list and detail views to make them 'live' and attractive. For details, refer to the [Animation](/Documentation/Guide/SPA_Framework/Animation/#Animation) guide.

- Run the application in any browser to test the application template. The application will be shown by the [simulator](/Documentation/Guide/VS_Integration/Simulation_Tools/#Use_Simulator) - one of the tools included with the DevExtreme VS extension. The simulator allows you to view an application on different devices using the required landscape and scale.

![Run in Simulator](Content/images/doc/17_1/DevExtreme/Tutorial_Simulator.png)

As you can see, the views that are added by default are loaded to the application and you can navigate between them using a navbar. The "navbar" layout is designed for each platform individually. So, when you switch between devices, the appropriate layout version and style sheets are applied, and the application looks native.

</article>
