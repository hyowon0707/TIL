function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther", "Iron man"];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}
