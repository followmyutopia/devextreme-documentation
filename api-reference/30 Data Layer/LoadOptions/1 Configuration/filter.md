===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
A filter expression.
<!--/shortDescription-->

<!--fullDescription-->
Defines filtering parameters. Possible variants:

* Binary filter

        [ "field", "=", 3 ]

* Unary filter

        [ "!", [ "field", "=", 3 ] ]

* Complex filter

        [
            [ "field", "=", 10 ],
            "and",
            [
                [ "otherField", "<", 3 ],
                "or",
                [ "otherField", ">", 11 ]
            ]
        ]

#####See Also#####
- [DataLayer - Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering)

<!--/fullDescription-->