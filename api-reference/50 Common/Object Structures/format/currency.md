===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the currency code. Applies only if the [type](/Documentation/ApiReference/Common/Object_Structures/format/#type) is *"currency"*.
<!--/shortDescription-->

<!--fullDescription-->
[note] [Reference Globalize or Intl](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/) if you specify a currency code other than "USD".

This option accepts a 3-letter [ISO 4217](http://www.currency-iso.org/en/home/tables/table-a1.html) code for each currency. Assign the code to this option if you use Intl, or do the following if you use Globalize: 

1. Get the *currencies.json* file that corresponds to your culture from a folder [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load this file's contents in your app using a method described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the currency's 3-letter code to this option.

Alternatively, you can assign *"default"* to this option to apply the [global default currency](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#defaultCurrency).

#####See Also#####
- **format**.[precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision)
- [Localization](/Documentation/Guide/Common/Localization/)
<!--/fullDescription-->
