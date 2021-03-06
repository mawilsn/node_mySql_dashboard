export const schema =
{
  "type": "object",
  "properties": {
    "projects": {
      "type": "array",
      "minItems": 10,
      "maxItems": 11,
      "items": {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
	  "unique": true,
      "minimum":1
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
    "id",
    "admin",
    "project",
    "vacancy","hiring_status_count"
    ,"total_started_pract",
    "total_start_qual",
    "total_finished_qual",
    "total_qualified","total_missed_qual"
  ]
}

    }
  },
  "required": ["projects"]
};


// {
//   "type": "object",
//   "properties": {
//     "users": {
//       "type": "array",
//       "minItems": 3,
//       "maxItems": 5,
//       "items": {
//         "type": "object",
//         "properties": {
//           "id": {
//             "type": "number",
//             "unique": true,
//             "minimum": 1
//           },
//           "firstName": {
//             "type": "string",
//             "faker": "name.firstName"
//           },
//           "lastName": {
//             "type": "string",
//             "faker": "name.lastName"
//           },
//           "email": {
//             "type": "string",
//             "faker": "internet.email"
//           }
//         },
//         "required": ["id", "firstName", "lastName", "email"]
//       }
//     }
//   },
//   "required": ["users"]
// };
