const pool = require('../db');

class Post {
    _id = null;
    creationDate = null;

    constructor(authorId, title, text) {
        this.authorId = authorId;
        this.title = title;
        this.text = text;
    }

    setId(id) {
        this._id = id;
    }

    setCreationDate(date) {
        this.creationDate = date;
    }

    getData() {
        return {
            id: this._id,
            authorId: this.authorId,
            title: this.title,
            text: this.text,
        }
    }

    async create() {
        const sql = 'INSERT INTO posts (author_id, title, text) VALUES ($1, $2, $3);';
        const values = [this.authorId, this.title, this.text];

        try {
            const result = pool.query(sql, values);

            const { id, creation_date } = result.rows[0];
            this.setId(id);
            this.setCreationDate(creation_date);

            return true;
        } catch (err) {
            return false
        }
    }

    static async remove(id) {
        const sql = 'DELETE FROM posts WHERE id = ($1);';
        const values = [id];

        try {
            const result = await pool.query(sql, values);

            return true;
        } catch (err) {
            return false;
        }
    }

    static async getPostById(id) {
        const sql = 'SELECT * FROM posts WHERE id = ($1);';
        const values = [id];

        try {
            const result = await pool.query(sql, values);

            const { id, title, text, author_id, creation_date } = result.rows[0];

            const post = new Post(author_id, title, text);
            post.setId(id);
            post.setCreationDate(creation_date);

            return post;
        } catch (err) {
            return -1;
        }
    }

    static async getUserPosts(id, numPage = 1) {
        const sql = 'SELECT * FROM posts WHERE author_id = ($1);';
        const values = [id];

        try {
            const result = await pool.query(sql, values);

            return result.rows;
        } catch (err) {
            return false;
        }
    }

    static async getAllPosts() {
        const sql = 'SELECT * FROM posts ORDER BY creation_date';

        try {
            const result = await pool.query(sql);

            return result.rows;
        } catch (err) {
            return false
        }
    }
}

module.exports = Post;