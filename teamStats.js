const team = {
    _players: [
    {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 34
    },
    {
    firstName: 'James',
    lastName: 'Williams',
    age: 32
    },
    {
    firstName: 'Carlos',
    lastName: 'Mazuera',
    age: 33
    },
  ],
    _games: [
    {
    opponent: 'Broncos',
    teamPoints: 30,
    opponentPoints: 67
    },
    {
    opponent: 'Wolves',
    teamPoints: 34,
    opponentPoints: 23
    },
    {
    opponent: 'Lions',
    teamPoints: 27,
    opponentPoints: 40
    }
  
  ],
  
  get players(){
        return this._players;
      },
  get games(){
        return this._games;
      },
  
  addPlayer(firstName, lastName, age) {
     const player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
  this.games.push(game);
    }
    }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players)
  
  team.addGame('Titans', 55, 30);
  team.addGame('Oakland', 40, 60);
  team.addGame('Patriots', 89, 45);
  console.log(team.games)