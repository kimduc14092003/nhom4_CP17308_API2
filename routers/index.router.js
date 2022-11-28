const userRouter=require('./user.router');
const typeRouter= require('./type.router');
const productRouter= require('./product.router');
const imageRouter= require('./image.router');
const cartRouter= require('./cart.router');
const cartItemRouter= require('./cartItem.router');

function route(app){
    app.use('/user', userRouter);
    app.use('/type', typeRouter);
    app.use('/product', productRouter);
    app.use('/image', imageRouter);
    app.use('/cart', cartRouter);
    app.use('/cartItem', cartItemRouter);
    
    //test
    app.use('/',productRouter);
}
module.exports = route;