/// <reference path="../js/jquery-1.9.1.min.js"; />
/// <reference path="../js/knockout-2.2.1.js"; />
/// <reference path="../js/dxtreme.core-13.1.js"; />

(function() {
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
                  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
                  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
                  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
                  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    var users = [
	    {
            id: 1,
	        name: "Charlotte C. Richards",
	        address: "1571 Badger Pond Lane Pittsburgh, PA 15212",
	        phone: "724-994-1666",
	        birthday: "April 22, 1979",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Pennsylvania")
	        }
	    },
	    {
	        id: 2,
	        name: "Sharon S. Hunter",
	        address: "3535 Cerullo Road Louisville, KY 40242",
	        phone: "502-394-8809",
	        birthday: "July 6, 1946",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Kentucky")
	        }
	    },
	    {
	        id: 3,
	        name: "Robert D. Morgan",
	        address: "3633 County Line Road New Port Richey, FL 34652",
	        phone: "727-846-3138",
	        birthday: "August 30, 1990",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Florida")
	        }
	    },
	    {
	        id: 4,
	        name: "Jimmy J. Deering",
	        address: "4025 Locust View Drive San Francisco, CA 94107",
	        phone: "415-886-7923",
	        birthday: "July 8, 1962",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("California")
	        }
	    },
	    {
	        id: 5,
	        name: "Norman M. Munro",
	        address: "1221 Jarvisville Road New York, NY 10011",
	        phone: "516-945-6557",
	        birthday: "August 7, 1974",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("New York")
	        }
	    },
	    {
	        id: 6,
	        name: "Summer M. Basham",
	        address: "1842 Shearwood Forest Drive Manchester, NH 03103",
	        phone: "603-280-4243",
	        birthday: "December 19, 1992",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("New Hampshire")
	        }
	    },
	    {
	        id: 7,
	        name: "Charles B. Crenshaw",
	        address: "1767 Hemlock Lane Harlingen, TX 78550",
	        phone: "956-437-8862",
	        birthday: "November 13, 1964",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Texas")
	        }
	    },
	    {
	        id: 8,
	        name: "Franklin F. Gillen",
	        address: "1121 Roane Avenue Bethesda, MD 20014",
	        phone: "301-227-7753",
	        birthday: "July 23, 1984",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Maryland")
	        }
	    },
	    {
	        id: 9,
	        name: "Anthony S. Brooks",
	        address: "2716 Hillcrest Lane Los Angeles, CA 90017",
	        phone: "949-877-3748",
	        birthday: "January 24, 1986",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("California")
	        }
	    },
	    {
	        id: 10,
	        name: "John J. Dempsey",
	        address: "4713 Harvest Lane Westboro, MO 64498",
	        phone: "660-984-8700",
	        birthday: "July 20, 1973",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Missouri")
	        }
	    },
	    {
	        id: 11,
	        name: "Richard A. Wright",
	        address: "3138 Luke Lane Tulsa, OK 74120",
	        phone: "580-305-9374",
	        birthday: "March 3, 1991",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Oklahoma")
	        }
	    },
	    {
	        id: 12,
	        name: "Patricia R. Duren",
	        address: "2680 Bridge Avenue Reeves, LA 70658",
	        phone: "337-666-4241",
	        birthday: "July 24, 1960",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Louisiana")
	        }
	    },
	    {
	        id: 13,
	        name: "Ronald C. Moore",
	        address: "1956 Cottrill Lane Saint Louis, MO 63108",
	        phone: "314-388-6699",
	        birthday: "January 30, 1968",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Missouri")
	        }
	    },
	    {
	        id: 14,
	        name: "Eric E. Davis",
	        address: "4987 Calico Drive Coeur D Alene, WA 83814",
	        phone: "509-589-6963",
	        birthday: "December 20, 1981",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Washington")
	        }
	    },
	    {
	        id: 15,
	        name: "Frank N. Stone",
	        address: "1191 School Street Washington, WA 20009",
	        phone: "202-884-7960",
	        birthday: "May 29, 1932",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Washington")
	        }
	    },
	    {
	        id: 16,
	        name: "Hope T. Tucker",
	        address: "859 Green Street Hillsdale, TN 37057",
	        phone: "615-633-4488",
	        birthday: "May 22, 1963",
	        active: true,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Tennessee")
	        }
	    },
	    {
	        id: 17,
	        name: "Leslie W. Boudreaux",
	        address: "1160 Lake Forest Drive Lawrence, KS 66044",
	        phone: "913-955-5822",
	        birthday: "August 6, 1986",
	        active: false,
	        state: {
	            data: states,
	            selectedValue: ko.observable("Kansas")
	        }
	    }
    ];
    WidgetDemo.db = {
        users: new DevExpress.data.ArrayStore(users)
    };
})();