let racs = document.querySelector('#list')
let divlista = racs.children;

function click(e) {
    // const szoveg = e.target.innerHTML
    console.log(e.currentTarget)
    e.currentTarget.classList.toggle('kesz')
    sort();
}

function sort(){
    racs.replaceChildren(
        ...(Array.from(divlista).sort((a, b) => {
            if (!a.classList.contains('kesz') && b.classList.contains('kesz')) {
                return -1;
            }
            if (a.classList.contains('kesz') && !b.classList.contains('kesz')) {
                return 1;
            }
            
            return 0;
        })
        ))
}

fetch("/task")
.then(function(data) {
    return data.json();
}).then(function(feladatok) {
	for (let i = 0; i < feladatok.length; i++) {
        const div = document.createElement("div");
        
		const p = document.createElement("p");
		p.innerText = feladatok[i].task;
		div.appendChild(p);
        
		racs.appendChild(div);
        div.addEventListener('click', click)
        sort();
        
	}
});
// document.querySelector('#new_item').addEventListener('submit', function (e) {
//         e.preventDefault()

//         const input = document.querySelector('#new_item > input')
//         const text = input.value;
//     const new_post = document.createElement('div')
//     new_post.innerText = text
//     racs.appendChild(new_post)
//     new_post.addEventListener('click', click)
//     input.value = ""
//     sort();
// })


    // function katt(element) {
    //     const szoveg = element.innerHTML;
    // }
    
    // function x(a, b, c, d) { }
    // const y = [1, 2, 3, 4]
    
    // x(...y)