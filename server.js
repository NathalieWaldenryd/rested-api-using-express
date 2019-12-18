/**
 * Route for bank.
 */
"use strict";

const port    = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const router = express.Router();
// const path = require("path");
const test = require("./server/testing.js")
var bodyParser = require("body-parser");
// const url = require("url");

function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}

router.get("/test/index", async (req, res) => {
    let result = await test.allCustomers()
    console.log(result)
    res.json(result)
});

// router.get('/eshop/index', (req, res) => {
//     let data = {
//         title: "Index",
//         header: "Index",
//         paragraph: "This is just a random placeholder text for a index page for databas."
//     };

//     res.render('index', data);
// });

// router.get('/eshop/products', async (req, res) => {
//     let data = {
//         title: "Products",
//         header: 'Produkter',
//         paragraph: 'Dessa är alla produkter.',
//         rows: await products.productsShit(),
//         columns: ['productName', 'productCode'],
//         idColumn: 'productCode',
//         base: 'products'
//     };

//     res.render('crud', data);
// });

// router.get('/eshop/add/products', async (req, res) => {
//     let data = {
//         title: "Products",
//         header: 'Produkter',
//         paragraph: 'Här kan du lägga till en ny produkt.',
//         fields: ['productCode', 'productName'],
//         idColumn: 'productCode',
//         base: 'products',
//         message: req.query.message
//     };

//     res.render('create', data);
// });

// router.post('/eshop/add/products', async (req, res) => {
//     let id = req.body.productCode;
//     let newName = req.body.productName;

//     try {
//         await products.addProducts(id, newName);
//         res.redirect(req.originalUrl);
//     } catch (error) {
//         res.redirect(url.format({
//             pathname: req.originalUrl,
//             query: {
//                 message: "Check if dublicate product code"
//             }
//         }));
//     }
// });

// router.get('/eshop/customers', async (req, res) => {
//     let data = {
//         title: "Customer",
//         header: 'Customer',
//         paragraph: 'Dessa är alla kunder.',
//         rows: await customers.allCustomers(),
//         columns: ['customerId', 'firstName', 'lastName', 'email', 'phonenr', 'adress'],
//         idColumn: 'customerId',
//         base: 'customers'
//     };

//     res.render('crud', data);
// });

// router.get('/eshop/add/customers', async (req, res) => {
//     let data = {
//         title: "Customer",
//         header: 'Customer',
//         paragraph: 'Dessa är alla kunder.',
//         rows: await customers.allCustomers(),
//         fields: ['firstName', 'lastName', 'email', 'phonenr', 'adress'],
//         idColumn: 'customerId',
//         base: 'customers',
//         message: req.query.message
//     };

//     res.render('create', data);
// });

// router.post('/eshop/add/customers', async (req, res) => {
//     let newFirstName = req.body.firstName;
//     let newLastName = req.body.lastName;
//     let newEmail = req.body.email;
//     let newPhonenr = req.body.phonenr;
//     let newAdress = req.body.adress;

//     try {
//         await customers.addCustomer(newFirstName, newLastName, newEmail, newPhonenr, newAdress);
//         res.redirect(req.originalUrl);
//     } catch (error) {
//         console.log(error);
//         res.redirect(url.format({
//             pathname: req.originalUrl,
//             query: {
//                 message: "Check if customer already exist"
//             }
//         }));
//     }
// });

// router.get('/eshop/products/delete/:id', async (req, res) => {
//     let id = req.params.id;
//     let sitename = 'Delete';
//     let what = 'produkt';
//     let data = {
//         title: `${what} ${sitename}`,
//         header: `${sitename} ${what}`,
//         paragraph: `${sitename} ${what} ${id}`,
//         info: await products.getInfoProduct(id),
//         base: 'products',
//         id: id
//     };

//     res.render('delete', data);
// });

// router.get('/eshop/products/edit/:id', async (req, res) => {
//     let id = req.params.id;
//     let sitename = 'Edit';
//     let what = 'produkt';
//     let data = {
//         title: `${what} ${sitename}`,
//         header: `${sitename} ${what}`,
//         paragraph: `${sitename} ${what} ${id}`,
//         info: await products.getInfoProduct(id),
//         idColumn: 'productCode',
//         base: 'products',
//         id: id
//     };

//     res.render('edit', data);
// });

// router.get('/eshop/customers/delete/:id', async (req, res) => {
//     let id = req.params.id;
//     let sitename = 'Delete';
//     let what = 'customer';
//     let data = {
//         title: `${what} ${sitename}`,
//         header: `${sitename} ${what}`,
//         paragraph: `${sitename} ${what} ${id}`,
//         info: await customers.getInfoCustomer(id),
//         base: 'customers',
//         id: id
//     };

//     res.render('delete', data);
// });

// router.get('/eshop/customers/edit/:id', async (req, res) => {
//     let id = req.params.id;
//     let sitename = 'Edit';
//     let what = 'customer';
//     let data = {
//         title: `${what} ${sitename}`,
//         header: `${sitename} ${what}`,
//         paragraph: `${sitename} ${what} ${id}`,
//         info: await customers.getInfoCustomer(id),
//         base: 'customers',
//         idColumn: 'customerId',
//         id: id
//     };

//     res.render('Edit', data);
// });

// router.post('/eshop/products/delete/:id', async (req, res) => {
//     let id = req.params.id;

//     await products.deleteProduct(id);

//     res.redirect('/eshop/products');
// });

// router.post('/eshop/products/edit/:id', async (req, res) => {
//     let id = req.params.id;
//     let newName = req.body.productName;

//     console.log(newName);

//     await products.updateProduct(id, newName);

//     res.redirect(req.originalUrl);
// });

// router.post('/eshop/customers/delete/:id', async (req, res) => {
//     let id = req.params.id;

//     await customers.deleteCustomer(id);
//     res.redirect('/eshop/customers');
// });

// router.post('/eshop/customers/edit/:id', async (req, res) => {
//     let id = req.params.id;
//     let newFirstName = req.body.firstName;
//     let newLastName = req.body.lastName;
//     let newEmail = req.body.email;
//     let newPhonenr = req.body.phonenr;
//     let newAdress = req.body.adress;

//     await customers.updateCustomer(id, newFirstName, newLastName, newEmail, newPhonenr, newAdress);
//     res.redirect(req.originalUrl);
// });

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/src/views'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(router);
app.listen(port, logStartUpDetailsToConsole);
