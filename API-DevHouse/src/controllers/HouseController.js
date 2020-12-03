import House from '../models/House';
import User from '../models/User';

class HouseController {

    async getIndex(req, res){
        const { status } = req.query;
        
        const houses = await House.find({status});

        return res.json(houses);
    }

    async create(req, res){
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

    async update(req, res) {
        const {user_id} = req.headers;
        const { id } = req.params;
        const {description, price, location, status } = req.body;

        const users = await User.findById(user_id);
        const houses = await House.findById(id);

        if(String(users._id) !== String(houses.user)){
            return res.status(401).json({message: 'Não autorizado.'})
        }

        await House.updateOne({_id: id}, {
            user: user_id,
            description,
            price,
            location,
            status,
        });

        return res.json();
    }

    async delete(req, res){
        const {id} = req.params; //vem como parametro na url da requisição /:id
        const {user_id} = req.headers; //vem no header da requisição

        await House.findByIdAndDelete({_id: id});

        return res.json({message: 'Removido com sucesso'})
    }
}

export default new HouseController();