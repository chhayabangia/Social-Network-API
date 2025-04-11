// Thought.js// Thought.js
import { Schema, Types, model} from 'mongoose';

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 280,
    },
    username: {
        type: String,
        required: true,
        max_length: 50,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString()
    }
},
    {
        toJSON: {
            getters: true,
        },
        timestamps: true
    }
);


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        max_length: 50,
    },
    username: {
        type: String,
        required: true,
        max_length: 50,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString()
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            getters: true,
        },
        timestamps: true
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions?.length;
  });

const thought = model('Thought', thoughtSchema);

export default thought;
