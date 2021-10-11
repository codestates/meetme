use test001;

insert into user (email, password, username, profile_image, role, createdAt, updatedAt)
values ('kimcoding@gmail.com', '1234', 'kimcoding', 'pathtoimage', 'admin', now(), now());

insert into user (email, password, username, profile_image, role, createdAt, updatedAt)
values ('gildong@gmail.com', 'abcd', 'gildong', 'pathtoimage', 'user', now(), now());

insert into category (name, flag, createdAt, updatedAt)
values ('movie', 0, now(), now());

insert into category (name, flag, createdAt, updatedAt)
values ('book', 1, now(), now());

insert into user_category (user_id, category_id, createdAt, updatedAt)
values (1, 1, now(), now());

insert into user_category (user_id, category_id, createdAt, updatedAt)
values (2, 2, now(), now());

insert into tag (name, flag, createdAt, updatedAt)
values ('harry potter', 1, now(), now());

insert into tag (name, flag, createdAt, updatedAt)
values ('lion king', 0, now(), now());

insert into tag (name, flag, createdAt, updatedAt)
values ('harry potter', 1, now(), now());

insert into category_tag (category_id, tag_id, createdAt, updatedAt)
values (1, 1, now(), now());

insert into category_tag (category_id, tag_id, createdAt, updatedAt)
values (1, 2, now(), now());

insert into category_tag (category_id, tag_id, createdAt, updatedAt)
values (1, 3, now(), now());

insert into category_tag (category_id, tag_id, createdAt, updatedAt)
values (2, 3, now(), now());
