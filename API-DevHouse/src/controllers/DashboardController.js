import House from '../models/House';


class DashboardController{

    async getHousesAll(req, res){

        const houses = await House.find({});

        return res.json(houses);
    }
    
    async getHouseById(req, res){
        const {user_id} = req.headers;

        const houses = await House.find({user: user_id})

        return res.json(houses);
    }
}

export default new DashboardController();