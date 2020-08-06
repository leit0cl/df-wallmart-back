#! /bin/bash


 mongoimport --host mongodb --username productListUser --password productListPassword --authenticationDatabase admin --db promotions --collection products --mode upsert --file /mongo-seed/productos.json --jsonArray