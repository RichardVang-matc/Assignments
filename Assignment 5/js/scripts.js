(function() {
  var data = [
    {
      name: 'emmet',
      description: 'Emmet is the number one code snippet tool',
      author: 'emmetio',
      url: 'https://atom.io/packages/emmet',
      downloads: 1662209,
      stars: 2534,
      selector: 'p1'
    },
    {
      name: 'atom-beautify',
      description: 'The atom-beautify will clean up your code',
      author: 'Glavin001',
      url: 'https://atom.io/packages/atom-beautify',
      downloads: 4228040,
      stars: 4541,
      selector: 'p2'
    },
    {
      name: 'Ask Stack',
      description: 'Ask Stack gives quick access to code samples',
      author: 'Chris911',
      url: 'https://atom.io/packages/ask-stack',
      downloads: 48128,
      stars: 260,
      selector: 'p3'
    },
    {
      name: 'git-blame',
      description: 'Toggle git-blame annotations in the Atom gutter',
      author: 'alexcorre',
      url: 'https://atom.io/packages/git-blame',
      downloads: 163998,
      stars: 385,
      selector: 'p4'
    },
    {
      name: 'Git-Plus',
      description: 'Provides shortcuts to use git actions without terminal',
      author: 'akonwi',
      url: 'https://atom.io/packages/git-plus',
      downloads: 1888983,
      stars: 2453,
      selector: 'p5'
    },
    {
      name: 'git-time-machine',
      description: 'Displays timeline of coding process in Atom',
      author: 'littlebee',
      url: 'https://atom.io/packages/git-time-machine',
      downloads: 291603,
      stars: 955,
      selector: 'p6'
    },
    {
      name: 'Linter',
      description: 'A base linter that relies on subpackages for specific languages',
      author: 'steelbrain',
      url: 'https://atom.io/packages/linter',
      downloads: 4429813,
      stars: 4137,
      selector: 'p7'
    },
    {
      name: 'language-liquid',
      description: 'Impliments syntax highlighting for liquid in Atom',
      author: 'puranjayjain',
      url: 'https://atom.io/packages/language-liquid',
      downloads: 32592,
      stars: 76,
      selector: 'p8'
    },
    {
      name: 'Project Manager',
      description: 'Provides quick access for switching between Atom projects',
      author: 'danielbrodin',
      url: 'https://atom.io/packages/project-manager',
      downloads: 789781,
      stars: 2083,
      selector: 'p9'
    },
    {
      name: 'Highlight Selected',
      description: 'Helps to highlight current words selected on double click',
      author: 'richrace',
      url: 'https://atom.io/packages/highlight-selected',
      downloads: 1049911,
      stars: 2745,
      selector: 'p10'
    },
  ];

  function package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
      return this.downloads.toLocaleString();
    }

    this.getFormattedStars = function() {
      return this.stars.toLocaleString();
    }
  }

  // date
var getTodaysDate = function() {
  var today = new Date();
  return today.toDateString();
};

  // load packages and write info to page
var getEl = function (id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
  var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();

  /**
   * Write package data one-by-one or with a for loop.
   * Remember to comment out the one you don't use.
   */

  // Write package data one-by-one
  var emmet = new Package(data[0]);
  writePackageInfo(emmet);

  var beautify = new Package(data[1]);
  writePackageInfo(beautify);

  var askStack = new Package(data[2]);
  writePackageInfo(askStack);

  var gitBlame = new Package(data[3]);
  writePackageInfo(gitBlame);

  var gitPlus = new Package(data[4]);
  writePackageInfo(gitPlus);

  var gitTimeMachine = new Package(data[5]);
  writePackageInfo(gitTimeMachine);

  var linter = new Package(data[6]);
  writePackageInfo(linter);

  var languageLiquid = new Package(data[7]);
  writePackageInfo(languageLiquid);

  var projectManager = new Package(data[8]);
  writePackageInfo(projectManager);

  var highlightSelected = new Package(data[9]);
  writePackageInfo(highlightSelected);


}());
