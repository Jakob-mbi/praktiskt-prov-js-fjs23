// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här

async function renderFetch(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        const div = document.createElement("div");
        div.id="posts";
        document.body.appendChild(div);
        const user1Posts = posts.filter((post)=>{
            if(post.userId == 1){
                return post
            }
        })

        user1Posts.forEach(element => {
            div.innerHTML +=`<div><h2>${element.title}</h2><p>${element.body}</p><hr></div>`
        });
    }
    catch(err)
    {
        console.log(err.message);
    }
 
}
renderFetch();