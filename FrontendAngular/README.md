Add to Cart With use Login
1. Check user is Logged-in and get user-id
2. Make Cart Object;
3. Make a service function to call the API
4. Make API object
5. Call API and store data in DB file.


When we are calling two or more than two api call we need to use either Promise
or setTimeout otherwise data will not load.


Update cart details after user login:
1. Make service for getting cart item list.
2. Load cart count
3. check product is already added or not.
4. Fix 1 bug in add to cart on detail page.

Remove to Cart API
1. Make service for removing cart item
2. Update cart count list
3. Cart Count on refresh home.


If some variable that we have declared is showing undefined we can use
like x && x.something and it will solve our issue.