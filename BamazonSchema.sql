drop database if exists bamazon_db;
create database bamazon_db;

use bamazon_db;

create table products(
    item_id int not null auto_increment,
    product_name varchar(30) not null,
    department_name varchar(30) not null,
    price int not null,
    stock_quantity int not null,
    primary key (item_id)
);

insert into products(product_name, department_name, price, stock_quantity)
values("Laptop", "Electronics", 300, 150),
("TV", "Electronics", 200, 200),
("Shoes", "Clothing", 50, 250),
("Shirt", "Clothing", 25, 100),
("Sci-fi Novel", "Books", 5, 200),
("Horror Novel", "Books", 10, 150),
("Mp4 Player", "Electronics", 100, 300),
("Adventure Novel", "Books", 5, 200),
("Pants", "Clothing", 15, 200),
("Desktop", "Electronics", 250, 100);

select * from products;