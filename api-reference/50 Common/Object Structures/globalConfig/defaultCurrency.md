<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'USD'<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
The default currency. Accepts a 3-letter code specified by [ISO 4217](https://www.currency-iso.org/en/home/tables/table-a1.html).
<!--/shortDescription-->

<!--fullDescription-->
[note]Reference Globalize or Intl if you specify a currency other than "USD".

If you use Intl, just assign the currency code to this field.

If you use Globalize, do the following: 

1. Get the *currencies.json* file that corresponds to your culture from one of the folders [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load the contents of this file in your app using one of the methods described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the 3-letter code of the needed currency to this field.


    <!--JavaScript-->DevExpress.config({ defaultCurrency: 'EUR' });

#####See Also#####
- [Localization - Using Globalize](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/)
- [Localization - Using Intl](https://github.com/DevExpress/DevExtreme-Intl#devextreme-intl)
<!--/fullDescription-->