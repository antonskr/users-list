class Card {
  constructor(user) {
      this.user = user;
      this.fields = this.extractFields();
      this.element = document.createElement('div');
      this.element.classList.add('card');
      this.element.innerHTML = this.createFieldElements();
  }

  extractFields() {
      return {
          name: this.user.name,
          username: this.user.username,
          phone: this.user.phone,
          email: this.user.email,
          city: this.user.address.city,
      };
  }

  createFieldElements() {
      return Object.keys(this.fields).map(field => `
          <div class="card__${field}">
              <span class="card__label">${field}:</span>
              <span class="card__${field}__value">${this.fields[field]}</span>
          </div>
      `).join('');
  }

  setUserField(field, value) {
      const fieldElement = this.element.querySelector(`.card__${field}__value`);
      if (fieldElement) {
          fieldElement.innerHTML = value;
      }
  }

  highlightMatch(text, searchTerm) {
      const regex = new RegExp(`(${searchTerm})`, 'i');
      return text.replace(regex, '<strong class="highlight">$1</strong>');
  }

  render(searchTerm = '') {
      if (searchTerm) {
          Object.keys(this.fields).forEach(field => {
              const value = this.fields[field];
              const highlightedValue = this.highlightMatch(value, searchTerm);
              this.setUserField(field, highlightedValue);
          });
      }
      return this.element;
  }
}

export default Card;
