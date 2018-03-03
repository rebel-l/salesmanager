package main

import (
	"github.com/gorilla/mux"
	"github.com/rebel-l/salesmanager/server/endpoint"
	log "github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

const port = 3000

func main() {
	log.Info("Server starting...")

	// Init Router
	r := mux.NewRouter()

	// Init Endpoints
	endpoint.InitFileserverEndpoint(r)

	// Serve
	log.Infof("Listening on port %d ...", port)
	err := http.ListenAndServe(":" + strconv.Itoa(port), r)
	if  err != nil {
		log.Panicf("Couldn't start server. Error: %s", err)
	}
}


