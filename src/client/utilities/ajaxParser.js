
import {ShowError} from "./showErrors";
import {receivedData} from "../Actions/flightAction";

export function AjaxParse(store, res, cause, status, saltParams) {
    switch (cause) {
        case 'FLIGHT_DATA':
        store.dispatch(receivedData(res));
        break;
        default:
        ShowError(store, cause, status);
        break;
    }
}
