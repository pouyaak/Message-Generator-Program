const getUsersName = (firstName, lastName) => {
    let nameObj = {
        FirstName: firstName,
        LastName: lastName,
    };
    return nameObj
}

const getUsersFavouriteFood = (food) => {
    return food;
}

const getUsersFavouriteCity = (city)=> {
    return city;
}

const generateRandCity = () => {
    let randomNumber = Math.floor(Math.random() * 5)
    switch (randomNumber) {
        case 1:
            return "LA"
            break;
        case 2:
            return "Toronto";
            break;
        case 3:
            return "Amesterdam";
            break;
        case 4:
            return "Berlin";
            break;
        case 5:
            return "Paris";
            break;
    };
}

const generateRandFood = () => {
    let randomNumber = Math.floor(Math.random() * 5)
    switch (randomNumber) {
        case 1:
            return "Pasta"
            break;
        case 2:
            return "Croisant";
            break;
        case 3:
            return "Kabab";
            break;
        case 4:
            return "Steak";
            break;
        case 5:
            return "Chicken";
            break;
    };
}


const randomCity1 = generateRandCity()
const randomFood1 = generateRandFood()

const name1 = getUsersName('Pouya', 'Akbari');
const food1 = getUsersFavouriteFood("Pizza");
const city1 = getUsersFavouriteCity('NYC');



console.log(`Hey ${name1.FirstName} ${name1.LastName}, So your favourite city is ${city1} and you love eating ${food1} ? Well, you should try ${randomCity1}'s ${randomFood1} and believe me you would be crazy on it.`)