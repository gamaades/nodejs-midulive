const express = require("express"); // require -> commonJS
const crypto = require("node:crypto");
const cors = require("cors");
const movies = require("./movies.json");
const { validateMovie, validatePartialMovie } = require("./schemas/movies");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:8080",
        "http://localhost:1234",
        "https://movies.com",
        "http://gmanan.cl",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.disable("x-powered-by");

// metodos normales: GET/HEAD/POST
// metodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// const ACCEPTED_ORIGINS = [
//   "http://localhost:8080",
//   "http://localhost:1234",
//   "https://movies.com",
//   "http://gmanan.cl",
// ];

app.get("/", (req, res) => {
  res.json({ message: "buenas buenas!!!" });
});

// todos los recursos que sean MOVIES se identifican con /movies
app.get("/movies", (req, res) => {
  // const origin = req.header("origin");
  // // No se envia el header cuando la petición es del mismo ORIGIN.

  // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
  //   res.header("Access-Control-Allow-Origin", origin); // acá indicamos que todos podrian acceder.
  // }

  // res.header("Access-Control-Allow-Origin","http://localhost:8080"); // acá indicamos que solo esta ip tendria acceso.
  const { genre } = req.query;
  if (genre) {
    // Filtrar películas por género, asegurando coincidencia exacta
    // const filterMovies = movies.filter((movie) => movie.genre.includes(genre));

    // Convertir todo a minúsculas para evitar problemas de coincidencia debido a mayúsculas/minúsculas
    const filterMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filterMovies); // Devolver las películas filtradas
  }
  res.json(movies); // Si no se especifica género, devolver todas las películas
});

app.get("/movies/:id", (req, res) => {
  // path-to-regexp
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: "Movie not found" });
});

app.post("/movies", (req, res) => {
  // const { title, year, director, duration, poster, genre, rate } = req.body; // esto no seria necesario ya que con la funcion de validateMovie se resulve
  const result = validateMovie(req.body);

  if (result.error) {
    // 422 Unprocessable Entity
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data,
  };

  // Esto no seria REST, porque estamos guardando el estado de la aplicacion en memoria
  movies.push(newMovie);

  res.status(201).json(newMovie);
});

app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Pelicula no encontrada" });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: "Pelicula eliminada" });
});

app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }
  const { id } = req.params;

  // Encontrar el índice de la película con el id dado
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  // Si la película no se encuentra, devolver un error 404
  if (movieIndex === -1)
    return res.status(404).json({ message: "Pelicula no encontrada" });

  // Actualizar la película con los datos recibidos
  const updatedMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  // Reemplazar la película en el array
  movies[movieIndex] = updatedMovie;

  // Devolver la película actualizada
  return res.json(updatedMovie);
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
