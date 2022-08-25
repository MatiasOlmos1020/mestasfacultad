<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./assets/styles.css"></link>
    <script src="https://unpkg.com/vue@next"></script>
</head>
<body>
    <div id="app">
        <div class="cart">Carrito: {{stock}}</div>
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <a :href="url"><img :src="imageUrl"></a>
                </div>
                <div class="product-info">
                    <h1>{{producto }}</h1>
                    <p>{{descripcion}}</p>
                    <p v-if="stock">Hay Stock</p>
                    <p v-else="stock">No hay Stock</p>
                    <ul>
                        <li v-for="modelo in modelos">{{modelo.color}}</li>
                    </ul>
                    <button class="button" v-on:click="stock++">Comprar</button>
                </div>
            </div>
        </div>
    </div>

    <script src="./javascript.js"></script>
</body>
</html>