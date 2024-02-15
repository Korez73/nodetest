export class UserService {

    async getUsersAsync() {
        return new Promise((resolve, reject) => {
            resolve([{userId: 100}, {userId: 101}])
        });
    }
    
}