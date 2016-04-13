function QueryMiddleware (fn, errFn) {
    var self = this;
    return function (err, data) {
        if (!err) {
            fn(data);
        } else {
            if (_.isUndefined(errFn)) {
                self.defaultQueryErrHandler(err);
            } else {
                errFn(err);
            }
        }
    }
}

QueryMiddleware.defaultQueryErrHandler =  function (res, err) {
    res.status(500).send(err);
};




module.exports = QueryMiddleware;