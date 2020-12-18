const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected Successfully'))
    .catch(err => console.log(err));


const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 150,
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000
    },
    price: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

const productModel = new mongoose.model('Product', productSchema);

const product = new productModel({
    image: 'images/product.jpg',
    title: 'This is a first product',
    description: 'This is a first product description',
    price: 100
})

// product.save()
// .then(() => console.log('Product Added Successfully'))

//Single item add


const saveProduct = async () => {
    try {
        const product2 = new productModel({
            image: 'images/product2.jpg',
            title: 'This is a second product',
            description: 'This is a second product description',
            price: 'esdlkjfs'
        })

        const result = await product2.save();
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
// saveProduct();

// Insert Multiple Product

const saveMultiProduct = async () => {
    try {
        const product3 = new productModel({
            image: 'images/product3.jpg',
            title: 'This is a third product',
            description: 'This is a third product description',
            price: 32
        })
        const product4 = new productModel({
            image: 'images/product4.jpg',
            title: 'This is a third product description',
            description: 'This is a third product description description',
            price: 33
        })

        const result = await productModel.insertMany([product3, product4]);
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}

// saveMultiProduct()

// Get all product from database

const getAllDataFromDatabase = async () => {
    try {
        const result = await productModel.find({price: 33})
            .select({title: 1, _id: 0})
            .limit(1);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

// getAllDataFromDatabase();


// Advanced Query Methods

const advancedQuery = async () => {
    try {
        const result = await productModel.find({ price: {$gt: 33}})
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
advancedQuery();