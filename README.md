# Namaste React 🚀    

# Parcel is a beast
- creates a Dev Build
- creates a Local Server
- it is doing HMR (hot module replacement) -> refreshing our page
- how parcel doing all above stuffs-> it uses a file watching algorithm (written in c++)
- it does caching (faster build after the first build because it takes some xtra space (parcel_cache) )
- Image optimization
- does minification of our files also in the production build
- Bundling
- Compress our file(remove all the white spaces from our file and shift to the production)
- uses consistent hashing 
- code splitting
- differential bundling (to support in the older browser aw)
- Diagnostic
- Error Handling
- host our app in HTTPs aw
- uses Tree Shaking Algorithm( removes unused code from the file)
- creates Different bundles for dev and production build
