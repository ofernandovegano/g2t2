import Checkin from '../schema/Checkin';

class CheckinController{

  async create(req, res){
    const dbCheckin = req.body
  
    Checkin.create(dbCheckin, (err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(201).send(`new checkin created: \n ${data}`)
      }
    })
  }
  async sync(req, res) {
    Checkin.find((err, data) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).send(data)
      }
    })
  }

}

export default new CheckinController();