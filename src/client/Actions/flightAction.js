
export function makeAjaxCall(params){
    return {
        type: 'AJAX_CALL',
        params
    }
}
export function receivedData(data){
    return {
        type: 'RECEIVE_FLIGHT_DATA',
        data
    }
}

