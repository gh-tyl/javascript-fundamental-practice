

// // $("button").click(function () {
// //     // load local file and display it in the h1
// //     $("h1").load("../data/helloWorld.txt", function (responseTxt, statusTxt, xhr) {
// //         (statusTxt == "success") ? console.log("External content loaded successfully!") : console.log("Error: " + xhr.status + ": " + xhr.statusText);
// //     });
// // });

// // var products = [];
// // const product = function (id, name, price, amount) {
// //     this.id = id;
// //     this.name = name;
// //     this.price = price;
// //     this.amount = amount;
// //     this.totalPrice = parseFloat(price) * parseInt(amount);
// //     this.calTotal = function () {
// //         if (this.price < 20) {
// //             this.totalPrice = this.totalPrice * (1 + 0.05);
// //         } else if (this.price < 40) {
// //             this.totalPrice = this.totalPrice * (1 + 0.08);
// //         } else if (this.price < 100) {
// //             this.totalPrice = this.totalPrice * (1 + 0.12);
// //         } else {
// //             this.totalPrice = this.totalPrice * (1 + 0.18);
// //         }
// //     }
// //     this.discountPrice = function (discount) {
// //         this.totalPrice = this.totalPrice - this.totalPrice * discount;
// //         this.calTotal();
// //     }
// // }

// // Get body element
// var body = $("body");
// var products = [];
// // Load data from local file
// $.getJSON("../data/products.json", function (data, status) {
//     if (status == "success") {
//         products = data;
//     } else {
//         console.log("Error: " + status);
//         return;
//     }
//     // Create table
//     var tbody = $("tbody");
//     $.each(products, function (index, value) {
//         var tr = $("<tr></tr>");
//         var td = $("<td></td>");
//         td.text(value.id);
//         tr.append(td);
//         td = $("<td></td>");
//         td.text(value.item_name);
//         tr.append(td);
//         td = $("<td></td>");
//         td.text(value.price);
//         tr.append(td);
//         tbody.append(tr);
//     });
// });
