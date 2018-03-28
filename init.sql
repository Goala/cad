   
    drop table if exists media cascade;
   
    create table media (
       id  bigserial not null,
        description varchar(255),
        file bytea,
        file_ending varchar(255),
        type int4,
        primary key (id)
    );