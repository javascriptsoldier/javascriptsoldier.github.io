$(document).ready(function() {
    document.getElementById('navBarMenu').innerHTML = loadPage('nav.html');

    function loadPage(href) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    document.getElementById('socialDiv').innerHTML = loadPage('social.html');

    $('.text').on('click', function() {
        $('.menu .text span:first-child').toggleClass('bar-one');
        $('.menu .text span:eq(1)').toggleClass('bar-two');
        $('.menu .text span:last-child').toggleClass('bar-three');
        $('.projectsPage, .eduactionPage, .experience-page, .homePage').toggleClass('class-fixed');
        $('.menu-item').toggleClass('left');
    });

    $('#closeProject').on('click', function() {
        $('#viewProject').slideUp("slow");
    });

    $('.projects-ul .btn').on('click', function() {
        var src = $(this).attr('data-src');
        var val = $(this).text();

        $('#viewProject').slideDown("slow");

        $('#viewProject iframe').attr('src', src);
        $('#viewProject a').attr('href', src);
        $('#viewProject a').text(src);

        $('#viewProject iframe').removeClass('desktop mobile');

        if (val == "Desktop") {
            $('#viewProject iframe').addClass('desktop');
        } else if (val == "Mobile") {
            $('#viewProject iframe').addClass('mobile');
        }
         else if (val == "Details") {
            $('#viewProject iframe').addClass('desktop');
        }
    });
});
