Open the `index.html` file and reference `dx.common.css` and a [predefined theme stylesheet](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) (`dx.light.css` in the code below).

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
        <!-- ... -->
    </head>

[note] [SVG-based widgets](/Documentation/Guide/Themes_and_Styles/HTML-_and_SVG-Based_Widgets/) do not require theme stylesheets. If you do reference the stylesheets, the widgets apply an appearance that matches them.