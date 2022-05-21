angular.module( 'being-fluid' ).controller( "HomeController", HomeController );

HomeController.$inject = [];

function HomeController(  ) {
    this.welcome_message = "Hello, I'm Vishal Ingle.";
    this.welcome_short_desc = "I'm a Developer & Business Analyst based in India.";
    this.welcome_desc = "I love to explore and learn new things. Programming and writing is something I'm passionate about.";
}