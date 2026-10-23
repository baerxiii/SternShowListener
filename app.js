const library = {

"1999":[
{
title:"1999-01-04_BOS_CF",
fileId:"1Rrm_NuH-ppWj2wixIeRvV3_CwGsEj4IS"
}
],

"1998":[],
"2001":[],
"2002":[],
"2006":[],
"2007":[]

};

function showYear(year){

document.getElementById(
"yearTitle"
).textContent =
year;

const list =
document.getElementById(
"episodeList"
);

list.innerHTML="";

library[year].forEach(ep=>{

const div =
document.createElement(
"div"
);

div.className =
"episode";

div.textContent =
ep.title;

div.onclick=()=>{

playEpisode(ep);

};

list.appendChild(div);

});

}

function playEpisode(ep){

document.getElementById(
"nowPlaying"
).textContent =
ep.title;

document.getElementById(
"playerFrame"
).src =
`https://drive.google.com/file/d/${ep.fileId}/preview`;

saveRecent(ep.title);

}

function saveRecent(title){

let recent =
JSON.parse(
localStorage.getItem(
"recent"
) || "[]"
);

recent =
recent.filter(
x => x !== title
);

recent.unshift(title);

recent =
recent.slice(0,20);

localStorage.setItem(
"recent",
JSON.stringify(recent)
);

}
