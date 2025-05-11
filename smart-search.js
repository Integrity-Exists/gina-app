const topics = [
  { keyword: "custody", page: "custody.html" },
  { keyword: "eviction", page: "eviction.html" },
  { keyword: "records", page: "records.html" },
  { keyword: "dss", page: "dss.html" },
  { keyword: "liberties", page: "liberties.html" },
  { keyword: "estate", page: "estate.html" },
  { keyword: "remedies", page: "remedies.html" },
  { keyword: "arrested", page: "arrested.html" },
  { keyword: "resources", page: "resources.html" },
  { keyword: "parole", page: "remedies.html" }
];

// Simple Levenshtein distance
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(input) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = Infinity;

  topics.forEach(t => {
    const score = levenshtein(input, t.keyword);
    if (score < bestScore && score <= 3) {
      bestMatch = t;
      bestScore = score;
    }
  });

  return bestMatch;
}

function smartNavigate(input) {
  const match = fuzzyMatch(input);
  if (match) window.location.href = match.page;
  updateSuggestions(input);
}

function updateSuggestions(input) {
  const suggestionsBox = document.getElementById("smartSuggestions");
  suggestionsBox.innerHTML = "";

  if (!input) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = topics.filter(t =>
    t.keyword.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.keyword;
    li.style.padding = "10px";
    li.style.cursor = "pointer";
    li.onmouseover = () => (li.style.background = "#f0f0f0");
    li.onmouseout = () => (li.style.background = "white");
    li.onclick = () => (window.location.href = t.page);
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = "block";
}

// Voice Recognition
function startVoiceSearch() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("smartSearch").value = transcript;
    smartNavigate(transcript);
  };

  recognition.onerror = (event) => {
    alert("Voice recognition error: " + event.error);
  };
}
const topics = [
  { keyword: "custody", page: "custody.html" },
  { keyword: "eviction", page: "eviction.html" },
  { keyword: "records", page: "records.html" },
  { keyword: "dss", page: "dss.html" },
  { keyword: "liberties", page: "liberties.html" },
  { keyword: "estate", page: "estate.html" },
  { keyword: "remedies", page: "remedies.html" },
  { keyword: "arrested", page: "arrested.html" },
  { keyword: "resources", page: "resources.html" },
  { keyword: "parole", page: "remedies.html" }
];

// Simple Levenshtein distance
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(input) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = Infinity;

  topics.forEach(t => {
    const score = levenshtein(input, t.keyword);
    if (score < bestScore && score <= 3) {
      bestMatch = t;
      bestScore = score;
    }
  });

  return bestMatch;
}

function smartNavigate(input) {
  const match = fuzzyMatch(input);
  if (match) window.location.href = match.page;
  updateSuggestions(input);
}

function updateSuggestions(input) {
  const suggestionsBox = document.getElementById("smartSuggestions");
  suggestionsBox.innerHTML = "";

  if (!input) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = topics.filter(t =>
    t.keyword.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.keyword;
    li.style.padding = "10px";
    li.style.cursor = "pointer";
    li.onmouseover = () => (li.style.background = "#f0f0f0");
    li.onmouseout = () => (li.style.background = "white");
    li.onclick = () => (window.location.href = t.page);
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = "block";
}

// Voice Recognition
function startVoiceSearch() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("smartSearch").value = transcript;
    smartNavigate(transcript);
  };

  recognition.onerror = (event) => {
    alert("Voice recognition error: " + event.error);
  };
}
const topics = [
  { keyword: "custody", page: "custody.html" },
  { keyword: "eviction", page: "eviction.html" },
  { keyword: "records", page: "records.html" },
  { keyword: "dss", page: "dss.html" },
  { keyword: "liberties", page: "liberties.html" },
  { keyword: "estate", page: "estate.html" },
  { keyword: "remedies", page: "remedies.html" },
  { keyword: "arrested", page: "arrested.html" },
  { keyword: "resources", page: "resources.html" },
  { keyword: "parole", page: "remedies.html" }
];

// Simple Levenshtein distance
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(input) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = Infinity;

  topics.forEach(t => {
    const score = levenshtein(input, t.keyword);
    if (score < bestScore && score <= 3) {
      bestMatch = t;
      bestScore = score;
    }
  });

  return bestMatch;
}

function smartNavigate(input) {
  const match = fuzzyMatch(input);
  if (match) window.location.href = match.page;
  updateSuggestions(input);
}

function updateSuggestions(input) {
  const suggestionsBox = document.getElementById("smartSuggestions");
  suggestionsBox.innerHTML = "";

  if (!input) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = topics.filter(t =>
    t.keyword.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.keyword;
    li.style.padding = "10px";
    li.style.cursor = "pointer";
    li.onmouseover = () => (li.style.background = "#f0f0f0");
    li.onmouseout = () => (li.style.background = "white");
    li.onclick = () => (window.location.href = t.page);
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = "block";
}

// Voice Recognition
function startVoiceSearch() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("smartSearch").value = transcript;
    smartNavigate(transcript);
  };

  recognition.onerror = (event) => {
    alert("Voice recognition error: " + event.error);
  };
}
const topics = [
  { keyword: "custody", page: "custody.html" },
  { keyword: "eviction", page: "eviction.html" },
  { keyword: "records", page: "records.html" },
  { keyword: "dss", page: "dss.html" },
  { keyword: "liberties", page: "liberties.html" },
  { keyword: "estate", page: "estate.html" },
  { keyword: "remedies", page: "remedies.html" },
  { keyword: "arrested", page: "arrested.html" },
  { keyword: "resources", page: "resources.html" },
  { keyword: "parole", page: "remedies.html" }
];

// Simple Levenshtein distance
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(input) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = Infinity;

  topics.forEach(t => {
    const score = levenshtein(input, t.keyword);
    if (score < bestScore && score <= 3) {
      bestMatch = t;
      bestScore = score;
    }
  });

  return bestMatch;
}

function smartNavigate(input) {
  const match = fuzzyMatch(input);
  if (match) window.location.href = match.page;
  updateSuggestions(input);
}

function updateSuggestions(input) {
  const suggestionsBox = document.getElementById("smartSuggestions");
  suggestionsBox.innerHTML = "";

  if (!input) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = topics.filter(t =>
    t.keyword.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.keyword;
    li.style.padding = "10px";
    li.style.cursor = "pointer";
    li.onmouseover = () => (li.style.background = "#f0f0f0");
    li.onmouseout = () => (li.style.background = "white");
    li.onclick = () => (window.location.href = t.page);
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = "block";
}

// Voice Recognition
function startVoiceSearch() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("smartSearch").value = transcript;
    smartNavigate(transcript);
  };

  recognition.onerror = (event) => {
    alert("Voice recognition error: " + event.error);
  };
}
const topics = [
  { keyword: "custody", page: "custody.html" },
  { keyword: "eviction", page: "eviction.html" },
  { keyword: "records", page: "records.html" },
  { keyword: "dss", page: "dss.html" },
  { keyword: "liberties", page: "liberties.html" },
  { keyword: "estate", page: "estate.html" },
  { keyword: "remedies", page: "remedies.html" },
  { keyword: "arrested", page: "arrested.html" },
  { keyword: "resources", page: "resources.html" },
  { keyword: "parole", page: "remedies.html" }
];

// Simple Levenshtein distance
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      );
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(input) {
  input = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = Infinity;

  topics.forEach(t => {
    const score = levenshtein(input, t.keyword);
    if (score < bestScore && score <= 3) {
      bestMatch = t;
      bestScore = score;
    }
  });

  return bestMatch;
}

function smartNavigate(input) {
  const match = fuzzyMatch(input);
  if (match) window.location.href = match.page;
  updateSuggestions(input);
}

function updateSuggestions(input) {
  const suggestionsBox = document.getElementById("smartSuggestions");
  suggestionsBox.innerHTML = "";

  if (!input) {
    suggestionsBox.style.display = "none";
    return;
  }

  const matches = topics.filter(t =>
    t.keyword.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  matches.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.keyword;
    li.style.padding = "10px";
    li.style.cursor = "pointer";
    li.onmouseover = () => (li.style.background = "#f0f0f0");
    li.onmouseout = () => (li.style.background = "white");
    li.onclick = () => (window.location.href = t.page);
    suggestionsBox.appendChild(li);
  });

  suggestionsBox.style.display = "block";
}

// Voice Recognition
function startVoiceSearch() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById("smartSearch").value = transcript;
    smartNavigate(transcript);
  };

  recognition.onerror = (event) => {
    alert("Voice recognition error: " + event.error);
  };
}
