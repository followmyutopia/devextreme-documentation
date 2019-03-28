If you want to use [Globalize](https://github.com/globalizejs/globalize#globalize) for localization, install it and the `devextreme-cldr-data` extension:

    npm install --save-dev devextreme-cldr-data globalize

Then, register the Globalize and CLDR scripts in the `tsconfig.json` file...

    <!-- tab: tsconfig.json -->
    {
      ...
      "compilerOptions": {
        ...
        "paths": {
          "globalize": [
            "node_modules/globalize/dist/globalize"
          ],
          "globalize/*": [
            "node_modules/globalize/dist/globalize/*"
          ],
          "cldr": [
            "node_modules/cldrjs/dist/cldr"
          ],
          "cldr/*": [
            "node_modules/cldrjs/dist/cldr/*"
          ],
          "jszip": [
            "node_modules/jszip/dist/jszip.min.js"
          ]
        }
      }
    }

... and create a `typings.d.ts` file in the `src` folder with ambient declarations for Globalize, DevExtreme localization messages, and `devextreme-cldr-data`:

    <!-- tab: typings.d.ts -->
    declare module 'globalize' {
        const value: any;
        export default value;
    }

    declare module 'devextreme/localization/messages/*' {
        const value: any;
        export default value;
    }

    declare module 'devextreme-cldr-data/*' {
        const value: any;
        export default value;
    }

Refer to the [Using Globalize](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize) article for usage examples.

Alternatively, you can [use Intl](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl) as a more lightweight localization solution.
