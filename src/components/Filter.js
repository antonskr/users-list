class Filter {
    constructor(users) {
        this.users = users;
    }

    filter(query) {
        const lowerQuery = query.toLowerCase();
        
        return this.users.filter(user => {
            return Object.keys(user).some(key => {
                if (typeof user[key] === 'object' && user[key] !== null) {
                    return Object.values(user[key]).some(value => 
                        value.toString().toLowerCase().includes(lowerQuery)
                    );
                }
                return user[key].toString().toLowerCase().includes(lowerQuery);
            });
        });
    }
}

export default Filter;