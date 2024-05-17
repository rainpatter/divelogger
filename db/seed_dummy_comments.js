require('dotenv').config()

const db = require('./index.js')

const dummyComments = [
    "Snorkeling here was like swimming in an aquarium! The water was crystal clear and teeming with colorful fish.",
    "This snorkeling spot is perfect for families. The shallow waters and gentle currents make it easy for everyone to enjoy.",
    "I was amazed by the diversity of marine life I encountered while snorkeling here. It felt like I was in a tropical paradise.",
    "The coral reefs at this location are simply breathtaking. Snorkeling here felt like exploring a hidden treasure trove.",
    "One of the best snorkeling spots I've ever visited! The underwater scenery is stunning, and there's so much to see.",
    "Even if you're not an experienced snorkeler, you'll love exploring the shallow reefs and calm waters of this spot.",
    "I had the most relaxing time snorkeling here. The peaceful ambiance and beautiful surroundings made it a truly memorable experience.",
    "This snorkeling location exceeded my expectations. I saw everything from colorful corals to playful sea turtles!",
    "The snorkeling conditions were perfect – warm water, gentle currents, and incredible visibility.",
    "Snorkeling here was a magical experience. I felt completely immersed in the beauty of the underwater world.",
    "Whether you're a beginner or an experienced snorkeler, this spot offers something for everyone. Don't miss out!",
    "I'll never forget the incredible sights I saw while snorkeling at this location. It's a must-visit for any nature lover."
];

const dateArray = [
    "2023-01-10 08:30:00",
    "2023-03-22 15:45:00",
    "2023-05-05 12:00:00",
    "2023-07-17 09:20:00",
    "2023-09-29 18:10:00",
    "2023-11-11 07:55:00",
    "2023-02-15 13:25:00",
    "2023-04-27 10:05:00",
    "2023-06-30 16:40:00",
    "2023-08-08 11:15:00"
  ]

const userNum = 8
const site_id = 3
const review = 4

function seedComments(array, dates, users) {
    
    for (let i = 0; i < (users-1); i++) {
        user_id = i+1
        comment = array[i]
        date = dates[i]

        let sql = `
        INSERT INTO
        comments
        (
            user_id,
            site_id,
            review,
            content,
            comment_date
        ) VALUES (
            $1,
            $2,
            $3,
            $4,
            $5
        )
        ;
        `
    
    db.query(sql, [user_id, site_id, review, comment, date], (err, result) => {
        if (err) console.log(err)

    })

    }
    
}

seedComments(dummyComments, dateArray, userNum)



