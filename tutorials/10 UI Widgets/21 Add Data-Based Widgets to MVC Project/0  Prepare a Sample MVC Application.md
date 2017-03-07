- Create a new MVC application project and add DevExtreme libraries as described in the [Add Widget to MVC Project](/Documentation/Tutorial/UI_Widgets/Add_Widget_to_MVC_Project/) tutorial.

- Add a Home controller and Index View. In addition, add a JavaScript file to implement JavaScript logic for the widgets that you will add to the Index view.

- Add all required references to the Index view

        <!--HTML--><html>
        <head runat="server">
            <meta name="viewport" content="width=device-width" />
            <title>Index</title>
            <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
            <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
            <script src="/Scripts/jquery-3.1.0.min.js"></script>
            <script src="/Scripts/dx.viz-web.js"></script>
            <script src="/MyJS/script.js"></script>
        </head>
        <body>
        </body>
        </html>

- Add a file with the following JSON object to the project.

        <!--JavaScript-->[
            {
                "month": "january",
                "recordLow": -7,
                "recordHigh": 18,
                "average": 8.9,
                "color": "#00BFFF",
                "temperature": [
                    { "day": 1, "t": 13.1 },
                    { "day": 2, "t": 13.2 },
                    //...
                    { "day": 30, "t": 7.2 },
                    { "day": 31, "t": 7.6 }
                ]
            },
            {
                "month": "february",
                //...
            }
        ]

    This object will serve as the data that came from "custom service". To simplify the tutorial and create an accent on how to transport received data to a widget, custom service will not be implemented.

Here is the resulting project structure.

![Project Structure](/Content/images/doc/16_2/PhoneJS/AddDataBasedWidgetstoMVCProject_ProjectStructure.png)

#####See Also#####
- [Add Widget to MVC Project - jQuery](/Documentation/Tutorial/UI_Widgets/Add_Widget_to_MVC_Project/#Add_a_DevExtreme_Widget/jQuery_Approach) - shows how to add the required libraries and configure a widget with jQuery approach
- [Add Widget to MVC Project - AngularJS](/Documentation/Tutorial/UI_Widgets/Add_Widget_to_MVC_Project/#Add_a_DevExtreme_Widget/Angular_Approach) - shows how to add the required libraries and configure a widget with AngularJS approach
- [Add Widget to MVC Project - Knockout](/Documentation/Tutorial/UI_Widgets/Add_Widget_to_MVC_Project/#Add_a_DevExtreme_Widget/Knockout_Approach) - shows how to add the required libraries and configure a widget with Knockout approach