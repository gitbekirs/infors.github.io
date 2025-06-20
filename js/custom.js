// Mobil menüde bir linke tıklandığında menüyü otomatik kapat
jQuery(document).ready(function($) {
    $('.navbar-collapse ul li a').click(function() {
        // Hamburger menü butonu görünür ise (yani mobil ekranda isek)
        if ($('.navbar-toggle').is(':visible')) {
            // Hamburger menü butonuna tıkla (menüyü kapatır)
            $('.navbar-toggle').click();
        }
    });
});

