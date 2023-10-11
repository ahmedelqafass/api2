let row = document.querySelector(".row");
let nextUser = document.querySelector(".next");
let preUser = document.querySelector(".pre");
let columns = "";
let id = 1;
let length;

function fetchUser(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      columns = ` <div class="mt-4">
      <div class="card bg-danger text-center text-white p-3">
    <h1 class="mt-4" style="font-size:20px">Name : ${data.name}</h1>
<h2 class="mt-4" style="font-size:20px">User Name : ${data.username}</h2>
<h3 class="mt-4" style="font-size:20px">User Email : ${data.email}</h3>
<p style="font-size:13px">city : ${data.address.city}</p>
</div><!-- card -->
</div><!-- col-4 -->`;
      row.innerHTML = columns;
    })
    .catch((error) => console.log(error));

  fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.userId === id) {
          console.log(element);
          columns += ` 
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4" >
            <div class="card bg-warning text-center text-white p-3" style="height:280px">
                <h1 class="mt-4" style="font-size:20px">${element.title}</h1>
                <p style="font-size:13px">${element.body}</p>
            </div><!-- card -->
          </div><!-- col-4 -->`;
          row.innerHTML = columns
        }
      });
    })
    .catch((error) => console.log(error));
}

fetchUser(id);

nextUser.onclick = () => {
  id++;
  if (id > 10) id = 1;
  fetchUser(id);
};

preUser.onclick = () => {
  id--;
  if (id < 1) id = 10;
  fetchUser(id);
};
