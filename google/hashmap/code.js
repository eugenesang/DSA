const sampleHashmap = new Map();

sampleHashmap.set("name", "John Doe");
sampleHashmap.set("location", {
    city: "New York",
    state: "NY"
});
sampleHashmap.set("age", 30);
sampleHashmap.set("isMarried", false);
sampleHashmap.set("hobbies", ["sports", "movies", "music"]);
sampleHashmap.set("address", {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001"
});



console.log(sampleHashmap);

//  actions
// get value
console.log(sampleHashmap.get("name"));
console.log(sampleHashmap.get("location"));

// update value 
sampleHashmap.set("name", "John Doe");
console.log(sampleHashmap.get("name"));

// delete value
sampleHashmap.delete("name");
console.log(sampleHashmap.get("name"));

// check if key exists
console.log(sampleHashmap.has("name"));

// get all keys
console.log(sampleHashmap.keys());

// get all values
console.log(sampleHashmap.values());

// get all entries
console.log(sampleHashmap.entries());

// get size
console.log(sampleHashmap.size);

// clear
sampleHashmap.clear();