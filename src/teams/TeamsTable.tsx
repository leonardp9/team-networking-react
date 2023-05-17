import { type } from "os";
import "./style.css";
import React from "react";
import { deleteTeamRequest, getTeamsRequest } from "./middleware";
type Team = {
  id: string;
  name: string;
  promotion: string;
  url: string;
  members: string;
};
type Props = {
  loading: boolean;
  teams: Team[];
  team: Team;
};
type Actions = {
  deleteTeam(id: string): void;
  save(): void;
  inputChange(name: string, value: string): void;
};

export function TeamsTable(props: Props & Actions) {
  console.warn("props", props);
  return (
    <form
      id="editForm"
      action=""
      method="post"
      className={props.loading ? "loading-mask" : ""}
      onSubmit={e => {
        e.preventDefault();
        props.save();
      }}
    >
      <table>
        <colgroup>
          <col span={1} style={{ width: "40px" }} />
          <col span={1} style={{ width: "125px" }} />
          <col span={1} />
          <col span={1} />
          <col span={1} />
          <col span={1} style={{ width: "80px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(({ id, url, promotion, members, name }) => {
            let displayURL = url;
            return (
              <tr key={id}>
                <td>
                  <input type="checkbox" name="selected" value={id} />
                </td>
                <td>{promotion}</td>
                <td>{members}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank">
                    {displayURL}
                  </a>
                </td>
                <td>
                  <a
                    className="link-btn"
                    onClick={() => {
                      props.deleteTeam(id);
                    }}
                  >
                    ✖
                  </a>
                  <a data-id={id} className="link-btn">
                    &#9998;
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                name="promotion"
                placeholder="Enter Promotion"
                required
                value={props.team.promotion}
                onChange={e => {
                  props.inputChange("promotion", e.target.value);
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="members"
                placeholder="Enter members"
                required
                value={props.team.members}
                onChange={e => {
                  console.warn("changed");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Enter project name"
                required
                value={props.team.name}
                onChange={e => {
                  console.warn("changed");
                }}
              />
            </td>
            <td>
              <input
                type="text"
                name="url"
                placeholder="Enter URL"
                required
                value={props.team.url}
                onChange={e => {
                  console.warn("changed");
                }}
              />
            </td>
            <td>
              <button type="submit">💾</button>
              <button type="reset">✖</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = {
  loading: boolean;
  teams: Team[];
  team: Team;
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    console.warn("wrapper props", props);
    this.state = {
      loading: true,
      teams: [],
      team: {
        id: "",
        name: "",
        promotion: "",
        url: "",
        members: ""
      }
    };
  }

  componentDidMount(): void {
    this.loadTeams();
  }

  async loadTeams() {
    const teams = await getTeamsRequest();

    // this.state.loading = false; // not  working as in readonly
    this.setState({
      loading: false,
      teams: teams
    });
  }

  render() {
    // return TeamsTable({
    //   teams: teams
    // });
    return (
      <TeamsTable
        teams={this.state.teams}
        loading={this.state.loading}
        team={this.state.team}
        deleteTeam={async id => {
          console.warn("din funtie delete", id);
          const status = await deleteTeamRequest(id);
          console.warn("status", status);
          this.loadTeams();
        }}
        save={() => {
          const team = {};

          console.warn("todo list n");
        }}
        inputChange={(name: string, value: string) => {
          console.warn("%o changed to %o", name, value);
          this.setState(state => {
            console.warn("state", state);
            return {
              team: {
                ...state.team,
                promotion: value
              }
            };
          });
        }}
      />
    );
  }
}
