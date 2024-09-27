import Card from './Card.js';
import Filter from './Filter';
import { debounce } from '../utils';

class UserManager {
    constructor(users) {
        this.users = users;
        this.usersContainer = document.getElementById('users-container');
        this.filterInput = document.getElementById('filter-input');
    }

    renderUser(user, searchTerm) {
        const card = new Card(user);
        return card.render(searchTerm);
    }

    renderUsers(users, searchTerm = '') {
        this.usersContainer.innerHTML = '';

        users.forEach(user => {
            const userElement = this.renderUser(user, searchTerm);
            this.usersContainer.appendChild(userElement);
        });
    }

    setupFilter() {
        const filter = new Filter(this.users);

        this.filterInput.addEventListener('input', debounce((e) => {
            const value = e.target.value;
            const filteredUsers = filter.filter(value);
            this.renderUsers(filteredUsers, value);
        }, 300));
    }

    initialize() {
        this.renderUsers(this.users);
        this.setupFilter();
    }
}

export default UserManager;
