Open the view with controls to localize, add a `<script>` tag to the bottom, and call the **Globalize.locale** method to set the current locale.

    <!--Razor C#-->
    <script>
        Globalize.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

    <!--Razor VB-->
    <script>
        Globalize.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

<a href="/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
