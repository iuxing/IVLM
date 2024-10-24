// CAROUSEL

$(function () {

    if ($('.tip-cards.owl-2').length > 0) {
        $('.tip-cards.owl-2').owlCarousel({
            center: false,
            items: 1.5,
            loop: true,
            rtl: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: false,
            dots: true,
            pauseOnHover: false,
            responsive: {
                300: {
                    margin: 20,
                    nav: false,
                    items: 1
                },
                600: {
                    margin: 20,
                    nav: false,
                    items: 1.1
                },
                1000: {
                    margin: 20,
                    stagePadding: 0,
                    nav: false,
                    items: 1
                }
            }
        });
    }



    if ($('.prog-cards.owl-2').length > 0) {
        $('.prog-cards.owl-2').owlCarousel({
            center: false,
            items: 5,
            loop: true,
            rtl: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: false,
            dots: true,
            pauseOnHover: false,
            responsive: {
                300: {
                    margin: 20,
                    nav: false,
                    items: 1.25
                },
                600: {
                    margin: 20,
                    nav: false,
                    items: 2
                },
                1000: {
                    margin: 20,
                    stagePadding: 0,
                    nav: false,
                    items: 3.5
                }
            }
        });
    }



    if ($('.appointment-cards.owl-2').length > 0) {
        $('.appointment-cards.owl-2').owlCarousel({
            center: false,
            items: 3,
            loop: true,
            rtl: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: false,
            dots: true,
            pauseOnHover: false,
            responsive: {
                300: {
                    margin: 10,
                    nav: false,
                    items: 1
                },
                600: {
                    margin: 20,
                    nav: false,
                    items: 2
                },
                1000: {
                    margin: 20,
                    stagePadding: 0,
                    nav: false,
                    items: 2
                }
            }
        });
    }

})


/* SELECT 2 */

if ($('.select2').length) {
    $(".select2").select2({
        dir: "rtl",
        placeholder: 'الرجاء التحديد',
        dropdownParent: $('.modal .modal-content')
    });

}

/* DATEPICKER */





// COPY TO CLIPBOARD

function CopyContent(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select().createTextRange();
        
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
        
        //alert("Text has been copied, now paste in the text-area")
        var myAlert = document.getElementById('CopySuccess');//select id of toast
        var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
        bsAlert.show();//show it
    }
}



function CreatePDFfromHTML() {
    var HTML_Width = $(".cv-print").width();
    var HTML_Height = $(".cv-print").height();

    var top_left_margin = 5;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($(".cv-print")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }
        pdf.save("Resume.pdf");

    });
}