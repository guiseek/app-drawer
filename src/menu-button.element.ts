export class MenuButtonElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<input type="checkbox" id="menu-check" hidden />
			<label id="menu-button" for="menu-check">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					height="32px"
					width="32px"
					fill="#FFFFFF"
				>
					<path d="M0,0h24v24H0V0z" fill="none" />
					<path
						d="M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z"
					/>
				</svg>
			</label>
		`

    const input = this.querySelector('input')

    if (input) {
      input.onchange = () => {
        this.setAttribute('aria-checked', input.checked ? 'true' : 'false')
      }
    }
  }
}
customElements.define('menu-button', MenuButtonElement)
