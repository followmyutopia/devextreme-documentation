The widget's **icon** option accepts URLs, so you can assign the image's URL to it. However, it is better to encode the image in the Base64 type instead to reduce the amount of transferred data. Search for an image to Base64 converter on the web.

Although Base64 code can be assigned directly to the **icon** option, we recommend placing it in the CSS because of its length. Add the following CSS rule to your stylesheet:

    <!--CSS-->
    .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE IS HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

`customicon` here is the icon's name that you should [assign to the widget's **icon** option](/Documentation/Guide/Themes_and_Styles/Icons/#Icons_in_Widgets).

If the same icon should be different in the Generic and Material Design themes, make the rule more specific by adding the `.dx-theme-generic` or `.dx-theme-material` selector:

    <!--CSS-->
    .dx-theme-generic .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE GOES HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

    .dx-theme-material .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE GOES HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

In addition, you can provide a specific icon variant for different states of a widget element. In the following code, a special icon is provided for selected tabs:

    <!--CSS-->
    .dx-theme-generic .dx-tab-selected .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE GOES HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

Classes like `dx-tab-selected` from the previous example are not documented. [Inspect CSS rules](https://www.devexpress.com/Support/Center/Question/Details/K18570/how-to-inspect-css-rules) to find out which classes are added to the widget element you are customizing.