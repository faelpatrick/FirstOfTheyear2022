class HelloController {
    async index(req, res) {
        return res.json({ hello: 'World', author: 'Rafael', version: '2' });
    }
}

export default new HelloController();