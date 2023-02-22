const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt');

class CustomerService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => console.error(err))
  }

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }
    const newCustomer = await models.Customer.create(newData, {
      include: ['user']
    })
    return newCustomer;
  }

  async find() {
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if(!user) {
       boom.notFound('Customer not found')
    }
    return user};

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes)
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy()
    return { rta: true };
  }
}

module.exports = CustomerService;