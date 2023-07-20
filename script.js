// Fetch and display events from API
async function getEvents() {
  let eventSection = document.getElementById("events");

  let response = await fetch("/api/events");
  let events = await response.json();

  events.forEach((event) => {
    let eventDiv = createEventDiv(event);
    eventSection.appendChild(eventDiv);
  });
}

function createEventDiv(event) {
  // Create div for event
  let div = document.createElement("div");
  div.classList.add("event");

  let h3 = document.createElement("h3");
  h3.textContent = event.name;

  let p = document.createElement("p");
  p.textContent = event.description;

  let button = document.createElement("button");
  button.textContent = "Learn More";

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(button);

  return div;
}

getEvents();
