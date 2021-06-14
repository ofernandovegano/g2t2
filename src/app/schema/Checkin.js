import mongoose from 'mongoose';

const CheckinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  appointment: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
  }
)

export default mongoose.model('Checkin',  CheckinSchema)
