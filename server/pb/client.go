package pb

import "net/http"

type PocketBaseClient struct {
	BaseURL    string
	AuthToken  string
	httpClient *http.Client
}
