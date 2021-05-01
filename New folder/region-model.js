const { model, Schema, ObjectId } = require('mongoose');

const regionSchema = new Schema(
	{
        _id: {
			type: ObjectId,
			required: true
		},
		id: {
			type: Number,
			required: true
		},
		owner: {
			type: String,
			required: true
		},
        map: {
            type: Boolean,
            required: true
        },
        sister: {
            type: Number,
            required: false
        },
        children: {
            type: Number,
            required: false
        },
        landmark: {
            type: String,
            required: false
        },
        capital: {
            type: String,
            required: false
        },
        leader: {
            type: String,
            required: false
        }
	},
    { timestamps: true }
);

const Region = model('Region', regionSchema);
module.exports = Region;