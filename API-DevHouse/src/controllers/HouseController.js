import House from '../models/House'

class HouseController {

    async getIndex(req, res){
        const { status } = req.query;
        
        const houses = await House.find({status});

        return res.json(houses);
    }

   

    async store(req, res){
        // let houses = await House.find({})
        const { description, price, location, status} = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            description,
            price,
            location,
            status
        });

        return res.json(house)
    }

    async getHouses(req, res){

        const houses = await House.find({})

        return res.json(houses);
    }

    async update(req, res) {
        const {user_id} = req.headers;
        const { id } = req.params;
        const {description, price, location, status } = req.body;

        const houses = await House.updateOne({_id: id}, {
            user: user_id,
            description,
            price,
            location,
            status,
        });

        return res.json(houses);
    }
}

export default new HouseController();