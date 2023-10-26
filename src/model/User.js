const bcrypt = require('bcrypt');
const pool = require('../db');

class User {
    constructor(id = null, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async create() {
        const saltRounds = 10;

        try {
            const hashPassword = await bcrypt.hash(this.password, saltRounds);

            this.password = hashPassword;

            const sql = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
            const values = [this.name, this.email, this.password];

            const result = await pool.query(sql, values);

            if (result.rowCount === 0) {
                throw new Error();
            }

            this.id = result.rows[0].id;

            return true;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    getData() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
        }
    }

    static async getUserById(id) {
        const sql = 'SELECT * FROM users WHERE id = ($1)';
        const values = [id];

        try {
            const result = await pool.query(sql, values);

            if (result.rows === 0) {
                throw new Error('user not found');
            }

            const {id, name, email, password } = result.rows[0];

            return new User(id, name, email, password);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async auth(email, password) {
        const sql = 'SELECT * FROM users WHERE email = ($1)';
        const values = [email];

        try {
            const result = await pool.query(sql, values);

            const userData = result.rows[0];

            await bcrypt.compare(password, userData.password);

            return new User(userData.id, userData.name, userData.email, userData.password);
        } catch (err) {
            throw new Error(err.message);
        }
    }

}

module.exports = User;