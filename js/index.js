$(() => {
    var i = 0;
    let score = 0;
    let indexImg = 1;

    $("select").on("change", (e) => {
        e.preventDefault();
        const option = $('#select').val();

        if (option == "peru") {
            $('#mexico').addClass("none");
            $('#peru').toggleClass("none");

            var peruPhoto = "img/fotos/peru/" + peru[i].image;
            const image = $('#peru img');
            image.attr("src", peruPhoto);

            function comparePeru(valor) {
                if (valor.toLowerCase() != peru[i].name) {
                    score += 1;
                    console.log(score);
                    return score;
                }
            }

            function photoChange(valor) {
                peruPhoto = "img/fotos/peru/" + peru[valor].image;
                image.attr("src", peruPhoto);
            }

            $('#peru button').on('click', () => {
                comparePeru($('input').val());
                if (score >= 5) {
                    i += 1;
                    photoChange(i);
                }
            });

        } else {
            $('#peru').addClass("none");
            $('#mexico').toggleClass("none");
        }

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
//   if (n > peru.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = peru.length}
//   for (i = 0; i < peru.length; i++) {
//      peru[i].style.display = "none";  
//   }
//   peru[slideIndex-1].style.display = "block";  
// }