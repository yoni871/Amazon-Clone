const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(
        fn(req, res, next)
    ).catch(next);
}

export default asyncHandler;

// When a code crashes inside async function
// doesn't know what to do with that error unless
// we write try/catch everytime.
