<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies a currency for the currency formatting.
If the 'type' field is not defined, the 'currency' field is required for enabling currency formatting. Use 'default' value for using currency from DevExpress.config()
Accepts 'default' string or a 3-letter currency code as defined by ISO 4217, eg. 'USD'.<!--/d-->
===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the currency code for the *'currency'* format.
<!--/shortDescription-->

<!--fullDescription-->
[note]The use of currency formats rather than 'USD' requires Globalize libraries to be referenced within your application. For more information on using Globalize library, refer to the [Localization](/Documentation/Guide/UI_Widgets/Common/Localization/) guide.

This option accepts a 3-letter code specified by [ISO 4217](http://www.currency-iso.org/en/home/tables/table-a1.html) for each currency. Alternatively, you can set this option to *'default'*, in which case, the global default currency will be applied.

The global default currency is specified by the **defaultCurrency** field of the object returned by the **DevExpress.config()** method. By default, it is *'USD'*. To change it, use the following code.

    <!--JavaScript-->DevExpress.config({ defaultCurrency: 'EUR' });
    
To use any currency that differs from USD, follow these steps.

1. Get the *currencies.json* file that corresponds to your culture from one of the folders [here](https://github.com/unicode-cldr/cldr-numbers-modern/tree/master/main).
2. Load the contents of this file in your app using one of the methods described [here](https://github.com/jquery/globalize/blob/master/doc/cldr.md#how-do-i-load-cldr-data-into-globalize).
3. Assign the 3-letter code of the needed currency to the **currency** option.

#####See Also#####
- **format** | [precision](/Documentation/ApiReference/Common/Object_Structures/format/#precision) - specifies the precision of values that have the currency format.
<!--/fullDescription-->