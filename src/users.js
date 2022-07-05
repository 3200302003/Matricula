let users = [{
        id: 1,
        name: "Erick Alfredo Quezada Huerta",
        matricula: "181428",
        email: "181428@utags.edu.mx",
    },
    {
        id: 2,
        name: "Bryan Alexis Calzada Rodriguez",
        matricula: "180600",
        email: "180600@utags.edu.mx",
    },
    {
        id: 3,
        name: "David Alejandro Perez Calzada",
        matricula: "180227",
        email: "180227@utags.edu.mx",
    },
    {
        id: 4,
        name: "Jessica Guadalupe Guerrero Perez",
        matricula: "180146",
        email: "180146@utags.edu.mx",
    },
    {
        id: 5,
        name: "Jorge Luis Marmolejo Santos",
        matricula: "170909",
        email: "170909@utags.edu.mx",
    },
    {
        id: 6,
        name: "Giovanni Benjamin Parra Romo",
        matricula: "181972",
        email: "181972@utags.edu.mx",
    },

];

export function getAllUsers() {
    return users;
}

export function getUser(id) {
    return users.find((user) => user.id === id);
}

export function deleteUser(id) {
    users = users.filter((user) => user.id !== id);
}