const title = document.querySelectorAll("h1.title");
const inp = document.querySelector("input");
const list = document.querySelector("ul");
const btn = document.querySelector("button");

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener("click", e => {
        if (e.target.style.textDecoration == ""){
            e.target.style.textDecoration = "underline blue 5px";
        } else{
             e.target.style.textDecoration = ""; 
        }
    })
}
inp.addEventListener("keydown", e => {
    if (e.key == "Enter"){
        const li = document.createElement("li");
        li.textContent = inp.value;
        inp.value = "";
        list.append(li);
        li.addEventListener("click", e => {
        e.target.remove();
        })
    }
})
btn.addEventListener("click",e => {
    const listLength = Array.from(list.children);
    for (let i = 0; i < listLength.length; i++) {
        listLength[i].remove();
        inp.value = "";
    }
})