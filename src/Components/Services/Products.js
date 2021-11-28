



const data = [
    {id : 1, title : "LG K 62 128 GB", description : "Memoria interna: 128 GB", price : " $ 35999", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_973809-MLA48041270287_102021-F.webp", stock: 8},
    {id : 2, title : "LG K 22 32 GB", description : "Posee el novedoso sistema operativo Android 10", price : " $ 21149", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_836391-MLA44123219615_112020-F.webp" },
    {id: 3, title : "Motorola E 6 Plus", description : "Cuenta con el sistema operativo avanzado Android 9.0 Pie ", price : " $ 39389", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_990342-MLA40114956978_122019-F.webp"  },
    {id : 4, title : "Motorola E 7", description : "Posee el novedoso sistema operativo Android 10 ", price : "$ 21999", pictureUrl :"https://http2.mlstatic.com/D_NQ_NP_2X_842056-MLA46651798889_072021-F.webp" },
    {id : 5, title : "Motorola G 100", description : "Fotografía profesional en tu bolsillo", price : "$ 92199", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_645703-MLA46248898134_062021-F.webp"},
    {id : 6, title : "Samsung Galaxy A 01", description : "Diseño elegante pensado para tu comodidad", price : "$ 30000", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_777699-MLA41815295135_052020-F.webp"  },
    {id : 7, title : "Samsung Galaxy A 22", description: "Memoria interna: 128 GB", price : "$ 49500", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_662910-MLA47777273433_102021-F.webp" },
    {id : 8, title : "Samsung Galaxy A 72", description : "Fotografía profesional en tu bolsillo", price : "$ 74999", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_901982-MLA45399247740_032021-F.webp"  }        
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts