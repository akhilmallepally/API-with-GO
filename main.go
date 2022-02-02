package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type movie struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	Director string `json:"director"`
	Year     int    `json:"year"`
}

var movies = []movie{
	{ID: 1, Name: "Shutter Island", Director: "Martin Scorsese", Year: 2010},
	{ID: 2, Name: "Shutter Island", Director: "Martin Scorsese", Year: 2010},
	{ID: 3, Name: "Shutter Island", Director: "Martin Scorsese", Year: 2010},
}

func getMovies(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, movies)
}

func main() {
	router := gin.Default()
	router.GET("/movies", getMovies)
	router.Run("localhost:8080")
}
