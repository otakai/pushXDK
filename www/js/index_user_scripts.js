/*jshint browser:true */
/*global $ */(function() {
    "use strict";
    /*
       hook up event handlers 
    */
    function register_event_handlers() {
        /* button  #btSendEmail */
        $(document).on("click", "#btSendEmail", function(evt) {
            /* your code goes here */
            cordova.plugins.email.open({
                to: 'otakai@gmail.com',
                subject: 'Register ID do APP',
                body: 'RegID: ' + $('#regid').text(),
                isHtml: true
            });
        });
    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();
