//Crear dataBase
use('miTienda');

//Mostrar dataBase
db;

//Crear colección explicitamente
db.createCollection('productos')

//Ver todas las colecciones
db.getCollectionNames()

//Crear una collecion implicitamente

db.ventas.insertOne({
    id:1,
    nombre:'Samsung',
    precio: 3000,
    cantidad: 1,
    color: 'negro'
})

//Insertar varios documentos a la coleccion

db.productos.insertMany([
    {nombre:'iPhone',precio:3500,color:'blanco'},
    {nombre:'Vivo',precio:1500,color:'negro'},
    {nombre:'Honor',precio:2000,color:'gris'},
    {nombre:'Motorola',precio:1800,color:'azul'},
])


//Mostrar todos los datos que hay en la coleccion
db.productos.find()

//Mostrar una consulta de la coleccion
db.productos.find({nombre:'Vivo'})

//Eliminar una coleccion
db.ventas.drop()

//Eliminar un documento de la coleccion
db.productos.deleteOne({nombre:'Motorola'})

//Eliminar varios elementos de la coleccion
db.producto.deleteMany({color:'negro'})

//Eliminar la base de datos
db.dropDatabase()

//actualizar un documento de la coleccion
db.productos.updateOne({nombre:'Motorola'},{$set:{precio:2200}})

//Actualizar varios documentos de la coleccion
db.productos.updateMany({color:'negro'},{$set:{color:'rojo'}})