import './styles/user-list.scss';
import { getUsers } from './api';
import UserManager from './components/UserManager';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await getUsers();
        const userManager = new UserManager(users);
        userManager.initialize();
    } catch (error) {
        console.error('error');
    }
});
