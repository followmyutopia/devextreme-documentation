<article data-show="/Content/Applications/16_2/LearningCenter/Data-BoundApplication/step0/index.html">

- From the main menu in Visual Studio, select **File** | **New** | **Project...** to get to the **New Project** dialog.

    ![New Project Dialog](Content/images/doc/16_2/DevExtreme/Tutorial_NewMultiChannelProject.png)

- In the **Projects** tree view, select **DevExtreme**. In the **Templates** list view, select the [DevExtreme XX.X Multi-Channel Application](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application) template, specify the new solution's name (here Application1) and click **OK**. A Project Wizard will run.

- In the first page of the Project Wizard, choose the platforms for which you want to create projects. Here, the Desktop and Mobile projects will be demonstrated for the sake of simplicity of this tutorial. You can learn more information on all the available project templates in the [Multi-Channel Application](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application) topic.

    ![Choose Platform](Content/images/doc/16_2/DevExtreme/Tutorial_ChoosePlatform.png)

- In the second page of the Project Wizard, choose a navigation type for your application.

    ![Choose Layout](Content/images/doc/16_2/DevExtreme/Tutorial_ChooseLayout.png)
  
- In the third page of the Project Wizard, you can enter a URL of the OData service that will be used as a data source in the application. In this application, use our [sample OData service](https://sampleservices.devexpress.com/Northwind.svc/) that we provide for instructional use. Press **Discover** and all the entities provided by the service will be listed in the page. Check **Generate model**, but do not check **Generate views** now, because most of the generated views will not be used in the tutorial's application. Moreover, it is better to implement views manually for the first time so that the next time you can generate views and modify them consciously and correctly.

    ![Specify OData Service](Content/images/doc/16_2/DevExtreme/Tutorial_DataService.png)
    
    If you have a data service of another type, you can skip this step and finish solution generation.
    
A solution with the following projects will be generated.

- **Desktop**  
    Used to implement a desktop application specific code.
    
- **Mobile**  
    Used to implement a mobile application specific code. This project can be packaged as an iOS, Android, WindowsPhone 8 application or a PhoneGap zip. For details, refer to the [Packaging Tools](/Documentation/Guide/VS_Integration/Packaging_Tools/) article.

- **Shared**  
    Used to implement code that is common for **Desktop** and **Mobile** projects.

All the generated projects have a similar structure. This is the structure of the [Basic DevExtreme project template](/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application). You have already learned about this structure in the [Your First Mobile App in Visual Studio](/Documentation/Tutorial/VS_Integration/Your_First_Mobile_App_in_Visual_Studio/) tutorial.

![Multi-Channel Solution Structure](Content/images/doc/16_2/DevExtreme/Tutorial_MultiChannelSolution.png)

Pay attention to the **data** folder in the **Shared** project. In the *db.js* file, you can see that an [ODataContext](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Using_ODataContext) object is created. This object presents an entire OData service that you specified in the Project Wizard. The ODataContext object creates an [ODataStore](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) instance for each entity specified in the configuration object of the ODataContext object.

    <!--JavaScript-->//See the application1.shared.config.js file
    window.Application1 = $.extend(true, window.Application1, {
        "config": {
            "endpoints": {
                "db": {
                    "local": "https://sampleservices.devexpress.com/Northwind.svc/",
                    "production": "https://sampleservices.devexpress.com/Northwind.svc/"
                }
            },
            "services": {
                "db": {
                    "entities": {
                        "Categories": { 
	                        "key": "CategoryID", 
	                        "keyType": "Int32" 
                        },
                        "Products": { 
	                        "key": "ProductID", 
	                        "keyType": "Int32" 
                        }
                    }
                }
            }
        }
    });

<!---->

    <!--JavaScript-->
    //See the data|db.js file
    var serviceConfig = $.extend(true, {}, Application1.config.services, {
        db: {
            //Assing the local URL if the application runs locally (on a localhost)
            //or the production URL if the application runs externally
            url: endpointSelector.urlFor("db"),
            errorHandler: handleServiceError
        }
    });
    Application1.db = new DevExpress.data.ODataContext(serviceConfig.db);

Below, you will use the created ODataContext object and the ODataStore instances it provides to specify a data source for widgets on views.

Run the Mobile or Desktop project in any browser to test the application template. The application will be shown by the [simulator](/Documentation/Guide/VS_Integration/Simulation_Tools/#Use_Simulator) - one of the tools that come with the DevExtreme VS extension. The simulator allows you to see an application on different devices using the required landscape and scale.

![Run in Simulator](Content/images/doc/16_2/DevExtreme/Tutorial_EmptyAppInSimulator.png)

As you can see, the About view that is added by default is loaded to the application. In addition, a navbar is available because the "navbar" [layout set](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) is specified for the application (see the *application1.config.js* file in the **Mobile** and **Desktop** projects).


</article>
 