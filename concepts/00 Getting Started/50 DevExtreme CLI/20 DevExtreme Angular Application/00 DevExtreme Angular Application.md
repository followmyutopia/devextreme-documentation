Create a new [DevExtreme Angular application](https://devexpress.github.io/devextreme-angular-template):

    devextreme new angular-app app-name [--layout][--empty]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme new angular-app app-name [--layout][--empty]

Add the [DevExtreme layout template](https://github.com/DevExpress/devextreme-angular-template/blob/master/README.md) to an existing Angular application:

    devextreme add angular-template [--layout][--empty][--resolve-conflicts]
    // ===== or =====
    npx -p devextreme-cli devextreme add angular-template [--layout][--empty][--resolve-conflicts]

Add a view to an Angular application that uses the DevExtreme layout template:

    devextreme add view view-name [--icon]
    // ===== or =====
    npx -p devextreme-cli devextreme add view view-name [--icon]
