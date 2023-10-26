--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Homebrew)
-- Dumped by pg_dump version 15.4 (Homebrew)

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
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(200) NOT NULL,
    text text NOT NULL,
    author_id integer NOT NULL,
    creation_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    name character varying(40) NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, title, text, author_id, creation_date) FROM stdin;
14	додаю запис	номер два	16	2023-10-26 23:12:09.571396
15	і ще один	цей вже третій\r\n	16	2023-10-26 23:12:23.054008
16	Оууу в мене стільки постів шо прям багацько	всьо є тут	16	2023-10-26 23:12:47.53036
13	Відредагований заголовок	час)	16	2023-10-26 22:54:51.72355
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, name, password) FROM stdin;
1	freeivanzw@gamil.com	Ivan Kozak	gfhjkm
2	freeivanzw1@gmail.com	asdfa	$2b$10$x/C4Z39EczjJTqh7vVtMDuuQAfRIHcKjBzuEJZ/WQ8FMQWNfaMr/q
7	websufix@ukr.net	ivantest	$2b$10$uzmmvG9wni8mYLnQk8hQzO4Y6p1WMRY/6UKGSz0ImD0KsA3R2eDSq
10	asdf@asdf.as		$2b$10$jImsmfIbozEJQv1dcpV9veQkuO0iRPvwlGAiebLjp/1LA.9fVFLdm
11	fr1eeivanzw@gmail.com	ivan	$2b$10$ySOACpvw0/f6XvFYTgK7XeubfZTHZvpI.mD4KAyIOdWIbbcie4qq6
12	free123ivanzw@gmail.com	asdf	$2b$10$ouKhHtLk1VMd7UMqsKOGWeaG/TdlB1zNkkaLEkuF/lNDkyj4Tgk7O
13	test@reg.com	lol	$2b$10$ll9RKGKZws/14LqLnQz4c.fzLK17CfxuiuZJM/Mfx4UoZNghPe28K
14	ivankozak29012999@gmail.com	asdf	$2b$10$Mu0b3AMgAfjcyqRG1ArUYuW.S2hA9WyDCYshUMbOX588qLH4xMySK
16	tester123@gmail.com	tester123	$2b$10$9GNfBBvOJGYElc0gznaL4O85GtxCSVf2zodNGE9nf7YNkYoAtVvgW
17	ivankozak290999@gmail.com	df	$2b$10$WvNRHErw8GItk.bwENMMvuy8xl7XqSEduQBkVQUV4dhqQAaWyL61G
3	freeivanzw@gmail.com	Ivan Kozak	$2b$10$GAM9aNIMIUcPkGpJC0vpReXnT8MKpncpicbyLZMdKvknweYI5RG6C
20	ivankozak29099@gmail.com	ivan1 kozak1	$2b$10$Flp87vjZQj/8Hithcj8Gtucrl3qlD3.q4dZ0c/Ic6fPG5RDMZGyGG
21	test@tester.com	ivan1 kozak1	$2b$10$xSwklWRuAMPrwQcgSCYdt.U42NwvHiZjqCbmbRSEKpEG8DuCsZcC.
22	ivankozak2909991@gmail.com	Ivanko	$2b$10$naLBoL0edp8skwDDN7Ileu2E5r3Ese0M/ZJLsEpyjo.TA7kuivXQO
24	asdf@sdf.com	Joby	$2b$10$yX02mU2.q9tSW/rzNATNL.QGHnyIA27dkPxC6LGRDHmFLLAuHij/C
25	testerok@gmail.com	lolik	$2b$10$e7yVYf3SisYdMWOMt2V3Ou2aymShsuynMewnpSq0bi8l39MNNKjIm
26	teserdfs@sdf.sdf	asdfasdf	$2b$10$Jt3iPHwIsi2tq4D0/jXaZO9KCxymeKs2XtmHrRGBQE0Kf9/iEJkUW
27	asdfqewr@sdf.sdf	asdfasdf	$2b$10$.xEzfz.Bov7xlPpA5BkbxONf.NPbFk0bvohJNqkJNV1Iyo/GyXusK
28	createuser@sdf.sdf	tester	$2b$10$Ngu4jN9qE5K9MsAvnX2sLORS0Cdu1h8qmhgaFYNhxAev.vubQXpK6
29	ivankozak29099sdf9@gmail.com	asdf	$2b$10$799PdqtH9Mm4d1DtelB9wO19EyjcEVwKMcyjc55Y4UmXKhv/4cH1.
30	lol@gmail.com	gfhjkm	$2b$10$SJik7D/QiCT5jSaqdhI6DeuftB29533G3XEYQzpe70PB5RQtBAJ4e
31	newuwer@asdf.df	gfhjkm	$2b$10$cgHGGeRE4oeyg8W9HeF9i..ctoUxE2VwH09A5T6jDjE0ORJnjSlv6
32	testu@gmail.com	ivanko	$2b$10$/RRJ0kh5/zR.BpulZJbk3u4F4366G7YJGXQKearRorjG/SVckf0cq
34	ivankozak290999@gmailasdfasd.com	gfhjkm	$2b$10$OVWyQU9ytmwxWMBSh1si8uLziI9c2l7WMT.JWDfHeoL4zaP3dH.j.
35	testdata@gamil.com	tester	$2b$10$dRlcX0u49ltZCsSEyQ0BNuBeQ8I7pA9DTanV4EzEZD5IyNnmP4Oge
36	asdf@msdf.sdf	asdf	$2b$10$h8QYjHTGNUDHs7dwZ77gTe0tAFkaPpQtyFfjy6TIRn/nUmaelYL/2
\.


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 36, true);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: posts post_author; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_author FOREIGN KEY (author_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

