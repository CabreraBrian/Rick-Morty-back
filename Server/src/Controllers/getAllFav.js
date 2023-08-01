const { Favorite } = require('../DB_connection')

const getAllFav = async (req, res)=>{

    try {
        const dbFavs = await Favorite.findAll()
        return res.status(200).json(dbFavs);
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = { getAllFav }