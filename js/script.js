var $window = $(window); $window.on('load', function () { $('#preloader').fadeOut('slow', function () { $(this).remove(); }); }); $(document).ready(function () { var bodytag = document.getElementsByTagName("body"); $("#dark-mode").click(function () { $(bodytag).toggleClass("dark-theme"); }); }); $(document).ready(function () { var bodytag2 = document.getElementsByTagName("body"); $("#arabic-dark-mode").click(function () { $(bodytag2).toggleClass("dark-theme"); }); });