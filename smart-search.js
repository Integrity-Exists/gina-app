function smartNavigate(query) {
  query = query.toLowerCase().trim();

  const routes = {
    "custody": "custody.html",
    "family": "custody.html",
    "eviction": "eviction.html",
    "housing": "eviction.html",
    "dss": "dss.html",
    "defense": "dss.html",
    "records": "records.html",
    "criminal": "records.html",
    "liberties": "liberties.html",
    "due process": "liberties.html",
    "remedies": "remedies.html",
    "incarcerated": "remedies.html",
    "arrested": "arrested.html",
    "arrest": "arrested.html",
    "estate": "estate.html",
    "will": "estate.html",
    "parole": "remedies.html",
    "probation": "remedies.html",
    "reentry": "reentry.html",
    "resources": "resources.html"
  };

  for (const keyword in routes) {
    if (query.includes(keyword)) {
      window.location.href = routes[keyword];
      return;
    }
  }

  alert("Sorry, Sage didn’t catch that. Try a different keyword.");
}
function smartNavigate(query) {
  query = query.toLowerCase().trim();

  const routes = {
    "custody": "custody.html",
    "family": "custody.html",
    "eviction": "eviction.html",
    "housing": "eviction.html",
    "dss": "dss.html",
    "defense": "dss.html",
    "records": "records.html",
    "criminal": "records.html",
    "liberties": "liberties.html",
    "due process": "liberties.html",
    "remedies": "remedies.html",
    "incarcerated": "remedies.html",
    "arrested": "arrested.html",
    "arrest": "arrested.html",
    "estate": "estate.html",
    "will": "estate.html",
    "parole": "remedies.html",
    "probation": "remedies.html",
    "reentry": "reentry.html",
    "resources": "resources.html"
  };

  for (const keyword in routes) {
    if (query.includes(keyword)) {
      window.location.href = routes[keyword];
      return;
    }
  }

  alert("Sorry, Sage didn’t catch that. Try a different keyword.");
}
