import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('projects');
}

export function delete_project(id) {
		console.log("Console thistpp")
  return del(`projects/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {

  const request = new Request(baseUrl + url, {
    method: 'DELETE'
}, 	  	console.log("Console this " + baseUrl + url)

);

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
