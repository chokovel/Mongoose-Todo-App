import mongoose, {Schema} from 'mongoose'


interface todoInstance{

    name:string,

    description:string,

    status:string

}



const todoSchema = new Schema({

    name: {type:String, required:false},

    description: {type:String, required:true},

    status: {type:String}

},

{
    timestamps:true
})



const Todo =  mongoose.model<todoInstance>("Todo", todoSchema)



export default Todo