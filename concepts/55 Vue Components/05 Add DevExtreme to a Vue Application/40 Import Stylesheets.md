Open the main component file (`main.js`) and import `dx.common.css` and a [predefined theme stylesheet](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) (`dx.light.css` in the code below). Alternatively, you can import the stylesheets in the component where DevExtreme widgets are used. The syntax is the same.

    <!-- tab: main.js -->
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    // ...

[note] [SVG-based widgets](/Documentation/Guide/Themes_and_Styles/HTML-_and_SVG-Based_Widgets/) do not require theme stylesheets. If you do import the stylesheets, the widgets apply an appearance that matches them.

[tags] theme