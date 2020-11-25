import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  @Prop() selection: string = "";

  handleSelectRole(_event,name){
    this.selection = name;
  }

  render() {
    return (
      <div class="app-home">
        <app-dialog>
          <select onChange={(event) => this.handleSelectRole(event,name)}>
            <option value="" selected={this.selection==""} disabled hidden>Roles</option>
            <optgroup label="Roles">
              <option value="admin" selected={this.selection=="admin"}>admin</option>
              <option value="user" selected={this.selection=="user"}>user</option>
            </optgroup>
          </select>
        </app-dialog>
      </div>
    );
  }
}
