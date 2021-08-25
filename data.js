const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFirstName = () => {
  const firstNames = [
    'Alessandro',
    'Alexandru',
    'Camillo',
    'Cristian',
    'Cristina',
    'Damiano',
    'Daniele',
    'Davide',
    'Edoardo',
    'Elena',
    'Eliana',
    'Federica',
    'Francesco',
    'Giorgio',
    'Giuseppe',
    'Leonardo',
    'Loris',
    'Manuel',
    'Marco',
    'Marilena',
    'Michal',
    'Michele',
    'Mirko',
    'Pasquale',
    'Rabab',
    'Riccardo',
    'Rocco',
    'Sara',
    'Serxio',
    'Simone',
    'Valentina',
  ];

  return firstNames[getRandomNumber(0, firstNames.length - 1)];
};

const getRandomLastName = () => {
  const lastNames = [
    'Faggiano',
    'Merenda',
    'Vivsenco',
    'Lancellotti',
    'Pisanu',
    'Boncompagni',
    'Corrado',
    'Landi',
    'Pipino',
    'Bortoloni',
    'Ruffi',
    'Durante',
    'Abate',
    'Di Chio',
    'Cina',
    'Andrei',
    'Pisani',
    'Locatelli',
    'Resmini',
    'Pirrone',
    'Cherubini',
    'Cantisani',
    'Wadowski',
    'Carbone',
    'Chiappori',
    'Raso',
    'Bohumala',
    'Girotti',
    'Pagni',
    'Franchini',
    'Cascone',
    'Pasinato',
    'Janko',
    'De Santis',
    'Di Muro',
    'Bilardo',
    'Frasca',
  ];
  return lastNames[getRandomNumber(0, lastNames.length - 1)];
};

const getRandomVotes = () => {
  const votes = [];
  for (let i = 0; i < 3; i++) {
    votes.push(getRandomNumber(2, 10));
  }
  return votes;
};

const students = [];
for (let i = 0; i < 27; i++) {
  const studente = {
    nome: getRandomFirstName(),
    cognome: getRandomLastName(),
    matricola: getRandomNumber(10000, 19999),
    voti: {
      italiano: getRandomVotes(),
      matematica: getRandomVotes(),
      inglese: getRandomVotes(),
      informatica: getRandomVotes(),
    },
  };
  students.push(studente);
}
