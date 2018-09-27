![Fragmentary marble sarcophagus with scenes from the Oresteia](

Alecto
------

* Pass clean, tmp path to file that is removed at the end of the transformation function.
  * Ensure this clean tmp path is lower case for case-sensitive file systems
* Add support for base 64 urls
* Add {stale: true} option to make performance even better, check if we need to invalidate result in background...
* Add {root: String|Array[String]} option to resolve paths against
* Add {insensitive: Boolean} option to attempt to resolve broken paths in a case-insensitive manner
