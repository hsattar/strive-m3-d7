💾 USER DATABASE FILTER
Use bootstrap to create your layout quickly and focus on the JS part.
You are creating a frontend application that displays users received from an API, which also allows to filter them nicely.

These are your tasks:

Display the users in a table from this API: https://jsonplaceholder.typicode.com/users ⇒ USE ASYNC AWAIT!
Create a dropdown with three options: "name", "username" and "email". This dropdown will be your filter.

Then…

1.  Create a text input. When the user types something in this filter, the API response should be filtered and displayed based on both:

The text input value
The selected option on your dropdown 2) Create a function that displays a list of names from the list of users. Attach this function to a button somewhere and display the names.

3. Create a function that displays a list of addresses from the list of users. The addresses should have a string format. See the example:

{
"street": "Victor Plains",
"suite": "Suite 879",
"city": "Wisokyburgh",
"zipcode": "90566-7771",
"geo": {
"lat": "-43.9509",
"lng": "-34.4618"
}
//Should become "Victor Plains, Suite 879, Wisokyburgh (90566-7771)"

EXTRA:
Add a button to sort the users by name in ascending and descending order (only one button allowed, it should be toggling!)
Add a button on each user row that redirects to the details page. You can use this endpoint to fetch the user details: https://jsonplaceholder.typicode.com/users/id_here
