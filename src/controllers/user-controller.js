const User = require('../app/models/user');
const repository = require('../repositories/user-repository');

exports.post = async (req, res) => {
    try {
        await repository.post({
            login: req.body.login,
            email: req.body.email,
            senha: req.body.senha,
        });
        res.status(201).send({
            message: 'User cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getAll = async (req, res) => {
     try {
        var data = await repository.get();
        var  quantidade = await User.count({});
        res.status(200).send({
            message: "Retorno de User e Quantidade",
            quntidadeUser: quantidade,
            data: data
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.userId;
        var data = await repository.getById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }
}

exports.put = async (req, res) => {
    try {
        const id = req.params.userId;
        var data = await repository.put(id, req.body);
        res.status(200).send({
            message: "user atualizado com sucesso",
            dados: data
        });

    } catch (error) {
        res.status(500).send({
            message: "Falha ao processar requisição",
            erro: error
        });
    }

}

exports.delete = async (req, res) => {
    try {
        const id = req.params.userId;
        await repository.delete(id)
        res.status(200).send({
            message: 'removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.login = async (req, res) => {
    try {
        const result = await userRepository.login(req.body.login, req.body.senha);
        res.status(200).send({auth: true, token: result});
    } catch (e) {
        if(!e.status){
            res.status(500).json({error: {code: 'Erro', message: 'Erro ao acessar'}});
        } else {
            res.status(e.status).json({error: {code:e.code, message:e.message}});
        }
    }
}
