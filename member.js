function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'];
    var skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    for (let i = 0; i < skills.length; i++) {
        var skill = document.createElement('li');
        skill.innerHTML = skills[i];
        skillsList.appendChild(skill);
    }
}