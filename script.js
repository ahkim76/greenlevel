const times = [
  "7.25", //start
  "8.47", //end of first

  "8.51", //passing prd
  "9.21", //end of gator time

  "9.25", //2nd
  "10.47", //end of 2nd
  "11.30", // lunch
  
  "12.52",

  "12.56",
  "14.18",
];
const periods = [
  "Until 1st period", //when it hits 7.25, go to 2nd
  "Until gator time", //when it hits 8.47, go to 3rd

  "Passing period", //when it hits 8.51, go to 4th
  "Until 2nd period", //when it hits 9.21, go to 5th

"Passing period", //when it hits 9.25, go to 6th
  "Until Lunch", //displays this until 10.47
  "Until 3rd period", //displays this until 11.30

  
  "Until 4th period", //displays this until 12.52
  "Passing period", //displays this until 12.56
  "Until end of school", //displays this until 2.18
];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function currentTime() {
  let date = new Date();
  let day = date.getDay();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  const now = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  document.getElementsByClassName("date-text")[0].innerText = new Intl.DateTimeFormat('en-US', options).format(now);
  let time = parseFloat(mm / 100) + parseInt(hh);
  if (day == 6) {
    let time = (7 - day) + " day until school"
    document.getElementsByClassName("circle-text")[0].innerText = time;
    let t = setTimeout(function() {
      currentTime()
    }, 1000);
  } else if (day == 0 || time > 14.18) {
    hh = Math.floor((1885 - (mm + hh * 60)) / 60);
    mm = (Math.floor((1885 - (mm + hh * 60)) % 60) > 0) ? Math.floor((1885 - (mm + hh * 60)) % 60 - 1) : Math.floor((1885 - (mm + hh * 60)) % 60);
    ss = 60 - ss - 1;
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    document.getElementsByClassName("circle-time")[0].innerText = `${hh}:${mm}:${ss}`;
    document.getElementsByClassName("circle-text")[0].innerText = " Until first Period";
    let t = setTimeout(function() {
      currentTime()
    }, 1000);
  } else {
    for (let i = 0; i < times.length; i++) {
      if (parseFloat(times[i]) > time) {
        let splitTime = times[i].split(".");
        let newtime = parseFloat(splitTime[0]) * 60;
        newtime += parseFloat(splitTime[1])
        hh = Math.floor((newtime - (mm + hh * 60)) / 60);
        mm = (Math.floor((newtime - (mm + hh * 60)) % 60) > 0) ? Math.floor((newtime - (mm + hh * 60)) % 60 - 1) : Math.floor((newtime - (mm + hh * 60)) % 60);
        ss = 60 - ss - 1;
        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;
        document.getElementsByClassName("circle-time")[0].innerText = `${hh}:${mm}:${ss} `;
        document.getElementsByClassName("circle-text")[0].innerText = periods[i];
        break;
      }
    }
    let t = setTimeout(function() {
      currentTime()
    }, 1000);
  }
}
currentTime();


function change() {
  list = [
    ['AP Exams', "Carroll Softball vs West Millbrook Softball", 'yes', 'wowzues'],
    ['AP Exams'],
    ['AP Exams', 'Community Use Rental'],
    ['Community Use Rental'],
    ['Community Use Rental', 'Dhar Mann meet and greet'],
    ['Community Use Rental'],
    ['Nothing']
  ];
  let date = new Date();
  let day = date.getDay();
  let schoolDay = day;
  let month = date.getMonth()
  for (var x = 0; x < list.length; x++) {
    for (var b = 0; b < list[x].length; b++) {
      var board = document.createElement('div');
      board.className = (b % 2 == 0) ? board.className = "event1" : board.className = "event2";
      board.innerText = list[x][b];
      board.classList.add("the-event")
      document.getElementsByClassName("amazing-events")[x].appendChild(board);
    }
    document.getElementsByClassName("day-header")[x].innerText = days[schoolDay];
    document.getElementsByClassName("day-date")[x].innerText = `${months[month]} ${parseInt(date.getDate() + x)}`;
    if (schoolDay < 6) {
      schoolDay += 1;
    } else {
      schoolDay = 0;
    }
  }
}
change();
