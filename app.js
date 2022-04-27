// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(`Question 1`);
console.log(jokeJS1);

// 1b
const {setup} =jokeJS1;
p1.innerText = setup;


const {punchline} = jokeJS1;
p2.innerText = punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

//2a, 2b, 2c
const friendsJS2 =axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
.then(res => {
   console.log(res.data);
   p3.innerText = res.data.character;
   p4.innerText = res.data.quote;
})
.catch (err =>{
    console.log(err);
    console.log(`Exercise 2a was not successful`);
});

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3b
async function quoteFunc(){
    try{
        // 3a
        const quoteJS3 =await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);

        // 3c
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
        // 3d
    } catch (err){
        console.log(err);
    }
}
quoteFunc();


// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc (){
    try{
        const episodeByNum = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        console.log(episodeByNum.data);
        p7.innerText = episodeByNum.data.name;
    } catch(err){
        console.log(err);
    }
}
tvMazeFunc ();

// BONUS
// 5
const body = document.querySelector(`body`);

axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)

.then(res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_default;
    body.append(img);
})

.catch (err => {
    console.log(err);
    alert(`You did NOT catch that Pokemon!`)
});

// 6
