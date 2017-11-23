<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the currency code. Applies only if [type](/Documentation/ApiReference/Common/Object_Structures/format/#type) is *"currency"*.
<!--/shortDescription-->

<!--fullDescription-->
[note]Reference Globalize or Intl if you specify a currency code other than "USD".

This option accepts a 3-letter code specified by [ISO 4217](http://www.currency-iso.org/en/home/tables/table-a1.html) for each currency. If you use Intl, just assign the code to this option. If you use Globalize, do the following: 

1. Get the *currencies.json* file that corresponds to your culture from one of the folders [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load the contents of this file in your app using one of the methods described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the 3-letter code of the needed currency to this option.

Alternatively, you can assign *"default"* to this option, in which case, the [global default currency](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#defaultCurrency) is applied.

#####See Also#####
- **format**.[precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision)
- [Localization - Using Globalize](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/)
- [Localization - Using Intl](https://github.com/DevExpress/DevExtreme-Intl#devextreme-intl)
<!--/fullDescription-->