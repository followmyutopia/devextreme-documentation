Create a new <a href="https://devexpress.github.io/devextreme-angular-template" target="_blank">DevExtreme Angular application</a>:

    devextreme new angular-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new angular-app app-name [--layout][--empty]

Add the <a href="https://github.com/DevExpress/devextreme-angular-template#devextreme-angular-template" target="_blank">DevExtreme layout template</a> to an existing Angular application:

    devextreme add angular-template [--layout][--empty][--resolve-conflicts]
    // ===== or =====
    npx -p devextreme-cli devextreme add angular-template [--layout][--empty][--resolve-conflicts]

Add a view to an Angular application that uses the DevExtreme layout template:

    devextreme add view view-name [--icon]
    // ===== or =====
    npx -p devextreme-cli devextreme add view view-name [--icon]
