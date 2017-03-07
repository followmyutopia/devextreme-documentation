<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Changes the current theme
<!--/d-->
<!--p1d-->The name of a theme to activate. Name is the value of the 'data-theme' attribute of rel='dx-theme' link.<!--/p1d-->
===================================================================
===================================================================

<!--shortDescription-->
Changes the current theme to the specified one.
<!--/shortDescription-->

<!--paramName1-->themeName<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name of the theme to activate.
<!--/paramDescription1-->

<!--fullDescription-->
The theme name passed as a parameter should be the value of the **data-theme** attribute used within the **rel="dx-theme"** links to the theme. For instance, if you have links to two of your themes,...

	<!--HTML--><link rel="dx-theme" data-theme="mytheme-dark" href="css/mytheme-dark.css" data-active="true" />
	<link rel="dx-theme" data-theme="mytheme-light" href="css/mytheme-light.css" data-active="false" />

... you can switch between them in code in the following manner.

	<!--JavaScript-->DevExpress.ui.themes.current('mytheme-light');
	//DevExpress.ui.themes.current('mytheme-dark');

For details on the themes that are supplied with DevExtreme, refer to the [Predefined Themes](/Documentation/Guide/Themes/Predefined_Themes/) article.

<!--/fullDescription-->