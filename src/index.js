import './index.css';

import {getUsers, delete_project} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(projects => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${projects.id}" class="delete_project">Delete</a></td>
      <td>${projects.admin}</td>
      <td>${projects.vacancy}</td>
      </tr>`
  });

  global.document.getElementById('projectsID').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('delete_project');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      delete_project(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
