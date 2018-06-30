

import {AjaxParse} from '../utilities/ajaxParser';
import {ShowError} from '../utilities/showErrors';


const ajaxMiddleware=(function(){ 

  return store=> next=> action=> {
    switch(action.type) {

        case 'AJAX_CALL':

       var params=action.params;
      
       var formData = params.formdata || params || null,httpData;
    
       var httpRequest=new XMLHttpRequest();
      
      httpRequest.onreadystatechange=function(xhr){
        if (httpRequest.readyState=== XMLHttpRequest.DONE) {
                 try
                 {
                    let  decodedString= httpRequest.responseType==="arraybuffer"? String.fromCharCode.apply(null, new Uint8Array(httpRequest.response)):httpRequest.response;
                    var response= decodedString ? JSON.parse(decodedString,httpRequest.status) : decodedString;
                    AjaxParse(store,response,params.cause,httpRequest.status);          
                 }
                 catch(e)
                 {
                   if(!response){
                    ShowError(store,params.cause,httpRequest.status);
                   }
                   throw e;
                 } 
                 
                   
      }
    };
    httpRequest.onerror=function (err){
               ShowError(store,params.cause,httpRequest.status);
    }

    httpRequest.open(params.method, params.url);

    httpRequest.send(httpData);
    break;

    default:
    return next(action);
  }
}

})();

export default ajaxMiddleware