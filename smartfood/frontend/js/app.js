function uploadFood() {
    const type = document.getElementById("type").value;
    const quantity = document.getElementById("quantity").value;

    db.collection("food").add({
        type: type,
        quantity: quantity,
        createdAt: new Date(),
        price: "10%",
        status: "available"
    })
    .then(() => alert("Food Uploaded"))
    .catch(err => alert(err.message));
}
