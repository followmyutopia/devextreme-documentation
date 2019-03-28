The [ThemeBuilder UI](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/) is a tool that allows you to create custom themes in the browser; its CLI counterpart allows you to do the same via commands.

Build a custom color scheme:

    devextreme build-theme [--base-theme][--input-file][--make-swatch][--output-file][--output-color-scheme][--help]
    // ===== or without installing the DevExtreme CLI =====
    npx -p devextreme-cli devextreme build-theme [--base-theme][--input-file][--make-swatch][--output-file][--output-color-scheme]

Export theme variables as a `.less` or `.scss` file:

    devextreme export-theme-vars [--base-theme][--input-file][--output-format][--output-file][--base][--help]
    // ===== or =====
    npx -p devextreme-cli devextreme export-theme-vars [--base-theme][--input-file][--output-format][--output-file][--base]

Export theme variables as a `.json` metadata file:

    devextreme export-theme-meta [--base-theme][--input-file][--output-file][--base][--help]
    // ===== or =====
    npx -p devextreme-cli devextreme export-theme-meta [--base-theme][--input-file][--output-file][--base]
