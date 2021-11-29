



const data = [
    {id : 1, title : "LG K 62 128 GB", description : "Memoria interna: 128 GB", price : " $ 35999", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_973809-MLA48041270287_102021-F.webp", stock: 8, category: "celular"},
    {id : 2, title : "LG K 22 32 GB", description : "Posee el novedoso sistema operativo Android 10", price : " $ 21149", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_836391-MLA44123219615_112020-F.webp", stock: 6, category: "celular" },
    {id: 3, title : "Motorola E 6 Plus", description : "Cuenta con el sistema operativo avanzado Android 9.0 Pie ", price : " $ 39389", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_990342-MLA40114956978_122019-F.webp", stock: 3, category: "celular"  },
    {id : 4, title : "Motorola E 7", description : "Posee el novedoso sistema operativo Android 10 ", price : "$ 21999", pictureUrl :"https://http2.mlstatic.com/D_NQ_NP_2X_842056-MLA46651798889_072021-F.webp", stock:9, category: "celular" },
    {id : 5, title : "Motorola G 100", description : "Fotografía profesional en tu bolsillo", price : "$ 92199", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_645703-MLA46248898134_062021-F.webp", stock: 8, category: "celular"},
    {id : 6, title : "Samsung Galaxy A 01", description : "Diseño elegante pensado para tu comodidad", price : "$ 30000", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_777699-MLA41815295135_052020-F.webp", stock:5, category: "celular"  },
    {id : 7, title : "Samsung Galaxy A 22", description: "Memoria interna: 128 GB", price : "$ 49500", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_662910-MLA47777273433_102021-F.webp", stock: 10, category: "celular" },
    {id : 8, title : "Samsung Galaxy A 72", description : "Fotografía profesional en tu bolsillo", price : "$ 74999", pictureUrl : "https://http2.mlstatic.com/D_NQ_NP_2X_901982-MLA45399247740_032021-F.webp", stock: 10, category: "celular"  },
    {id: 9, title: "Accesorio luminoso Led Selfie", description: "Aro Luz Led Para Selfies Celular Tablet Anillo", price: "$ 1000", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_793431-MLA31056889827_062019-F.webp", stock: 9, category: "Otros"},
    {id: 10, title: "Soporte Holder Celular Gps", description: "Soporte del teléfono de bloqueo automático por gravedad, Mod. Corazon", price: " $ 600", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_854444-MLA31922158744_082019-F.webp", stock: 8, category: "Otros"},
    {id: 11, title: "Cable Usb 30 Pin 3 Metros", description: "COMPATIBLE CON IPHONE IPAD IPOD 30 Pines", price: " $ 1100", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_945403-MLA45655493289_042021-F.webp", stock: 6, category: "Otros"},
    {id: 12, title: "Cargador para el auto", description: "ACCESORIO SAMSUNG CARGADOR AUTO FC MICRO USB", price: "$ 4568", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_896616-MLA47981642820_102021-F.webp", stock: 7, category: "Otros"},
    {id:13, title: "Lapiz optico", description: "Lápiz Optico Meko Stylus Universal Nuevo + Accesorios", price: " $ 5500", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_758835-MLA47804847711_102021-F.webp", stock: 8, category: "Otros"},
    {id:14, title: "Auricular Celular Microfono", description: "Auricular Celular Microfono Bluetooth Caja Cargadora Twins", price : "$ 1800", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_605341-MLA47846808917_102021-F.webp", stock: 6, category: "Otros"},
    {id: 15, title: "Parlante Bluetooth Led", description: " Parlante audioritmico Bosina Stereo Celular", price: "$ 4510", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_716717-MLA42227882197_062020-F.webp", stock: 6, category: "Otros"},
    {id: 16, title: "Tripode para Celular", description: "Tripode Fotografia 160 Cm Accesorio Soporte Celular", price: "$ 6000", pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_896598-MLA42513419724_072020-F.webp", stock: 4, category: "Otros"}        
]

const getProducts = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(data)
    }, 2000)
})

export default getProducts