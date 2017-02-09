# Workshop Notes

* Overview of how redux-beacon works, drawings, whiteboard, targets, extensions
  * `npm i --save redux-beacon`
  * Want to see how many users visit each page of the site
    * write pageview event definition while looking at the docs
    * hook things up, see events getting logged
      * create eventsMap and middleware
      * add middleware when creating the store
    * ? follow instructions in the docs to add the GA target
  * BREAK
  * Want to see how many users that add items to their cart complete the checkout process
    * Explain funnel reports, and virtual page views
    * Create itemAddedToCart event definition, use the schema
    * ? Create Funnel Report on Google Analytics
  * Want to see where users are dropping off in the payment form
    * name entered
    * email entered
    * phone entered
    * cc number entered
    * ? Create Funnel Report on Google Analytics
  * Want to track analytics events even when the user loses connection

# Instructor Notes
  * continuously refer to docs
