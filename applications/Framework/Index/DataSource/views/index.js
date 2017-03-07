Application5.Index = function(params) {
    var users = [
        { name: "Bob", hired: 2005 },
        { name: "John", hired: 2007 },
        { name: "Frank", hired: 2001 },
        { name: "Robert", hired: 2007 },
        { name: "Paul", hired: 2011 },
        { name: "Elizabeth", hired: 2000 },
        { name: "Mary", hired: 2002 },
        { name: "Michael", hired: 2003 },
        { name: "George", hired: 2002 },
        { name: "Deborah", hired: 2000 },
        { name: "Lisa", hired: 1999 },
        { name: "Mark", hired: 2011 },
        { name: "Daniel", hired: 2010 },
        { name: "Brian", hired: 2001 },
        { name: "Thomas", hired: 2001 },
        { name: "Barbara", hired: 2008 },
        { name: "Susan", hired: 2003 },
        { name: "Kevin", hired: 2002 },
        { name: "Margaret", hired: 2003 },
        { name: "Steven", hired: 2009 },
        { name: "Brian", hired: 2011 },
        { name: "Patricia", hired: 2002 },
        { name: "Jennifer", hired: 2007 },
        { name: "Jeff", hired: 2002 },
        { name: "Donna", hired: 2002 },
        { name: "Dorothy", hired: 2006 },
        { name: "Jason", hired: 2005 },
        { name: "Ronald", hired: 2007 },
        { name: "Carol", hired: 2002 },
        { name: "Edward", hired: 2001 },
        { name: "Daniel", hired: 2006 },
        { name: "Helen", hired: 2006 }
    ];
    var randomUsers = [];
    for(var i = 0; i < 50; i++) {
        randomUsers.push(users[Math.floor(Math.random() * users.length)]);
    }
    var viewModel = {
        employees: new DevExpress.data.ArrayStore(randomUsers)
    };

    return viewModel;
};