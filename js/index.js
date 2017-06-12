$(() => {
    let i = Math.floor(Math.random() * peru.length);
    let j = Math.floor(Math.random() * mexico.length);
    let puntaje = 0;
    let score = 0;
    let fails = 0;
    let studentsP = 0;
    let studentsM = 0;
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
            puntaje = 0;
        } else {
            $('#peru').addClass("none");
            $('#mexico').toggleClass("none");

            let mexPhoto = "img/fotos/mexico/" + mexico[j].image;
            let nombre = mexico[j].name;
            imageM.attr("src", mexPhoto);
            $('#mexico-name').text(nombre);
            puntaje = 0;
        }
    });

    // Funciones PERU
    $('#peru button').on('click', (e) => {
        e.preventDefault();
        comparePeru(inputP.val());
        if (studentsP == peru.lenght - 1 || fails === 3) {
            $('#peru').toggleClass('none');
            $('#final').toggleClass('none');
            $('#final-score').text(puntaje);
        }
    });

    function comparePeru(valor) {
        if (valor.toLowerCase() != $('#name').text().toLowerCase()) {
            score++;
            if (score < 5) {
                inputP.val("");
                $('#peru .miss').fadeIn(600).delay(1200).fadeOut(600);
                return score;
            } else if (score >= 5) {
                i = Math.floor(Math.random() * peru.length);
                puntaje -= 1;
                fails += 1;
                studentsP += 1;
                inputP.val("");
                $('#peru .fail').fadeIn(600).delay(1200).fadeOut(600);
                $('#score').text(puntaje);
                return photoPeru(i);
            }

            $('#peru input').text = "";
            return score;
        } else if (valor.toLowerCase() === peru[i].name.toLowerCase() && score < 5) {
            i = Math.floor(Math.random() * peru.length);
            puntaje += 5;
            studentsP += 1;
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
        imageP.fadeIn(2000).attr("src", peruPhoto);
        $('#name').text(nombre);
        inputP.attr("autofocus", "");
        score = 0;
    };

    // Funciones MEXICO
    $('#mexico button').on('click', (e) => {
        e.preventDefault();
        compareMex(inputM.val());
        if (studentsM == mexico.lenght - 1 || fails === 3) {
            $('#mexico').toggleClass('none');
            $('#final').toggleClass('none');
            $('#final-score').text(puntaje);
        }
    });

    function compareMex(valor) {
        if (valor.toLowerCase() != $('#name').text().toLowerCase()) {
            score++;
            if (score < 5) {
                inputM.val("");
                $('#mexico .miss').fadeIn(600).delay(1200).fadeOut(600);
                return score;
            } else if (score >= 5) {
                j = Math.floor(Math.random() * mexico.length);
                puntaje -= 1;
                fails += 1;
                studentsM += 1;
                inputM.val("");
                $('#mexico .fail').fadeIn(600).delay(1200).fadeOut(600);
                $('#score').text(puntaje);
                return photoMex(j);
            }
            return score;
        } else if (valor.toLowerCase() === mexico[j].name.toLowerCase() && score < 5) {
            j = Math.floor(Math.random() * mexico.length);
            puntaje += 5;
            studentsM += 1;
            score = 0;
            inputM.val("");
            $('#mexico .done').fadeIn(600).delay(1200).fadeOut(600);
            $('#score').text(puntaje);
            return photoMex(j);
        }
    }

    function photoMex(j) {
        mexPhoto = "img/fotos/mexico/" + mexico[j].image;
        nombre = mexico[j].name;
        imageM.fadeIn(2000).attr("src", mexPhoto);
        $('#mexico-name').text(nombre);
        inputM.attr("autofocus", "");
        score = 0;
    };
})