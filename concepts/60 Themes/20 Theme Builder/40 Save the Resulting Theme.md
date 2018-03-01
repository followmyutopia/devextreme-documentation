Select **Save CSS** from the **Export** menu to save a CSS file with the resulting theme.

![DevExtreme HTML5 JavaScript Theme Builder Import Metadata](/Content/images/doc/18_1/PhoneJS/save_css_button.png)

Link this theme to your project after `dx.common.css` but before the DevExtreme script:

    <!--HTML-->
    <head>
        <link rel="stylesheet" type="text/css" href="css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="css/dx.mycustomtheme.css" />
        <script type="text/javascript" src="js/dx.all.js"></script>
    </head>

[note] Predefined themes are periodically updated and improved. We recommend saving your custom theme's metadata to avoid possible difficulties when upgrading to the latest release. Refer to the [Postpone Customization](/Documentation/Guide/Themes/Theme_Builder/#Postpone_Customization) topic for more details.
