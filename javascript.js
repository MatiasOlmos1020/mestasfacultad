let opciones = {
    data() {
        return{
            producto: 'puto el que lee',
            descripcion: 'pero mas el que sigue leyendo',
            imageUrl: './assets/images/socks_blue.jpg',
            url:'https://www.google.com.ar',
            stock:0,
            composicion:['33,3% terciopelo','33,3% Lino','33,3% Algodon'],
            modelos:[
                {id:0,color:'Azul'},
                {id:1,color:'Verde'},
            ]
        }
    }
}

const app = Vue.createApp(opciones);

const appMontada = app.mount('#app'); 