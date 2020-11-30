//Métodos: index, store, show, update, destroy

/* 
index: listagem de sessoes
store: Criar uma sessao
show: Quando queremos listar uma ÚNICA sessão 
update: Quando queremos alterar alguma sessão
destroy: Quando queremos deletar uma sessão
*/

import User from '../models/User'

class SessionControler {

    async store(req, res) {

        const { email } = req.body;

        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({ email })
        }

        return res.json(user);
    }

}

export default new SessionControler;