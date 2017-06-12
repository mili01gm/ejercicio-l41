$(() => {
    let i = 0;
    let puntaje = 0;
    let score = 0;
    let indexImg = 1;
    const imageP = $('#peru img');
    const imageM = $('#mexico img');
    const inputP = $('#peru input');
    const inputM = $('#mexico input');

    $("select").on("change", (e) => {
        e.preventDefault();
        const option = $('#select').val();

        if (option == "peru") {
            $('#mexico').addClass("none");
            $('#peru').toggleClass("none");

            let peruPhoto = "img/fotos/peru/" + peru[i].image;
            let nombre = peru[i].name;
            imageP.attr("src", peruPhoto);
            $('#name').text(nombre);
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
        inputP.attr("autofocus");
        comparePeru(inputP.val());
    });

    function comparePeru(valor) {
        if (valor.toLowerCase() != $('#name').text().toLowerCase()) {
            score++;
            if (score < 5) {
                inputP.val("");
                $('#peru .miss').fadeIn(600).delay(1200).fadeOut(600);
                return score;
            } else if (score >= 5) {
                i += 1;
                puntaje -= 1;
                inputP.val("");
                $('#peru .fail').fadeIn(600).delay(1200).fadeOut(600);
                $('#score').text(puntaje);
                return photoPeru(i);
            }

            $('#peru input').text = "";
            return score;
        } else if (valor.toLowerCase() === peru[i].name.toLowerCase() && score < 5) {
            i++;
            puntaje += 5;
            score = 0;
            inputP.val("");
            $('#peru .done').fadeIn(600).delay(1200).fadeOut(600);
            $('#score').text(puntaje);
            return photoPeru(i);
        }
    }

    function photoPeru(i) {
        peruPhoto = "img/fotos/peru/" + peru[i].image;
        nombre = peru[i].name;
        imageP.attr("src", peruPhoto);
        $('#name').text(nombre);
        inputP.attr("autofocus", "");
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