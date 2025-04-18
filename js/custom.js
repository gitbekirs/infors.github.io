/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

$(document).ready(function() {
    // Close mobile menu when clicking outside
    $(document).on('click', function(event) {
        var $target = $(event.target);
        var $navbar = $('.navbar-collapse');
        var $toggle = $('.navbar-toggle');
        
        // Check if the click is outside the navbar and toggle button
        if (!$target.closest('.navbar-collapse').length && 
            !$target.closest('.navbar-toggle').length && 
            $navbar.hasClass('in')) {
            $navbar.collapse('hide');
        }

       
    });
});
