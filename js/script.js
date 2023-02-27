const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "Realismo mágico" },
    { titulo: "1984", autor: "George Orwell", genero: "Ciencia ficción" },
    { titulo: "Matar a un ruiseñor", autor: "Harper Lee", genero: "Novela" },
    { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", genero: "Novela" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "Novela" },
    { titulo: "El nombre de la rosa", autor: "Umberto Eco", genero: "Novela" },
    { titulo: "Los hermanos Karamazov", autor: "Fiódor Dostoyevski", genero: "Novela" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "Novela romántica" },
    { titulo: "La insoportable levedad del ser", autor: "Milan Kundera", genero: "Novela" },
    { titulo: "El conde de Montecristo", autor: "Alejandro Dumas", genero: "Novela de aventuras" },
    { titulo: "La naranja mecánica", autor: "Anthony Burgess", genero: "Ciencia ficción" },
    { titulo: "El proceso", autor: "Franz Kafka", genero: "Novela" },
    { titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", genero: "Novela de terror" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", genero: "Fantasía" },
    { titulo: "La Ilíada", autor: "Homero", genero: "Epopeya" },
    { titulo: "La Odisea", autor: "Homero", genero: "Epopeya" },
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Novela" },
    { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", genero: "Novela" },
    { titulo: "Moby Dick", autor: "Herman Melville", genero: "Novela" },
    { titulo: "Rayuela", autor: "Julio Cortázar", genero: "Novela" },
    { titulo: "La muerte de Artemio Cruz", autor: "Carlos Fuentes", genero: "Novela" },
    { titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", genero: "Novela" },
    { titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", genero: "Novela" },
    { titulo: "Las batallas en el desierto", autor: "José Emilio Pacheco", genero: "Novela" },
    { titulo: "Breve historia del tiempo", autor: "Stephen Hawking", genero: "Ciencia" },
    { titulo: "El arte de amar", autor: "Erich Fromm", genero: "Autoayuda" },
    { titulo: "El poder del ahora", autor: "Eckhart Tolle", genero: "Autoayuda" },
    { titulo: "Sapiens: De animales a dioses", autor: "Yuval Noah Harari", genero: "Historia" },
    { titulo: "La ciencia de la meditación", autor: "Daniel Goleman y Richard Davidson", genero: "Ciencia" },
    { titulo: "El origen de las especies", autor: "Charles Darwin", genero: "Ciencia" },
    { titulo: "El hombre en busca de sentido", autor: "Viktor Frankl", genero: "Psicología" },
    { titulo: "La inteligencia emocional", autor: "Daniel Goleman", genero: "Psicología" },
    { titulo: "Meditaciones", autor: "Marco Aurelio", genero: "Filosofía" },
    { titulo: "La interpretación de los sueños", autor: "Sigmund Freud", genero: "Psicología" },
    { titulo: "El contrato social", autor: "Jean-Jacques Rousseau", genero: "Política" },
    { titulo: "1984", autor: "George Orwell", genero: "Política" },
    { titulo: "Una breve historia de casi todo", autor: "Bill Bryson", genero: "Ciencia" },
    { titulo: "El príncipe", autor: "Maquiavelo", genero: "Política" },
    { titulo: "La guerra del fin del mundo", autor: "Mario Vargas Llosa", genero: "Historia" },
    { titulo: "El cerebro y la inteligencia emocional", autor: "Daniel Goleman", genero: "Ciencia" },
    { titulo: "Breve historia de la filosofía", autor: "Javier Sádaba", genero: "Filosofía" },
    { titulo: "El mundo como voluntad y representación", autor: "Arthur Schopenhauer", genero: "Filosofía" },
    { titulo: "Armas, gérmenes y acero", autor: "Jared Diamond", genero: "Historia" },
    { titulo: "El universo en una cáscara de nuez", autor: "Stephen Hawking", genero: "Ciencia" },
    { titulo: "El cerebro y la música", autor: "Daniel J. Levitin", genero: "Ciencia" },
    { titulo: "La teoría del todo", autor: "Stephen Hawking", genero: "Ciencia" },
    { titulo: "La anatomía de la melancolía", autor: "Robert Burton", genero: "Psicología" },
    { titulo: "El origen de la familia, la propiedad privada y el estado", autor: "Friedrich Engels", genero: "Política" }
];

function getBookRecommendations(books) {
    const categories = {
        1: {
            name: "Ficción",
            theme: {
                1: "Realismo Mágico",
                2: "Ciencia ficción",
                3: "Novela",
                4: "Novela de aventuras",
                5: "Novela de terror",
                6: "Fantasía",
                7: "Epopeya"
            }
        },
        2: {
            name: "No Ficción",
            theme: {
                1: "Política",
                2: "Psicología",
                3: "Ciencia",
                4: "Historia",
                5: "Autoayuda",
                6: "Filosofía"
            }
        },
    }
    function chooseCategory() {
        let category = null;
        while (category === null) {
            let input = parseInt(prompt(`Elige una categoria: \n1. ${categories[1].name}\n2. ${categories[2].name}`))
            if (input in categories) {
                category = categories[input];
            } else {
                console.log("Invalid category")
            }
        }
        return category
    }

    function chooseTheme(category) {
        let theme = '';
        const input = parseInt(prompt(`Select a theme:\n${Object.entries(category.theme).map(([key, value]) => `${key}. ${value}`).join('\n')}`));
        if (input in category.theme) {
            theme = category.theme[input];
        } else {
            alert('Invalid theme.');
        }
        return theme;
    }
    const category = chooseCategory();
    const theme = chooseTheme(category);

    const recommendations = books.filter((book) => book.genero === theme);

    let showRecommendations = ''
    for (const item of recommendations) {
        showRecommendations += `Título: ${item.titulo} | Autor: ${item.autor}\n`
    }

    return showRecommendations;
}

const recommendations = getBookRecommendations(libros);
console.log(recommendations);
