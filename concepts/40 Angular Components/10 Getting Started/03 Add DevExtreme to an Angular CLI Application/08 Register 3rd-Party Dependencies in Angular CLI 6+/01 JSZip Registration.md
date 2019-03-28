If you want to use the [DataGrid](/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light/) widget, register the [JSZip library](https://stuk.github.io/jszip/) in the `tsconfig.json` file. The widget uses this library for [client-side export to Excel](/Demos/WidgetsGallery/Demo/DataGrid/ExportToExcel/Angular/Light/).

    <!-- tab: tsconfig.json -->
    {
      ...
      "compilerOptions": {
        ...
        "paths": {
          "jszip": [
            "node_modules/jszip/dist/jszip.min.js"
          ]
        }
      }
    }
