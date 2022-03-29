package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"net/http"
)

const version = "1.17.5"

type config struct {
	port int
	env  string
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"environment"`
	Version     string `json:"version"`
}

func main() {
	var cfg config
	flag.IntVar(&cfg.port, "port", 4000, "Server port to listen on")
	flag.StringVar(&cfg.env, "env", "development", "Application environment(development | production)")
	flag.Parse()

	fmt.Println("Running")
	http.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {
		currenstStatus := AppStatus{
			Status:      "available",
			Environment: cfg.env,
			Version:     version,
		}

		js, err := json.MarshalIndent(currenstStatus, "", "\t")
		if err != nil {
			fmt.Println(err)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(js)
	})

	err := http.ListenAndServe(fmt.Sprintf(":%d", cfg.port), nil)
	if err != nil {
		fmt.Println(err)
	}
}
