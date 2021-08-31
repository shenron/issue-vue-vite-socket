# Issue with Vite + Socket.Io

https://github.com/vitejs/vite/issues/4798

| Vite          | Webpack       | socket.io  |
| ------------- |:-------------:| ----------:|
| ko            | ok            | 4.2.x      |
| ok            | ok            | 4.1.x      |

To reproduce the issue:
- start socket.io server: `node socket-server.js`
- start dev server: `npm run dev`


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
