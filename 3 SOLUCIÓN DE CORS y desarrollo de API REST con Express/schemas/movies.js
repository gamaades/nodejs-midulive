const z = require("zod");

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: "Movie title must be a string.",
    required_error: "Movie title is required.",
  }),
  year: z.number().int().positive().min(1900,{message:"El año tiene que ser mayor a 1900"}).max(2024,{message:"El año no puede ser mayor que el año actual"}),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: "Poster must be a valid URL.",
  }),
  // genre:z.enum(["Action", "Adventure", "Crime", "Drama", "Romance", "Sci-Fi", "Animation"]).array()
  genre: z.array(
    z.enum([ "Action", "Adventure", "Crime", "Drama", "Romance", "Sci-Fi", "Animation"]),
    {
      required_error: "Movie genre is required.",
      invalid_type_error: "Movie genre must be an array of enum Genre.",
    }
  ),
});

function validateMovie(object) {
  return movieSchema.safeParse(object);
}

function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input)
}

module.exports = { validateMovie, validatePartialMovie };
