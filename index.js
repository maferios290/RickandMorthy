const searchCharacter = () => {
    let characterName = document.getElementById('search-field').value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
        .then(res => res.json())
        .then(data => displayCharacters(data.results))
        .catch(error => console.log("Character not found", error));
};
