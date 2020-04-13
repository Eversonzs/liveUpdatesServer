CREATE SCHEMA IF NOT EXISTS live_updates;

-- Scripts to create sequences for ids.

CREATE SEQUENCE live_updates.user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE live_updates.post_category_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE SEQUENCE live_updates.post_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- Scripts to create tables.

CREATE TABLE live_updates."user"
(
    user_id numeric NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    lastname character varying(100) NOT NULL,
    birthday date,
    cellphone character varying(50),
    PRIMARY KEY (user_id),
    UNIQUE (username),
    UNIQUE (email)
)

CREATE TABLE live_updates.post_category (
    post_category_id numeric NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(1000),
    PRIMARY KEY (post_category_id),
    UNIQUE (name),
);

CREATE TABLE live_updates.post (
    post_id numeric NOT NULL,
    post_category_id numeric NOT NULL,
    user_id numeric NOT NULL,
    title character varying(500) NOT NULL,
    description text NOT NULL,
    image text,
    "timestamp" timestamp with time zone NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (user_id)
        REFERENCES live_updates."user" (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    FOREIGN KEY (post_category_id)
        REFERENCES live_updates.post_category (post_category_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

    