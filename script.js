var value;
var statevalue;
var stateelm;
var elm;
var cityelm;
const arr = [
  { name: "select" },
  {
    name: "c-1",
    number1: "1",
    states: [
      { name: "select" },
      { name: "punjab", cities: ["Lahore", "Gujrat", "Bahawalpur", "multan"] },
      { name: "sindh", cities: ["haiderabad", "karachi", "larkana"] },
    ],
  },
  {
    name: "c-2",
    number1: "2",
    states: [
      { name: "select" },
      {
        name: "state 1 ",
        cities: [
          "c-2 state 1 city 1",
          "c-2 state 1 city 2",
          "c-2 state 1 city 3",
          "c-2 state 1 city 4",
          "c-2 state 1 city 5",
          "c-2 state 1 city 6",
        ],
      },
      {
        name: "state 2 ",
        cities: [
          "c-2 state 2 city 1",
          "c-2 state 2 city 2",
          "c-2 state 2 city 3",
          "c-2 state 2 city 4",
          "c-2 state 2 city 5",
          "c-2 state 2 city 6",
        ],
      },
      {
        name: "state 3 ",
        cities: [
          "c-2 state 3 city 1",
          "c-2 state 3 city 2",
          "c-2 state 3 city 3",
          "c-2 state 3 city 4",
          "c-2 state 3 city 5",
          "c-2 state 3 city 6",
        ],
      },
      {
        name: "state 4 ",
        cities: [
          "c-2 state 4 city 1",
          "c-2 state 4 city 2",
          "c-2 state 4 city 3",
          "c-2 state 4 city 4",
          "c-2 state 4 city 5",
          "c-2 state 4 city 6",
        ],
      },
    ],
  },
  {
    name: "c-3",
    number1: "3",
    states: [
      { name: "select" },
      {
        name: "	state 1",
        cities: [
          "c-3 state 1 city 1",
          "c-3 state 1 city 2",
          "c-3 state 1 city 3",
          "c-3 state 1 city 4",
          "c-3 state 1 city 5",
          "c-3 state 1 city 6",
        ],
      },
      {
        name: "state 2",
        cities: [
          "c-3 state 2 city 1",
          "c-3 state 2 city 2",
          "c-3 state 2 city 3",
          "c-3 state 2 city 4",
          "c-3 state 2 city 5",
          "c-3 state 2 city 6",
        ],
      },
      {
        name: "State 3",
        cities: [
          "c-3 state 3 city 1",
          "c-3 state 3 city 2",
          "c-3 state 3 city 3",
          "c-3 state 3 city 4",
          "c-3 state 3 city 5",
          "c-3 state 3 city 6",
        ],
      },
      {
        name: "state 4",
        cities: [
          "c-3 state 4 city 1",
          "c-3 state 4 city 2",
          "c-3 state 4 city 3",
          "c-3 state 4 city 4",
          "c-3 state 4 city 5",
          "c-3 state 4 city 6",
        ],
      },
    ],
  },
  {
    name: "c-4",
    number1: "4",
    states: [
      { name: "select" },
      {
        name: "	state 1",
        cities: [
          "c-4 state 1 city 1",
          "c-4 state 1 city 2",
          "c-4 state 1 city 3",
          "c-4 state 1 city 4",
          "c-4 state 1 city 5",
          "c-4 state 1 city 6",
        ],
      },
      {
        name: "state 2",
        cities: [
          "c-4 state 2 city 1",
          "c-4 state 2 city 2",
          "c-4 state 2 city 3",
          "c-4 state 2 city 4",
          "c-4 state 2 city 5",
          "c-4 state 2 city 6",
        ],
      },
      {
        name: "state 3",
        cities: [
          "c-4 state 3 city 1",
          "c-4 state 3 city 2",
          "c-4 state 3 city 3",
          "c-4 state 3 city 4",
          "c-4 state 3 city 5",
          "c-4 state 3 city 6",
        ],
      },
      {
        name: "state 4",
        cities: [
          "c-4 state 4 city 1",
          "c-4 state 4 city 2",
          "c-4 state 4 city 3",
          "c-4 state 4 city 4",
          "c-4 state 4 city 5",
          "c-4 state 4 city 6",
        ],
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  elm = document.getElementById("countries");
  var df = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.appendChild(document.createTextNode(arr[i].name));
    df.appendChild(option);
  }
  elm.appendChild(df);
});
// updating state
function updateValuesState() {
  statevalue = document.getElementById("countries").value;

  if (statevalue != 0) {
    stateelm = document.getElementById("states");
    stateelm.innerHTML = "";
    var sdf = document.createDocumentFragment();
    for (let i = 0; i < arr[statevalue].states.length; i++) {
      var soption = document.createElement("option");
      soption.value = i;
      soption.appendChild(
        document.createTextNode(arr[statevalue].states[i].name)
      );
      sdf.appendChild(soption);
    }
    stateelm.appendChild(sdf);
  } else alert("select a country");
}
// nupdating the third city
function updateValuesCity() {
  let cityvalue = document.getElementById("states").value;

  cityelm = document.getElementById("cities");
  cityelm.innerHTML = "";
  var cdf = document.createDocumentFragment();
  for (let i = 0; i < arr[statevalue].states[cityvalue].cities.length; i++) {
    var coption = document.createElement("option");
    coption.cityvalue = i;

    coption.appendChild(
      document.createTextNode(arr[statevalue].states[cityvalue].cities[i])
    );
    cdf.appendChild(coption);
  }
  cityelm.appendChild(cdf);
}
