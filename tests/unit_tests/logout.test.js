const { logout } = require('../../src/js/api/auth/logout');
const storage = require('../../src/js/storage');

jest.mock('../../src/js/storage', () => ({
    save: jest.fn(),
    load: jest.fn(),
    remove: jest.fn(),
}));

describe('Logout function', () => {
    it('should remove the access token from browser storage', () => {
        logout();
        expect(storage.remove).toHaveBeenCalledWith('token');
        expect(storage.remove).toHaveBeenCalledWith('profile');
    });
});
