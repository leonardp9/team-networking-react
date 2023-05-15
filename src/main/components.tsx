import { SideMenu } from "../menu/SideMenu";
import { TeamsTable } from "../teams/TeamsTable";
export function ContentWrapper() {
  return (
    <section id="content">
      <SideMenu />

      <div id="main">
        <div className="page" id="home">
          HOME content...
        </div>
        <div className="page" id="skills">
          <h2>Skills & Endorcements</h2>
          <ul></ul>
        </div>
        <div className="page" id="teams" style={{ display: "block" }}>
          <h2>Teams</h2>
          <TeamsTable />
        </div>
        <div className="page" id="languages">
          <h2>Known Languages</h2>
          <table>
            <thead>
              <tr>
                <th>Language</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Romanian</td>
                <td>Native or bilingual proficiency</td>
              </tr>
              <tr>
                <td>English</td>
                <td>Professional working proficiency</td>
              </tr>
              <tr>
                <td>Italian</td>
                <td>Elementary proficiency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
