
const ACCESS_KEY = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
const API = 'https://api.unsplash.com/photos?page=1&client_id='

export  const getItem= (state) => {
    return fetch(API + ACCESS_KEY)
                .then((response) => response.json())
                .then((json) => {
                return state(json);
                })
                .catch((error) => {
                console.error(error);
    });
}