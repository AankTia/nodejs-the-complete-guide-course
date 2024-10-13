# Section 9 : Dynamic Routes & Advanced Models
- How Passing Route Params?
- How Using Query Params?

## Dynamic Routing
- You can pass dynamic path segments by adding a ":" to the Express router path.
- The name you add after ":" is the name by which you can extract the data on req.params
- Optional (query) parameters can also be passed (?params=value&b=2) and extracted (req.query.myParam)

## More on Models
- A Cart model wa added - it holds static methods only
- You can interact between models (e.q. delete cart item if a product is deleted)
- Working with files of data storage is suboptional for bigger amounts of data.

## Useful resources
Official Routing Docs: https://expressjs.com/en/guide/routing.html