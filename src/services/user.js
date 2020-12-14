const ValidationError = require('../errors/ValidationError')

module.exports = (app) => {
    const findAll = () => {
        return app.db('users').select(['id', 'nome', 'sobrenome', 'participacoes'])
    }

    const save = async (user) => {

        if(!user.nome) throw new ValidationError('Nome é um atributo obrigatorio')
        if(!user.sobrenome) throw new ValidationError('Sobrenome é um atributo obrigatorio')
        if(!user.participacoes) throw new ValidationError('Participações é um atributo obrigatorio')

        const newUser = { ...user }

        return app.db('users').insert(newUser, ['id', 'nome', 'sobrenome', 'participacoes'])
    }

    return { findAll, save }
}