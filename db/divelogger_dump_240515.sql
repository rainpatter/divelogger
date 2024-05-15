--
-- PostgreSQL database dump
--

-- Dumped from database version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: georgia
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    site_id integer NOT NULL,
    review integer,
    content text,
    comment_date timestamp without time zone
);


ALTER TABLE public.comments OWNER TO georgia;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: georgia
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO georgia;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: georgia
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: dive_sites; Type: TABLE; Schema: public; Owner: georgia
--

CREATE TABLE public.dive_sites (
    id integer NOT NULL,
    name text,
    location text,
    description text
);


ALTER TABLE public.dive_sites OWNER TO georgia;

--
-- Name: dive_sites_id_seq; Type: SEQUENCE; Schema: public; Owner: georgia
--

CREATE SEQUENCE public.dive_sites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.dive_sites_id_seq OWNER TO georgia;

--
-- Name: dive_sites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: georgia
--

ALTER SEQUENCE public.dive_sites_id_seq OWNED BY public.dive_sites.id;


--
-- Name: favourites; Type: TABLE; Schema: public; Owner: georgia
--

CREATE TABLE public.favourites (
    id integer NOT NULL,
    user_id integer NOT NULL,
    site_id integer NOT NULL
);


ALTER TABLE public.favourites OWNER TO georgia;

--
-- Name: favourites_id_seq; Type: SEQUENCE; Schema: public; Owner: georgia
--

CREATE SEQUENCE public.favourites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favourites_id_seq OWNER TO georgia;

--
-- Name: favourites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: georgia
--

ALTER SEQUENCE public.favourites_id_seq OWNED BY public.favourites.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: georgia
--

CREATE TABLE public.images (
    id integer NOT NULL,
    user_id integer NOT NULL,
    site_id integer NOT NULL,
    image_url text NOT NULL,
    upload_date timestamp without time zone
);


ALTER TABLE public.images OWNER TO georgia;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: georgia
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO georgia;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: georgia
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: georgia
--

CREATE TABLE public.users (
    username text,
    email text,
    password_digest text,
    date_joined timestamp without time zone,
    location text,
    id integer NOT NULL
);


ALTER TABLE public.users OWNER TO georgia;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: georgia
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO georgia;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: georgia
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: dive_sites id; Type: DEFAULT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.dive_sites ALTER COLUMN id SET DEFAULT nextval('public.dive_sites_id_seq'::regclass);


--
-- Name: favourites id; Type: DEFAULT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.favourites ALTER COLUMN id SET DEFAULT nextval('public.favourites_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: georgia
--

COPY public.comments (id, user_id, site_id, review, content, comment_date) FROM stdin;
2	7	1	4	Snorkeling is definitely on my bucket list!	2023-02-15 13:25:00
4	6	1	4	Had an awesome snorkeling trip today, saw so many colorful fish!	2023-11-11 07:55:00
5	5	1	4	I love snorkeling! It's like exploring a whole new world underwater.	2023-09-29 18:10:00
6	4	1	4	The water clarity is incredible! Perfect for snorkeling.	2023-07-17 09:20:00
7	3	1	4	Does anyone know if there are any good snorkeling spots nearby?	2023-05-05 12:00:00
11	1	1	\N	Conditions were so good today!	2024-05-15 14:08:18
12	1	2	\N	Port Jackson shark sighting!	2024-05-15 14:09:45
\.


--
-- Data for Name: dive_sites; Type: TABLE DATA; Schema: public; Owner: georgia
--

COPY public.dive_sites (id, name, location, description) FROM stdin;
1	Gordon's Bay Underwater Trail	Gordon's Bay	Local favourite
2	Clovelly snorkel	Clovelly beach	Accessible
3	Coogee	Coogee Beach	\N
4	Malabar Beach	Malabar	\N
\.


--
-- Data for Name: favourites; Type: TABLE DATA; Schema: public; Owner: georgia
--

COPY public.favourites (id, user_id, site_id) FROM stdin;
1	1	1
2	1	2
3	1	3
4	3	1
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: georgia
--

COPY public.images (id, user_id, site_id, image_url, upload_date) FROM stdin;
4	1	1	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lXL3DTzX_KGLep7jVeCqPzJEPji0-HZB7x0JEGb30Q&s	2024-05-15 12:52:01
6	1	1	https://www.reefranger.au/wp-content/uploads/2023/06/2022-Gordons-Bay-0341886.jpg	2024-05-15 14:08:57
7	1	2	https://2.bp.blogspot.com/--XPf4gD1avg/ViCcK2HUpfI/AAAAAAAAAQg/3n6WRbJx_f4/s1600/DSCN1555.JPG	2024-05-15 14:09:30
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: georgia
--

COPY public.users (username, email, password_digest, date_joined, location, id) FROM stdin;
georgia	gs@test.com	$2b$10$OIgnpiJ.UPKwUbNrUR7Zo.nty7QWj7M.eItINqVoBVkV6APt6GxjO	2024-05-01 00:00:00	Sydney	1
DiveDreamer	DiveDreamer@test.com	$2b$10$gZeyspF7eCOebncunn7dGunufMoAMYIofjnx69OVy4hLO51uEdIe2	2024-01-29 00:00:00	Sydney	2
AquaExplorer	AquaExplorer@test.com	$2b$10$eiw/3XOUe.d85WHtOD0YfeF8j6DhcpYxTJQ577k4.dwtzv8h02GxW	2024-01-29 00:00:00	Sydney	3
SeashellCollector	SeashellCollector@test.com	$2b$10$uDIJv2NLpQchACojhsiRrelt1pwe.lfxtQ70.5gsENvqt6PRuapA.	2024-01-29 00:00:00	Sydney	4
OceanOdyssey	OceanOdyssey@test.com	$2b$10$EYILVTzx1Viy7vzxpqz3n.1iivbBC5nN3/vjCvj9DuL7eqafdcP02	2024-01-29 00:00:00	Sydney	5
ReefRover	ReefRover@test.com	$2b$10$lRVrFV1B9K5CMNf4JRejtujMBSD2rRfHsCboXgMa6xDpEA1HOFMsy	2024-01-29 00:00:00	Sydney	6
nat99	nat99@test.com	$2b$10$CkYamL2SPS.4TXDsSffUHO0S0/iWpx0npzRqcE29gahZsqONP5SI2	2024-01-29 00:00:00	Sydney	7
xXxoceanLuvrxXx	nocean@test.com	$2b$10$r.uoPffPKbjsXwA0OAZGMOZQs0QhnPW2SjWa6zcqi6DU4hU3sy.8y	2024-01-29 00:00:00	Sydney	8
divegirl92	dg@gmail.com	$2b$10$9iqPsTlh/gGe21quYa9kCeMZ8zBNJNwZBQrXKhq0MyrN.CHpgFZ5i	2024-05-15 03:47:06	\N	9
test	test@gmail.com	$2b$10$tDUG./CC2b39YMAmKmIXlOZKZFEK3pgpx.J7r.i.LJqFB3cUWkoHm	2024-05-15 03:48:06	\N	11
asdsdadas	asdsdsdsd	$2b$10$okajDJq/uldLzvBLUtHuXuKaggat3ekKWtfZntp4dZG9I3X/vNgcK	2024-05-15 04:29:42	\N	14
asds1	asdsdsdasdasd	$2b$10$i4R/B49HNUSTj6ECjE5KRum6SboBWE9mBRelh1jgimQCZskuByQA2	2024-05-15 04:30:25	\N	15
1111	111111	$2b$10$yMmoGquWj0XUSF6NVSwp8.QN334ufGHsUGgoi/1.m8Jleiob.hqEC	2024-05-15 04:31:01	\N	16
newuser2	newuser2	$2b$10$DgLieaWCRODOHJEFD1sgSOI7RASrYGFpuSOdNCz2oHH83IhgWDhCK	2024-05-15 04:37:27	\N	17
newuser10	new@gmail.com	$2b$10$C3HbbQXHt7YK2wZAU5bb7.XIolG91oScxhXmMBMs1EtGAJJjTgGB2	2024-05-15 04:38:39	\N	18
newuser11111	adsdsdasdasdasdfsd	$2b$10$ZkCSbia6eMhia7/9qzdzrOQAT6342FQ7SzJalrBYsdJMzIPJKnam.	2024-05-15 04:40:23	\N	19
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: georgia
--

SELECT pg_catalog.setval('public.comments_id_seq', 12, true);


--
-- Name: dive_sites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: georgia
--

SELECT pg_catalog.setval('public.dive_sites_id_seq', 4, true);


--
-- Name: favourites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: georgia
--

SELECT pg_catalog.setval('public.favourites_id_seq', 4, true);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: georgia
--

SELECT pg_catalog.setval('public.images_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: georgia
--

SELECT pg_catalog.setval('public.users_id_seq', 19, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: dive_sites dive_sites_pkey; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.dive_sites
    ADD CONSTRAINT dive_sites_pkey PRIMARY KEY (id);


--
-- Name: favourites favourites_pkey; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.favourites
    ADD CONSTRAINT favourites_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: images images_site_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: georgia
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_site_id_fkey FOREIGN KEY (site_id) REFERENCES public.dive_sites(id);


--
-- PostgreSQL database dump complete
--

