"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var UserListComponent = (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserService()
            .subscribe(function (resUserData) { return _this.userDetails = resUserData; });
    };
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userList.component.js.map