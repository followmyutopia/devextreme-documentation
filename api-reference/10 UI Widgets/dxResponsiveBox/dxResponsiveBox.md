<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_responsive_box">ui/responsive_box</a><!--/module-->
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

        <!--CSS-->#responsiveBox p {
            font-size: 16px;
            padding-top: 10px;
            text-align: center;
        }
        .header { background: #f39e6c }
        .content { background: #f5e5a6 }
        .footer { background: #7b9bcf }

- [**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <dx-responsive-box>
            <dxi-row [ratio]="1"></dxi-row>
            <dxi-row [ratio]="2"></dxi-row>
            <dxi-row [ratio]="0.7"></dxi-row>
            <dxi-col [ratio]="1"></dxi-col>
            <dxi-item class="header">
                <dxo-location [row]="0" [col]="0"></dxo-location>
                <p>Header</p>
            </dxi-item>
            <dxi-item class="content">
                <dxo-location [row]="1" [col]="0"></dxo-location>
                <p>Content</p>
            </dxi-item>
            <dxi-item class="footer">
                <dxo-location [row]="2" [col]="0"></dxo-location>
                <p>Footer</p>
            </dxi-item>
        </dx-responsive-box>

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

        <!--CSS-->#responsiveBox p {
            font-size: 16px;
            padding-top: 10px;
            text-align: center;
        }
        .header { background: #f39e6c }
        .content { background: #f5e5a6 }
        .footer { background: #7b9bcf }

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

        <!--CSS-->#responsiveBox p {
            font-size: 16px;
            padding-top: 10px;
            text-align: center;
        }
        .header { background: #f39e6c }
        .content { background: #f5e5a6 }
        .footer { background: #7b9bcf }

- [**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

        <!--Razor C#--><html style="height:100%">
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
                        .Template("<p>Header</p>")
                        .Location(locations => {
                            locations.Add().Row(0).Col(0);
                        });
                    items.Add()
                        .Template("<p>Content</p>")
                        .Location(locations => {
                            locations.Add().Row(1).Col(0);
                        });
                    items.Add()
                        .Template("<p>Footer</p>")
                        .Location(locations => {
                            locations.Add().Row(2).Col(0);
                        });
                })
            )
        </body>

        <!--Razor VB--><html style="height:100%">
            <!-- ... -->
        </html>
        <body style="height:100%">
            @(Html.DevExtreme().ResponsiveBox() _
                .ID("responsiveBox") _
                .Rows(Sub(rows)
                    rows.Add().Ratio(1)
                    rows.Add().Ratio(2)
                    rows.Add().Ratio(0.7)
                End Sub) _
                .Cols(Sub(cols)
                    cols.Add().Ratio(1)
                End Sub) _
                .Items(Sub(items)
                    items.Add() _
                        .Template("<p>Header</p>") _
                        .Location(Sub(locations)
                            locations.Add().Row(0).Col(0)
                        End Sub)
                    items.Add() _
                        .Template("<p>Content</p>") _
                        .Location(Sub(locations)
                            locations.Add().Row(1).Col(0)
                        End Sub)
                    items.Add() _
                        .Template("<p>Footer</p>") _
                        .Location(Sub(locations)
                            locations.Add().Row(2).Col(0)
                        End Sub)
                End Sub)
            )
        </body>

        <!--CSS-->#responsiveBox p {
            font-size: 16px;
            padding-top: 10px;
            text-align: center;
        }
        .header { background: #f39e6c }
        .content { background: #f5e5a6 }
        .footer { background: #7b9bcf }

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeresponsiveboxresponsiveboxresponsivebox/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=xwBTIrX6aHk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=47" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [ResponsiveBox - Overview](/Documentation/Guide/Widgets/ResponsiveBox/Overview/)
<!--/fullDescription-->