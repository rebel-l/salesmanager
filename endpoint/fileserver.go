package endpoint

import (
	"github.com/gorilla/mux"
	log "github.com/sirupsen/logrus"
	"net/http"
)

func InitFileserverEndpoint(r *mux.Router)  {
	log.Debug("Fileserver endpoint: Init ...")

	fs := http.FileServer(http.Dir("public"))
	r.Handle("/", http.StripPrefix("/", fs)).Methods(http.MethodGet)
	r.Handle("/app.bundle.js", http.StripPrefix("/", fs)).Methods(http.MethodGet)

	log.Debug("Fileserver endpoint: initialized!")
}
