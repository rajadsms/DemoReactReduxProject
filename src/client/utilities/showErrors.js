export function ShowError(store,cause,status,response)
{
    console.log('In Error utility');
	switch(status)
	{
		case 400:
          	console.log('Getting 400')
            break;
            default:
            console.log('Default 400')
    }
}
