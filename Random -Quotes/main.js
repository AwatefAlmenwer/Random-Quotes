let quotes = [
    {
        "quote" :"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        "author":"David Brinkley"
    }, {
        "quote" : "Those who dare to fail miserably can achieve greatly.",
        "author": "John F. Kennedy"
    }, {
        "quote" : "I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time",
        "author": "Herbert Bayard Swope"
    }, {
        "quote" : "It is hard to fail, but it is worse never to have tried to succeed",
        "author":" Theodore Roosevelt"
    }, {
        "quote" :"I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down",
        "author":"Abraham Lincoln"
    },{
        "quote" :"Let us always meet each other with smile, for the smile is the beginning of love",
        "author": "Mother Theresa"

    }, {
        "quote" : "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "author":"Joshua J. Marine"
    }, {
        "quote" : "Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter",
        "author": " Francis Chan"
    }, {
        "quote" :"Remember that the happiest people are not those getting more, but those giving more",
        "author":" H. Jackson Brown, Jr"
    },{
        "quote" :"If you want to be happy, be",
        "author":"Leo Tolstoy"
    }
]
const $btn = $('#btn');

$btn.click( function (){
    let number = Math.floor(Math.random()*quotes.length);

    $('#quote').html('<span></span>' +quotes[number].quote );
    $('#author').html('<span>--</span>' +quotes[number].author );
});