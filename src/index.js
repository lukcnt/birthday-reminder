const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

document.getElementById("heading").innerHTML = today.toLocaleDateString(
  "en-US",
  options
);

var newDate = new Date();
var currentMonthAndDate =
  (newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1) +
  "/" +
  newDate.getDate();

const data = [
  {
    id: 1,
    name: "Bertie Yates",
    date: "01/25/2000",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    date: currentMonthAndDate + "/1997",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    date: currentMonthAndDate + "/1996",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    date: currentMonthAndDate + "/1996",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    date: "05/25/1996",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];


var todayData = [];
const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

todayData = data.filter((person, index) => {
  const { date } = person;
  return (
    parseInt(date.substring(3, 5)) === currentDate &&
    parseInt(date.substring(0, 2)) === currentMonth + 1
  );
});

var noOfBirthdays = document.getElementById("numberOfBirthdays");
noOfBirthdays.innerHTML = todayData.length + " birthdays today";
var people = document.getElementById("people");

todayData.forEach((person) => {
  const { id, name, date, image } = person;
  var article = document.createElement("article");
  var img = new Image();
  var info = document.createElement("div");
  var h4 = document.createElement("h4");
  var p = document.createElement("p");
  var dob = new Date(date);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  article.setAttribute("class", "person");
  img.src = image;
  img.setAttribute("alt", name);
  h4.setAttribute("id", "name");
  h4.innerHTML = name;
  p.innerHTML = age + " years";
  info.appendChild(h4);
  info.appendChild(p);
  article.appendChild(img);
  article.appendChild(info);
  people.appendChild(article);
});

function clearAll() {
  people.innerHTML = "";
  noOfBirthdays.innerHTML = "0 birthdays today";
}