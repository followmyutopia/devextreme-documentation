Add `devexpress-diagram` resources (scripts and styles) onto the page. You can access the resources through npm or CDN.

- **npm**

    Install the `devexpress-diagram` package.

        npm install devexpress-diagram --save

    Add the `dx.diagram.css` and `dx.diagram.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devexpress-diagram/dx.diagram.css">
        <script type="text/javascript" src="node_modules/devexpress-diagram/dx.diagram.js"></script>

- **CDN**

    Add the `dx.diagram.css` and `dx.diagram.js` files to your page.

        <!--HTML-->
        <link rel="stylesheet" href="https://unpkg.com/devexpress-diagram/dx.diagram.css">
        <script src="https://unpkg.com/devexpress-diagram/dx.diagram.js"></script>

    Initialize the **Diagram** widget in a DOM element.

        <!--JavaScript-->
        $(function() {
            $("#diagram").dxDiagram();
        });

    <!---->
        
        <!--HTML-->
        <div id="diagram"></div>

![Diagram control](Content/images/doc/19_1/diagram/overview.png)
