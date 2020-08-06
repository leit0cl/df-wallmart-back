db.createUser(
    {
        user: "productListUser",
        pwd: "productListPassword",
        roles: [
            { role: "readWrite", db: "promotions" }
        ]
    }
)