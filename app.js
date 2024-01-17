// Get random cat fact

let url = "https://catfact.ninja/fact";

async function getData() {
    try {
        let fact = await fetch(url);
        let res = await fact.json();
        return res.fact;

    } catch (e) {
        return "error-"+e;
    }
}

let btn = document.querySelector("button");

btn.addEventListener('click',async function(){
    document.querySelector('h2').innerText = await getData();
})


