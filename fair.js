var fairs = {
    "hackathon-turkiye": {
        "name": "Hackathon Türkiye",
        "description": `Hackathon Türkiye is a community for all hackathon lovers all over the country. 
        You can join *athon events by following our website, social media accounts and also by subscribing our e-mail newsletter.`,
        "x": 3400,
        "y": 920,
        "website": "https://hackathonturkiye.com/"
    },
    "back2theschool": {
        "name": "Back2TheSchool",
        "description": `Back2TheSchool is an Online Ideathon to search solving problems on education system in pandemic situation`,
        "x": 4840,
        "y": 1260,
        "website": "https://back2theschool.com/"
    },
    "edebiyat-yarismalari": {
        "name": "Edebiyat Yarışmaları",
        "description": `Announcing all literature competitions in Turkey`,
        "x": 5800,
        "y": 1480,
        "website": "http://edebiyatyarismalari.com/"
    },
    "zoo-adventure": {
        "name": "Zoo Adventure",
        "description": `Choose your own adventure book for kids`,
        "x": 2000,
        "y": 1340,
        "website": "https://play.google.com/store/apps/details?id=com.ionicframework.coon866068&hl=tr&gl=US"
    },
    "master-of-soccer": {
        "name": "Master of Soccer",
        "description": `Swipe game to lead a football club for android`,
        "x": 3240,
        "y": 1600,
        "website": "https://play.google.com/store/apps/details?id=com.ballkaya.game.soccer"
    },
    "choose-your-swipe-game": {
        "name": "Choose Your Swipe Game",
        "description": `Create your swipe games and quizes for friends on web`,
        "x": 4200,
        "y": 1800,
        "website": "http://www.chooseyourswipegame.com/"
    }
};

exports.getFair = function (id) {
    return fairs[id];
};

exports.getFairs = function () {
    return fairs;
};