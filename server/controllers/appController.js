class AppController {
    info (req,res) {
        return res.status(200).json("Info : 'Node.js , Express and MongoDB APP for Shoes store");
    }
}

export default new AppController();