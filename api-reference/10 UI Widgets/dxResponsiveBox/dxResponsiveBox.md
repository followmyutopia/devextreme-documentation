<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_responsive_box">ui/responsive_box</a><!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ResponsiveBox** widget allows you to create an application or a website with a layout adapted to different screen sizes.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><html style="height:100%">
            <!-- ... -->
        </html>
        <body style="height:100%">
            <div id="responsiveBox">
                <div class="header" data-options="dxItem: {
                    location: [
                        { row: 0, col: 0 }
                    ]
                }"> <p>Header</p> </div>
                <div class="content" data-options="dxItem: {
                    location: [
                        { row: 1, col: 0 }
                    ]
                }"> <p>Content</p> </div>
                <div class="footer" data-options="dxItem: {
                    location: [
                        { row: 2, col: 0 }
                    ]
                }"> <p>Footer</p> </div>
            </div>
        </body>

    <!---->

        <!--CSS-->#responsiveBox p {
            font-size: 16px;
            padding-top: 10px;
            text-align: center;
        }
        .header { background: #f39e6c }
        .content { background: #f5e5a6 }
        .footer { background: #7b9bcf }

    <!---->

        <!--JavaScript-->$(function () {
            $("#responsiveBox").dxResponsiveBox({
                rows: [
                    { ratio: 1 },
                    { ratio: 2 },
                    { ratio: 0.7 }
                ],
                cols: [
                    { ratio: 1 }
                ]
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><html style="height:100%">
            <!-- ... -->
        </html>
        <body style="height:100%">
            <div id="responsiveBox" dx-responsive-box="{
                rows: [
                    { ratio: 1 },
                    { ratio: 2 },
                    { ratio: 0.7 }
                ],
                cols: [
                    { ratio: 1 }
                ]
            }">
                <div class="header" data-options="dxItem: {
                    location: [
                        { row: 0, col: 0 }
                    ]
                }"> <p>Header</p> </div>
                <div class="content" data-options="dxItem: {
                    location: [
                        { row: 1, col: 0 }
                    ]
                }"> <p>Content</p> </div>
                <div class="footer" data-options="dxItem: {
                    location: [
                        { row: 2, col: 0 }
                    ]
                }"> <p>Footer</p> </div>
            </div>
        </body>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><html style="height:100%">
            <!-- ... -->
        </html>
        <body style="height:100%">
            <div id="responsiveBox" data-bind="dxResponsiveBox: {
                rows: [
                    { ratio: 1 },
                    { ratio: 2 },
                    { ratio: 0.7 }
                ],
                cols: [
                    { ratio: 1 }
                ]
            }">
                <div class="header" data-options="dxItem: {
                    location: [
                        { row: 0, col: 0 }
                    ]
                }"> <p>Header</p> </div>
                <div class="content" data-options="dxItem: {
                    location: [
                        { row: 1, col: 0 }
                    ]
                }"> <p>Content</p> </div>
                <div class="footer" data-options="dxItem: {
                    location: [
                        { row: 2, col: 0 }
                    ]
                }"> <p>Footer</p> </div>
            </div>
        </body>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--HTML--><html style="height:100%">
            <!-- ... -->
        </html>
        <body style="height:100%">
            @(Html.DevExtreme().ResponsiveBox()
                .ID("responsiveBox")
                .Rows(rows => {
                    rows.Add().Ratio(1);
                    rows.Add().Ratio(2);
                    rows.Add().Ratio(0.7);
                })
                .Cols(cols => {
                    cols.Add().Ratio(1);
                })
                .Items(items => {
                    items.Add()
                        .Location(locations => {
                            locations.Add().Row(0).Col(0);
                        })
                        .Template(@<text>
                            <p>Header</p>
                        </text>);
                    items.Add()
                        .Location(locations => {
                            locations.Add().Row(1).Col(0);
                        })
                        .Template(@<text>
                            <p>Content</p>
                        </text>);
                    items.Add()
                        .Location(locations => {
                            locations.Add().Row(2).Col(0);
                        })
                        .Template(@<text>
                            <p>Footer</p>
                        </text>);
                })
            )
        </body>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeresponsiveboxresponsiveboxresponsivebox/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=xwBTIrX6aHk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=47" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [ResponsiveBox - Overview](/Documentation/Guide/Widgets/ResponsiveBox/Overview/)
<!--/fullDescription-->