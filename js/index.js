$(() => {
    let i = 0;
    let score = 0;
    let indexImg = 1;
    const imageP = $('#peru img');
    const imageM = $('#mexico img');

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
    function comparePeru(valor) {
        if (valor.toLowerCase() != peru[i].name) {
            score += 1;
            $('#peru input').text = "";
            return score;
        }
    }

    function photoPeru(valor) {
        peruPhoto = "img/fotos/peru/" + peru[valor].image;
        $()
        imageP.attr("src", peruPhoto);
        score = 0;
    }

    $('#peru button').on('click', (e) => {
        e.preventDefault();
        comparePeru($('input').val());
        if (score >= 5) {
            i += 1;
            photoPeru(i);
        }
    });

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