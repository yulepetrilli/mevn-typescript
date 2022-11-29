import { connect } from "mongoose";

export const connectDB = async () => {
    try{
        const db = await connect('mongodb://localhost/menv-db');
        console.log(db.connection.name)
    }catch(err){
        console.log(err)
    }
};