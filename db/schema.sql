-- to upload dumped database
-- PGPASSWORD={PASSWORD} psql -h oregon-postgres.render.com -U {DATABASE_USER} {DATABASE_NAME} < database_dump.sql

CREATE TABLE dive_sites (
    id SERIAL PRIMARY KEY,
    name TEXT,
    location TEXT,
    description TEXT
);

-- seed

INSERT INTO dive_sites (
    name,
    location,
    description
) VALUES (
    'Gordon''s Bay Underwater Trail',
    'Gordon''s Bay',
    'Local favourite'
); 

INSERT INTO dive_sites (
    name,
    location,
    description
) VALUES (
    'Clovelly snorkel',
    'Clovelly beach',
    'Accessible'
); 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password_digest TEXT,
    date_joined DATE,
    location TEXT
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    site_id INTEGER NOT NULL,
    review INTEGER,
    content TEXT,
    comment_date TIMESTAMP
);

CREATE TABLE image_comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    image_id INTEGER NOT NULL,
    content TEXT,
    comment_date DATETIME
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    site_id INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    upload_date TIMESTAMP  
);

-- seed images

INSERT INTO images (
    user_id,
    site_id,
    image_url,
    upload_date
) VALUES (
    1,
    1,
    'https://secretsydney.com/wp-content/uploads/2023/08/shutterstock_1055826398-min-scaled.jpg',
    '2024-05-14 11:54:01'
);


ALTER TABLE users ADD id int IDENTITY(1,1) NOT NULL primary key;

CREATE TABLE favourites(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    site_id INTEGER NOT NULL
);

