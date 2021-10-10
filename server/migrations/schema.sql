drop database if exists test001;
create database test001;
use test001;

create table user(id int auto_increment, email varchar(255) not null, password varchar(255) not null, username varchar(255), profile_image varchar(255), role varchar(255), createdAt timestamp, updatedAt timestamp, primary key (id));

create table user_category(id int auto_increment, user_id int, category_id int, createdAt timestamp, updatedAt timestamp, primary key (id));

create table category(id int auto_increment, name varchar(255) not null, flag int not null, createdAt timestamp, updatedAt timestamp, primary key (id));

create table category_tag(id int auto_increment, category_id int, tag_id int, createdAt timestamp, updatedAt timestamp, primary key (id));

create table tag(id int auto_increment, name varchar(255) not null, flag int not null, createdAt timestamp, updatedAt timestamp, primary key (id));

alter table user_category add foreign key (user_id) references user (id);
alter table user_category add foreign key (category_id) references category (id);
alter table category_tag add foreign key (category_id) references category (id);
alter table category_tag add foreign key (tag_id) references tag (id);
