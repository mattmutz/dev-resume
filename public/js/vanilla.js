console.log('vanilla');
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
document.addEventListener('DOMContentLoaded', async function() {
    let gotCookies =  getCookie('capiche');
    if(!gotCookies){
        await delay(750);
        document.getElementById('cookie-consent').classList.remove('invisible');
        var bar=document.getElementById('yup');
        bar.addEventListener('click', function(){
            document.getElementById('cookie-consent').classList.add('invisible');
            document.cookie = 'capiche=capiche;';
        });
    }
  });

/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}