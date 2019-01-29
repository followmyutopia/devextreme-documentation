Select **Save CSS** from the **Export** menu to save a CSS file with the resulting theme.

![DevExtreme HTML5 JavaScript Theme Builder Import Metadata](/Content/images/doc/19_1/PhoneJS/save_css_button.png)

Link this theme to your project after `dx.common.css` but before the DevExtreme script:

    <!--HTML-->
    <head>
        <link rel="stylesheet" type="text/css" href="css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="css/dx.mycustomtheme.css" />
        <script type="text/javascript" src="js/dx.all.js"></script>
    </head>

[note] We periodically remove and remap unused constants to optimize our predefined themes. This can cause compatibility issues when you upgrade custom themes. We recommend saving your theme's metadata to enable you to fix these issues. Refer to the [Postpone Customization](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Postpone_Customization) topic for more details.