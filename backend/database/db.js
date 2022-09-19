import mongoose from 'mongoose';

const Connection = async (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-lsz6os5-shard-00-00.plbqzvi.mongodb.net:27017,ac-lsz6os5-shard-00-01.plbqzvi.mongodb.net:27017,ac-lsz6os5-shard-00-02.plbqzvi.mongodb.net:27017/MEDUX-CRUD?ssl=true&replicaSet=atlas-minl3r-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log('Database connected succesfully');
    } catch(error){
        console.log('Error while connecting with the mongo database', error);
    }
}

export default Connection;