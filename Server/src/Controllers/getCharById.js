const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharacterById = async (req, res) => {

  try {
    const { id } = req.params;
    const  { data } = await axios.get(`${URL}/${id}`);
    
    let character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };

    if (character.id && character.name) return res.status(200).json(character)
    else res.status(404).send("Not found");
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {getCharacterById};
