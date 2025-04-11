// User.js
import { Schema, Types, model} from 'mongoose';


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max_length: 50,
    },
    email: {
        type: String,
        required: true,
        max_length: 50,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
},
    {
        toJSON: {
            getters: true,
        },
        timestamps: true
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends?.length;
  });

const User = model('User', userSchema);

export default User;
