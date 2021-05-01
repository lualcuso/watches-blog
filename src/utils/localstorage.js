const localStorageUtil = {
    get: () => {
        return JSON.parse(localStorage.getItem('local-entries')) || [];
    },
    post: (entry) => {
        const localEntries = JSON.parse(localStorage.getItem('local-entries')) || [];
        localEntries.push(entry);
        localStorage.setItem('local-entries', JSON.stringify(localEntries));
    }
}

export default localStorageUtil;