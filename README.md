/***
 *
 *  Existe una sistema de logs que contiene todos las peticiones HTTP utilizadas en el
 *  sitio web de addika. Para este ejercicio, supondremos que este sistema de logs tiene
 *  millones de peticiones cada segundo. Es decir, las peticiones suficientes para
 *  necesariamente hacer que este proceso opere de la manera mas eficiente posible.
 *
 *  Queremos desarrollar un sistema que procese estos logs para recopilar informacion
 *  importante sobre los request de los usuarios al sitio (por ejemplo: request por
 *  segundo, latencia o tasa de eficiencia). Una de las tareas principales de este sistema
 *  es saber a que endpoint corresponde una peticion HTTP recibida. Por ejemplo, tenemos
 *  un request de la siguiente manera "GET /investmentAccount/adk234" el cual esta
 *  relacionado con el patrón dado de "GET /investmentAccount/<ID>" que a su
 *  vez este patron nos deberia retornar al endpoint "get_investment_account".
 *
 *  Necesitamos desarrollar un algoritmo que pueda de manera eficiente regresarnos desde
 *  el input tipo string "GET /investmentAccount/adk234" a el endpoint de fácil lectura
 *  "get_investment_account"
 *
 *
 * ***/

/*
 *   La Tabla 1 muestra los patrones para los endpoints de fácil lectura, que existen en
 *   el backend de addika.
 *
 *   Tabla 1. Patrones a endpoints
 *
 *   Pattern                                          Endpoint name
 *   GET /users                                       get_all_users
 *   GET /users/<ID>                                  get_user
 *   GET /users/<ID>/<ID>                             get_user_guests_in_account
 *   GET /users/<ID>/configuration                    get_user_configuration
 *   GET /investmentAccount/<ID>                      get_investment_account
 *   GET /investmentAccount/<ID>/comments             get_investment_account_comments
 *   GET /investmentAccount/<ID>/notifications        get_investment_account_notifications
 *   GET /investmentAccount/<ID>/notifications/<ID>   get_investment_account_notification
 *   DELETE /trusts/<ID>                              delete_comment
 *   POST /trusts/<ID>                                post_comment
 *   POST /investmentAccount                          post_investmentAccount
 *   PATCH /comments/<ID>                             patch_comment
 *   PUT /comments/<ID>                               put_comment
 *
 *
 */

/**
 *  Para tomar en cuenta:
 *    - En nuestro input todos los id's son valores de tipo alfanúmerico string
 *    - Nuestro algoritmo debe pasar satisfactioriamente los siguientes casos de uso
 *
 *
 *    Input String                                            Endpoint Name
 *    GET /users                                              get_all_users
 *    GET /users/bcd098                                       get_user
 *    GET /users/543sdf                                       get_user
 *    GET /investmentAccount/thisidlookslikewords/comments    get_user_comments
 *    GET /investmentAccount/thisisanidfortest/notifications  get_user_notifications
 *
 *
 * */