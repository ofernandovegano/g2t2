import mongoose from 'mongoose';

const CheckinSchema = new mongoose.Schema({
  patient: {
    type: String,
    required: true
  },
  appointment: {
    type: String,
    required: true
  },
  specialist: {
    type: String,
    required: true
  }
},
  {
    timestamps: true,
  }
)

export default mongoose.model('checkins',  CheckinSchema)
