const ImageSchema =mongoose.ImageSchema({
    name:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:Buffer
    }
})

module.exports= ImageModel = mongoose.model('imageModel',ImageSchema)