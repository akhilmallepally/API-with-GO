package models

import "time"

type Scientist struct {
	ID                int                 `json:"id"`
	Name              string              `json:"name"`
	Description       string              `json:"description"`
	Born              int                 `json:"born"`
	BornTime          time.Time           `json:"born_time"`
	Age               int                 `json:"age"`
	Rating            int                 `json:"rating"`
	U_Rating          int                 `json:"u_rating"`
	CreatedAt         time.Time           `json:"created_at"`
	UpdatedAt         time.Time           `json:"updated_at"`
	ScientistCategory []ScientistCategory `json:"-"`
}

type Category struct {
	ID           int       `json:"id"`
	CategoryName string    `json:"category_name"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

type ScientistCategory struct {
	ID          int       `json:"id"`
	ScientistID int       `json:"scientist_id"`
	CategoryID  int       `json:"category_id"`
	Category    Category  `json:"category"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
