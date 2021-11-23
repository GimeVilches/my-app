import img1 from "../../Assets/imagenes/lg k62.webp";
import img2 from "../../Assets/imagenes/lgk22.webp";
import img3 from "../../Assets/imagenes/motorola e6.webp";
import img4 from "../../Assets/imagenes/motorola e7.webp";
import img5 from "../../Assets/imagenes/motorola g60.webp";
import img6 from "../../Assets/imagenes/motorola g100.webp";
import img7 from "../../Assets/imagenes/samsung a01.webp";
import img8 from "../../Assets/imagenes/samsung a22.webp";
import img9 from "../../Assets/imagenes/samsung a62.webp";

const data = [
    {id : 1, title : "LG K 62 128 GB", description : "Memoria interna: 128 GB", price : " $ 35999", pictureUrl : "https://github.com/GimeVilches/my-app/blob/master/src/Assets/imagenes/lg%20k62.webp"},
    {id : 2, title : "LG K 22 32 GB", description : "Posee el novedoso sistema operativo Android 10", price : " $ 21149", pictureUrl : img2 },
    {id: 3, title : "Motorola E 6 Plus", description : "Cuenta con el sistema operativo avanzado Android 9.0 Pie ", price : " $ 39389", pictureUrl : img3 },
    {id : 4, title : "Motorola E 7", description : "Posee el novedoso sistema operativo Android 10 ", price : "$ 21999", pictureUrl : img4},
    {id : 5, title : "Motorola G 60", description : "Memoria interna: 128 GB", price : "$ 56000", pictureUrl : img5},
    {id : 6, title : "Motorola G 100", description : "Fotografía profesional en tu bolsillo", price : "$ 92199", pictureUrl : img6},
    {id : 7, title : "Samsung Galaxy A 01", description : "Diseño elegante pensado para tu comodidad", price : "$ 30000", pictureUrl : img7 },
    {id : 8, title : "Samsung Galaxy A 22", description: "Memoria interna: 128 GB", price : "$ 49500", pictureUrl : img8},
    {id : 9, title : "Samsung Galaxy A 72", description : "Fotografía profesional en tu bolsillo", price : "$ 74999", pictureUrl : img9}        
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts