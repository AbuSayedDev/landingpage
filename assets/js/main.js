;(function ($) {
    "use strict";
    $(document).on('ready', function () {

        $('.single-portfolio').each( function() { $(this).hoverdir(); } );
        
        // Portfolio Image Loded with Masonry
        var PortfolioMasonry = $('.portfolios');
        if (typeof imagesLoaded == 'function') {
            imagesLoaded(PortfolioMasonry, function () {
                setTimeout(function () {
                    PortfolioMasonry.isotope({
                        itemSelector: '.filter-item',
                        resizesContainer: false,
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                }, 500);

            });
        };
        // Set Active Class for Portfolio filter
        $('.filter-menu li').on('click', function (event) {
            $('.filter-menu li').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        // Filter JS for Porrtfolio
        $('.filter-menu').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            PortfolioMasonry.isotope({
                filter: filterValue
            });
        });
    });  

})(jQuery);