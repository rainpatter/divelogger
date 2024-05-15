require('dotenv').config()

const db = require('./index.js')

const dummyComments = [
    "Wow, that looks like an amazing spot to snorkel!",
    "I wish I could be there right now, snorkeling is so relaxing.",
    "Does anyone know if there are any good snorkeling spots nearby?",
    "The water clarity is incredible! Perfect for snorkeling.",
    "I love snorkeling! It's like exploring a whole new world underwater.",
    "Had an awesome snorkeling trip today, saw so many colorful fish!",
    "Snorkeling is definitely on my bucket list!",
    "I never get tired of snorkeling, it's always such an adventure.",
    "Snorkeling is the best way to beat the summer heat!",
    "Just got back from snorkeling and I'm already planning my next trip!"
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
const site_id = 1
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



//   CREATE TABLE site_comments (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     site_id INTEGER NOT NULL,
//     review INTEGER,
//     content TEXT,
//     comment_date DATETIME,  
//     FOREIGN KEY (user_id) REFERENCES users (id),
//     FOREIGN KEY (site_id) REFERENCES dive_sites (id)
// );