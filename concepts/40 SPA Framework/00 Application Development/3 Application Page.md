The applications created by this framework are single-page applications (SPA). This means that the application logic and markup are delivered to the client (web browser) on the first load. Then, data (in the form of JSON objects) can be loaded by request. This eliminates round-trips to the web server for page markup, thus allowing your app to be responsive.

While you can implement your application within one page, it is still better to factor out view HTML, JavaScript and CSS code into separate files and provide links to these files within the main application page. To help you get started quickly, the framework comes with an **application project template**. Here is where you can find it.

- [DevExtreme Mobile](/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Mobile)  
    Find the **Application Templates/Knockout** folder of the DevExtreme Mobile zip archive.

- [DevExtreme Complete](/Documentation/Guide/Common/DevExtreme_Packages/#DevExtreme_Complete)  
    Use one of the [DevExtreme project templates](/Documentation/Guide/VS_Integration/Project_Templates/) provided within the **New Project** dialog in Visual Studio.


**Read**:

- [Application Project](/Documentation/Guide/SPA_Framework/Application_Project/)

- [VS Integrated Project Templates](/Documentation/Guide/VS_Integration/Project_Templates/)

**Check**:

- The DevExtreme JavaScript libraries (*dx.mobile.js* or *dx.web.js*) must be referenced below the external jQuery and Knockout libraries.
- **dx-theme** links must be used for linking [predefined themes](/Documentation/Guide/Themes/Predefined_Themes/) and these links must go before DevExpress scripts.
