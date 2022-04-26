import { updateVotes, onValue, voteCount } from "./firebase.js";
let data;

onValue(voteCount, (snapshot) => {
  data = snapshot.val();
  console.log(data);
  photos.innerHTML = updateData(data);
  document.querySelectorAll("button").forEach((e) => e.addEventListener("click", vote));
});

async function vote(e) {
  localStorage.setItem("vote", "true");
  hasVoted();
  let id = e.target.dataset.id;
  updateVotes(id);
  showVotes();
  photos.innerHTML = updateData(data);
}

function showVotes() {
  document.querySelectorAll(".votes").forEach((e) => {
    e.children[0].remove();
  });
}

function hasVoted() {
  let hasVoted = false;
  if (localStorage.getItem("vote") == "true") {
    hasVoted = true;
  }
  return hasVoted;
}

function updateData(data) {
  let dataString = "";

  for (const key in data) {
    if (!isNaN(key)) {
      dataString += `<section>
      <h3>${data[key].name}</h3>
      <img src="${data[key].url}" alt=${data[key].name} />
      <div class="votes">
      ${
        hasVoted()
          ? `<h5 class="hidden">
            ${data[key].votes} out of ${data.totalVotes} votes
          </h5>`
          : `<button data-id=${key} class="btn btn-primary" type="button">Vote</button>`
      }
      </div>
      </section>`;
    }
  }
  return dataString;
}
