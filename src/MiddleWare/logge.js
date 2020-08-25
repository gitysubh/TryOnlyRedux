export const logger = state => next => action => {
    console.log(`Logging action by middleware ${action.type}`);
    next(action);
}