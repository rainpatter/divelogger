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

CREATE TABLE site_comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    site_id INTEGER NOT NULL,
    content TEXT,
    comment_date DATETIME,  
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (site_id) REFERENCES dive_sites (id)
);

CREATE TABLE image_comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    image_id INTEGER NOT NULL,
    content TEXT,
    comment_date DATETIME,  
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (image_id) REFERENCES images (id)
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    site_id INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    upload_date TIMESTAMP,  
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (site_id) REFERENCES dive_sites (id)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    site_id INTEGER NOT NULL,
    content TEXT, 
    review_date DATETIME,  
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (site_id) REFERENCES dive_sites (id)
);