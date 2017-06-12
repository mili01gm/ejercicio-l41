$(() => {
    let i = 0;
    let score = 0;
    let indexImg = 1;
    const imageP = $('#peru img');
    const imageM = $('#mexico img');
    $('#miss').hide();
    $('#fail').hide();
    $('#done').hide();

    $("select").on("change", (e) => {
        e.preventDefault();
        const option = $('#select').val();

        if (option == "peru") {
            $('#mexico').addClass("none");
            $('#peru').toggleClass("none");

            let peruPhoto = "img/fotos/peru/" + peru[i].image;
            imageP.attr("src", peruPhoto);

        } else {
            $('#peru').addClass("none");
            $('#mexico').toggleClass("none");

            let mexPhoto = "img/fotos/mexico/" + mexico[i].image;
            imageM.attr("src", mexPhoto);
        }

    });

    // Funciones PERU
    $('#peru button').on('click', (e) => {
        e.preventDefault();
        comparePeru($('#peru input').val());
    });

    function comparePeru(valor) {
        if (valor.toLowerCase() != peru[i].name.toLowerCase()) {
            score += 1;
            if (score < 5) {
                $('#peru input').val(" ");
                $('#miss').show();
                setTimeout($('#miss').hide(), 2000);

                return score;
            } else if (score >= 5) {
                i += 1;
                return photoPeru(i);
            }

            $('#peru input').text = "";
            return score;
        } else if (valor.toLowerCase() === peru[i].name.toLowerCase()) {
            i += 1;
            score = 0;
            return photoPeru(i);
        }
    }

    function photoPeru(valor) {
        peruPhoto = "img/fotos/peru/" + peru[valor].image;
        imageP.attr("src", peruPhoto);
        score = 0;
    };

    //Funciones MEXICO
    function compareMex(valor) {
        if (valor.toLowerCase() != mexico[i].name) {
            score += 1;
            return score;
        }
    }

    function photoMex(valor) {
        mexPhoto = "img/fotos/mexico/" + mexico[valor].image;
        $()
        imageM.attr("src", mexPhoto);
        score = 0;
    }

    $('#mexico button').on('click', (e) => {
        e.preventDefault();
        compareMex($('input').val());
        if (score >= 5) {
            i += 1;
            photoMex(i);
        }
    });

})