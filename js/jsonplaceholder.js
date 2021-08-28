/* ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।  */
/* fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data)) */


/* ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।  */
/* const addComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => viewComment(data))
}
const viewComment = datas =>{
    console.log(datas)
    datas.forEach(data=>{
        const comment = document.getElementById('comment');
        const p = document.createElement('p');
        p.innerText =`${data.body}`;
        comment.appendChild(p);
    })

} */


/* ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।  */

/* const addComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => viewComment(data))
}
addComment();
const viewComment = datas =>{
    console.log(datas)
    datas.forEach(data=>{
        const comment = document.getElementById('comment');
        const div = document.createElement('div');
        div.innerHTML =`
        <h3>Name : ${data.name}</h3>
        <h3>Email : ${data.email}</h3>
        <p>Comment : ${data.body}</>
        `;
        comment.appendChild(div);
    })

} */


/* ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।  */
// Done
/* ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।  */

const addComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => viewComment(data))
}
addComment();
const viewComment = datas =>{
    datas.forEach(data=>{
        console.log(data.id)
        const comment = document.getElementById('comment');
        const div = document.createElement('div');
        div.innerHTML =`
        <div onclick="CommentFecth(${data.id})">
        <h3>Name : ${data.name}</h3>
        <h3>Email : ${data.email}</h3>
        <p>Comment : ${data.body}</>
        </div>
        `;
        comment.appendChild(div);
    })
}

const CommentFecth = commentId =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => dislpaycomment(data))
}

const dislpaycomment = data=>{
    const commentDynamic = document.getElementById('comment-dynamic');
    commentDynamic.style.border = '2px solid blue';
    commentDynamic.style.backgroundColor = 'green';
    commentDynamic.style.textAlign = 'center';
    commentDynamic.innerHTML =
    `
    <h3>Name : ${data.name}</h3>
    <h3>Email : ${data.email}</h3>
    <p>Comment : ${data.body}</>
    
    `
}