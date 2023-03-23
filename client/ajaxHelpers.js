// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2301-FTB-ET-WEB-AM";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error(`Error: couldn't fetch from ${APIURL}players`, error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`);
    const result = await response.json();

    return result.data.player;
  } catch (error) {
    console.error(
      `Error: couldnt fetch from ${APIURL}players/${playerId}`,
      error
    );
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });

    const result = await response.json();
  } catch (error) {
    console.error("Error: could not submit player");
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`, {
      method: "DELETE",
    });

    const result = await response.json();
  } catch (error) {
    console.error("Error: could not remove");
  }
};
