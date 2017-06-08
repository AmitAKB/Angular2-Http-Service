"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var UserDetailsComponent = (function () {
    function UserDetailsComponent(_userService) {
        this._userService = _userService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserService()
            .subscribe(function (resUserData) { return _this.userDetails = resUserData; });
    };
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=userDetails.component.js.map