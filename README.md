[![Build Status](https://travis-ci.org/HAlejandro88/gifts-app.svg?branch=master)](https://travis-ci.org/HAlejandro88/gifts-app)

# GifsExpertApp

> npm install --save

funciones importantes

```javaScript
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {
        getGifs(category)
              .then(imgs => {
                  setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                  }, 3000)
              })
    }, [category]) // evaluo unicamente cuando la categoria cambia


    return state
}
```

## Autor

Alejandro Soto
