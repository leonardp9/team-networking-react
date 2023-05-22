import { Team } from "./models";

export function getTeamsRequest(): Promise<Team[]> {
  return fetch("http://localhost:3000/teams-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(r => {
      return r.json();
    })
    .catch(err => {
      console.warn("failed to fetch", err);
    });
}

export function createTeamRequest(team: Team) {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

export function deleteTeamRequest(
  id: string,
  successDelete?: (status: { success: boolean }) => void
): Promise<{ success: boolean }> {
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  })
    .then(r => r.json())
    .then(status => {
      console.warn("before remove ", status);
      if (typeof successDelete === "function") {
        const r = successDelete(status);
        console.info("raspuns", r);
      }
      return status;
    });
}

export function updateTeamRequest(team: Team) {
  return fetch("http://localhost:3000/teams-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}
