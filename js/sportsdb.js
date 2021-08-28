/* ৮. সিরিয়াস প্রাকটিস 

the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে।  */
/* ৯. চ্যালেঞ্জ

দেখো sports db এর জন্য যে ওয়েবসাইট বানাবে সেখানে একটা লোডিং স্পিনার যোগ করতে পারো কিনা। জিনিসটা একটু কঠিন মনে হতে পারে। তাও দেখানোর চেষ্টা করো। এইটা আমরা এক সময় দেখিয়ে দেব। তবে তার আগে তুমি দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।  */
 const spinner = document.getElementById('spinner');
const getSerch =()=>{
    const searchBox = document.getElementById('search-box');
    const searchValue = searchBox.value;
    searchBox.value = '';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>searchResults(data.teams))
    spinner.classList.remove('d-none')
}

const searchResults = results =>{
    spinner.classList.add('d-none')
    const showSearchResult = document.getElementById('search-result');
    showSearchResult.textContent = '';
    results.forEach(result =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="getWithId(${result.idTeam})" class="card">
            <img src="${result.strStadiumThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result.strTeam}</h5>
            </div>
          </div>
        `;
        showSearchResult.appendChild(div);
    })
}
const getWithId = idTeam =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}
    `;
    fetch(url)
    .then(res =>res.json())
    .then(data =>displayView(data.teams[0]))
}
const displayView = view=>{
    const detailsView = document.getElementById('details-view');
    detailsView.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${view.strStadiumThumb}" class="card-img-top h-50 img-fluid" alt="Image">
    <div class="card-body">
      <h5 class="card-title">${view.strTeam}</h5>
      <h5 class="card-title">${view.strLeague}</h5>
      <p class="card-text">${view.strStadiumDescription.slice(0,200)}.</p>
      <p class="card-text">${view.strStadiumLocation}.</p>
      <a href="${view.strFacebook}" class="btn btn-primary">Go Facebook</a>
    </div>
    `;
    detailsView.appendChild(div);
}
