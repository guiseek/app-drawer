export class UserProfileElement extends HTMLElement {
  static observedAttributes = ['user']

  connectedCallback() {
    this.innerHTML = `
			<img />
			<h3></h3>
		`
  }

  setUserProfile(user: string) {
    const img = this.querySelector('img')
    const h3 = this.querySelector('h3')

    this.buscaPerfil(user).then((user) => {
      if (img) img.src = user.avatar_url
      if (h3) h3.innerText = user.name
    })
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    if (name === 'user') this.setUserProfile(next)
  }

  async buscaPerfil(user: string) {
    return fetch(`https://api.github.com/users/${user}`).then((response) =>
      response.json()
    )
  }
}
customElements.define('user-profile', UserProfileElement, {extends: 'figure'})
