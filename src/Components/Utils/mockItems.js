const arrayItemsList = [

    {
        id : "1",
        categoria : "",
        tittle: "cactus",
        img: "#";
    },
    {
        id : "2",
        categoria : "",
        tittle: "simprevivum",
        img: "#";
    },
    {
        id : "3",
        categoria : "",
        tittle: "echeveriametalica",
        img: "#";
    },
    {
        id : "4",
        categoria : "",
        tittle: "combocolgante1 enmancambre",
        img: "#";
    },
    {
        id : "5",
        categoria : "",
        tittle: "combocolgante2 enmancambre"",
        img: "#";
    },
    {
        id : "6",
        categoria : "",
        tittle: "combocolgante3 enmancambre"",
        img: "#";
    },
    {
        id : "7",
        categoria : "",
        tittle: "mini jardin en pava",
        img: "#";
    },
    {
        id : "8",
        categoria : "",
        tittle: "mini jardin1 en maceta de barro",
        img: "#";
    },
    {
        id : "9",
        categoria : "",
        tittle: "mini jardin2 en maceto de barro",
        img: "#";
    };

]

const ItemsPromise = new Promise ((rej)=> {
    setTimeout  (()=>{
        rej (arrayItemsList);
    }, 2000);
});

const getItemList = () => {
    return [
        { id: "1" , tittle :"" , img : ""}
    ];
};

export const ItemsPromise = new Promise ((rej , res) => {
    setTimeout (()=> {
        rej(getItemList());
    }, 2000);
});

export default ItemsPromise: