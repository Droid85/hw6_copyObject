const user = {

    name:'Bob',

    age: 34,

    id:1,

    address:{

        city:'Odessa',

        country:'Ukraine'

    },

    books:[

        {

            name:'red one',

            id:35,

            author: {

                name:'Some Author',

                id:277

            },

            tags:['history', 'roman']

        },

    ],

};

function copyObjRecursive(obj, duplicate = {}) {
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            duplicate[key] = obj[key];
        } else if (Array.isArray(obj[key])) {
          copyObjRecursive(obj[key], duplicate[key] = []);
        } else {
          copyObjRecursive(obj[key], duplicate[key] = {});
        }
    }
    return duplicate;
}

let objDuplicate = copyObjRecursive(user);

console.log(objDuplicate);
