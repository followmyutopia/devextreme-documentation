First, link [cldr.js](https://github.com/rxaviers/cldrjs) scripts, Globalize modules, and DevExtreme localization files to the main page of your app as follows. Note that the order is important. Refer to the [Dependencies](https://github.com/jquery/globalize#1-dependencies) topic when deciding which of the Globalize modules to link. 

    <!--HTML-->
    <script type="text/javascript" src="js/cldr.js"></script>
    <script type="text/javascript" src="js/cldr/event.js"></script>
    <script type="text/javascript" src="js/cldr/supplemental.js"></script>
    <script type="text/javascript" src="js/globalize.js"></script>
    <script type="text/javascript" src="js/globalize/message.js"></script>
    <script type="text/javascript" src="js/globalize/number.js"></script>
    <script type="text/javascript" src="js/globalize/currency.js"></script>
    <script type="text/javascript" src="js/globalize/date.js"></script>
    <script type="text/javascript" src="js/dx.web.js"></script> <!-- or another DevExtreme script -->
    <script type="text/javascript" src="js/localization/dx.messages.de.js"></script>

Next, load the CLDR data for the required locale. See the [CLDR content](https://github.com/globalizejs/globalize#2-cldr-content) topic to learn which of the [CLDR JSONs](https://github.com/unicode-cldr) you need. The following code shows how to load CLDR data into Globalize. Mind the use of the [$.holdReady()](https://api.jquery.com/jquery.holdready/) function that puts widget rendering on hold until CLDR data is loaded.

    <!--JavaScript-->
    $.holdReady(true);
    $.when(
        $.getJSON("lib/js/cldr/main/de/ca-gregorian.json"),
        $.getJSON("lib/js/cldr/main/de/numbers.json"),
        $.getJSON("lib/js/cldr/main/de/currencies.json"),
        $.getJSON("lib/js/cldr/supplemental/likelySubtags.json"),
        $.getJSON("lib/js/cldr/supplemental/timeData.json"),
        $.getJSON("lib/js/cldr/supplemental/weekData.json"),
        $.getJSON("lib/js/cldr/supplemental/currencyData.json"),
        $.getJSON("lib/js/cldr/supplemental/numberingSystems.json")
    ).then(function () {
        // Extracts the JSON from the result
        return [].slice.apply(arguments, [0]).map(function (result) {
            return result[0];
        });
    }).then(
        Globalize.load // Loads JSONs into Globalize
    ).then(function () {
        Globalize.locale("de");
        $.holdReady(false);
    });

#####See Also#####
- [Other ways to load CLDR data into Globalize](https://github.com/globalizejs/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize)
