$(() => {
    $("select").on("change", (e) => {
        e.preventDefault();
        const option = $('#select').val();
        const i = 0;

        if (option == "peru") {
            $('#mexico').addClass("none");
            $('#peru').toggleClass("none");

            const peruPhoto = "img/fotos/peru/" + peru[i].image;
            const image = $('#peru img');
            image.attr("src", peruPhoto);

        } else {
            $('#peru').addClass("none");
            $('#mexico').toggleClass("none");
        }
    });

    let score = 0;
    let indexImg = 1;


    function compare(valor) {
        if (valor.toLowerCase() != peru[i].name) {
            score++;
        }
    }

    function showPhoto(elem) {


    }

    $('button').on('click', () => {
        compare($('input').val());

    });
    // for (i = 0; i < peru.lenght;) {
    //     const photo = peru[i].image;
    //     image.attr("src", "img/fotos/peru/" + photo);

    //     if ($('#coder-name').val().toLowerCase() != peru[i].name.toLowerCase()) {
    //         trial++;
    //         if (trial >= 5) {
    //             i++;
    //         }
    //     }
    // }

})



// var slideIndex = 1;
// showDivs(slideIndex);

// function showDivs(n) {
//   var i;
//   if (n > peru.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = peru.length}
//   for (i = 0; i < peru.length; i++) {
//      peru[i].style.display = "none";  
//   }
//   peru[slideIndex-1].style.display = "block";  
// }