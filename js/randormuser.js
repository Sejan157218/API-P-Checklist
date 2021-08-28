/* randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।  */

const randomUser =async () =>{
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    displayUser(data.results)
}
randomUser();
const displayUser = users =>{
    users.forEach(user=>{
        console.log(user);
       const userDetail = document.getElementById('user-detail');
       userDetail.innerHTML = `
       <p>
       street : ${user.location.street.number},${user.location.street.name}
       </P>
       <p>city : ${user.location.city}</P>
       <p>state : ${user.location.state}</P>
       <p>country : ${user.location.country}</P>
       <p>coordinates : latitude :${user.location.coordinates.latitude}, longitude :${user.location.coordinates.longitude}</P>
       <p>timezone : offset :${user.location.timezone.offset}, description : ${user.location.timezone.description}</P>
       
       `;
       console.log(userDetail);
       
    })
}

/* ৭. network ট্যাব একটু ভালো করে দেখো। দরকার হলে। গুগলে সার্চ দিয়ে বা ইউটিউবে ভিডিও দেখে ফেলো। এখন বেশিরভাগ জিনিস বুঝতে না পারলেও দেখে ফেলো। ফিউচারে কাজে লাগবে।  */