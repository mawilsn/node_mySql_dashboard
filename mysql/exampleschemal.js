{
  "type": "object",
  "properties": {
    "ID": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },
    "admin": {
      "type": "string",
      "minLength" : 3,
      "maxLength": 10
    },
    "project": {
      "type": "string",
      "minLength" : 3,
      "maxLength": 20
    },
    "vacancy": {
      "type": "string",
      "maxLength": 40,
      "pattern" :  "._vacancy_10_scr"
    },
    "hiring_status_count": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },
    "total_trained": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },
 "total_started_pract": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },
 "total_start_qual": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },
 "total_finished_qual": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },
 "total_qualified": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 1200
    },

 "total_missed_qual": {
      "type": "integer",
      "minimum": 1,
      "maximum" : 10
    }
  },
  "required": [
    "ID",
    "admin",
    "project",
    "vacancy","hiring_status_count"
    ,"total_started_pract",
    "total_start_qual",
    "total_finished_qual",
    "total_qualified","total_missed_qual"
  ]
}
