import { Component, Element, Event, EventEmitter, Host, Listen, Method, h } from '@stencil/core';
import dialogPolyfill from 'dialog-polyfill';

@Component({
  tag: 'app-dialog',
  styleUrl: 'app-dialog.css',
  shadow: true,
})
export class AppDialog {
  @Element() host: HTMLElement;
  @Event({  eventName: 'close' }) closer: EventEmitter;
  private dialog: HTMLDialogElement;

  @Listen('click', { capture: true })
  handleCancel(event) {
    const el = (event as MouseEvent).composedPath()[0] as Element;
    if (el.classList.contains('backdrop')) {
      event.stopPropagation();
      this.close("reject");
    }
  }

  @Method()
  async close(retVal) {
    return this.dialog?.close(retVal);
  }

  handleClose(e) {
    const value = e?.target.returnValue || e?.currentTarget.returnValue || "reject";
    console.debug(e?.type,value);
    this.closer.emit(value);
  }

  componentDidRender() {
    const d = this.dialog;
    dialogPolyfill.registerDialog(d);
    if (!d.open) { d.showModal() }
  }

  attributes() {
    return Object.fromEntries(Array.from(this.host.getAttributeNames?.call(this.host) ?? []).map( (name:string) => [name,this.host.getAttribute(name)] ));
  }

  hasChildren() {
    return this.host.children && this.host.children.length > 0;
  }

  render() {
    const { class:classNames, ...attrs } = this.attributes();
    return (
      <Host>
        <dialog class={`${classNames} fixed`} {...attrs} ref={el => this.dialog = el as HTMLDialogElement} onClose={this.handleClose.bind(this)}>
          <form method="dialog" onSubmit={ev=>console.log(ev)} id="dialogid">
            <slot>
              {this.hasChildren() || <button type="submit">Continue</button>}
            </slot>
          </form>
        </dialog>
      </Host>
    );
  }

}
