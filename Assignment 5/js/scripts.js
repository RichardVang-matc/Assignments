(function() {
var data = [
  {
    name: 'emmet',
    description: 'Emmet is the number one code snippet tool',
    author: 'emmetio',
    url: 'https://atom.io/packages/emmet',
    downloads: 1662209,
    stars: 2534
  },
  {
    name: 'atom-beautify',
    description: 'The atom-beautify will clean up your code',
    author: 'Glavin001',
    url: 'https://atom.io/packages/atom-beautify',
    downloads: 4228040,
    stars: 4541
  },
  {
    name: 'Ask Stack',
    description: 'Ask Stack gives quick access to code samples',
    author: 'Chris911',
    url: 'https://atom.io/packages/ask-stack',
    downloads: 48128,
    stars: 260
  },
  {
    name: 'git-blame',
    description: 'Toggle git-blame annotations in the Atom gutter',
    author: 'alexcorre',
    url: 'https://atom.io/packages/git-blame',
    downloads: 163998,
    stars: 385
  },
  {
    name: 'Git-Plus',
    description: 'Provides shortcuts to use git actions without terminal',
    author: 'akonwi',
    url: 'https://atom.io/packages/git-plus',
    downloads: 1888983,
    stars: 2453
  },
  {
    name: 'git-time-machine',
    description: 'Displays timeline of coding process in Atom',
    author: 'littlebee',
    url: 'https://atom.io/packages/git-time-machine',
    downloads:291603,
    stars: 955
  },
  {
    name: 'Linter',
    description: 'A base linter that relies on subpackages for specific languages',
    author: 'steelbrain',
    url:'https://atom.io/packages/linter',
    downloads:4429813,
    stars: 4137
  },
  {
    name:'language-liquid',
    description: 'Impliments syntax highlighting for liquid in Atom',
    author:'puranjayjain',
    url:'https://atom.io/packages/language-liquid',
    downloads: 32592,
    stars: 76
  },
  {
    name:'Project Manager',
    description:'Provides quick access for switching between Atom projects',
    author:'danielbrodin',
    url:'https://atom.io/packages/project-manager',
    downloads: 789781,
    stars: 2083
  },
  {
    name:'Highlight Selected',
    description:'Helps to highlight current words selected on double click',
    author:'richrace',
    url:'https://atom.io/packages/highlight-selected',
    downloads: 1049911,
    stars: 2745
  },
];

function package(data) {
  this.name = data.name;
  this.description = data.description;
  this.author = data.author;
  this.url = data.url;
  this.downloads = data.downloads;
  this.stars = data.stars;

  this.getFormattedDownloads = function () {
    return this.downloads.toLocaleString();
  }

  this.getFormattedStars = function () {
    return this.stars.toLocaleString();
  }
}

// date
var today = new Date();
var dateEL = document.getElementById('date');
dataEl.textContent = today.toDateString();

// load packages and write info to page



}());
