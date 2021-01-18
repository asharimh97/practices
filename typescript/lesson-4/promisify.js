var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function promisify(f) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            function callback(result) {
                resolve(result);
            }
            args.push(callback);
            f.call.apply(f, __spreadArrays([null], args));
        });
    };
}

const addAsync = (x, y, cb) => cb(x, y);

var addProm = promisify(addAsync);
addProm(1, 2).then(function (x) { return console.log(x); });
