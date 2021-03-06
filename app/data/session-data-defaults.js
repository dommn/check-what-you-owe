/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  "notification-preference": "Text message",

  "letter-preference": "Standard print",

  "language-preference": "English",

  "first-name-personal-details": "Ashley",

  "last-name-personal-details": "Atherton",

  "title-personal-details": "None",

  "telephone-number-personal-details": "078500011992",

  "email-personal-details": "ashley.atherton@gmail.com",

}
