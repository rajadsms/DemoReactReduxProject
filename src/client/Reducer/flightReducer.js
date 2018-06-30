
export  function flightDataObj(state={},action){
    switch (action.type) {
        case 'RECEIVE_FLIGHT_DATA':
            return Object.assign({}, state,
                { 
                    "flightData" : action.data.flight
                  })
        default:
            return state
    }
}
