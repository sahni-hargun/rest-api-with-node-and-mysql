const connection = require('./connection');

async function getCouncilMembers() {
    return new Promise((resolve, reject) => {
        connection.query('Select * from jediCouncil', (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function getCouncilMemberById(id) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM jediCouncil where id = ?',[id], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
} 

function addCouncilMember(firstName, lastName) {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO jediCouncil (firstName, lastName) VALUES (?, ?)', [firstName, lastName], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function editCouncilMember(id, firstName, lastName) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE jediCouncil SET firstName = (?), lastName = (?) where id = (?)', [firstName, lastName, id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function removeCouncilMember(id) {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM jediCouncil WHERE id = (?)', [id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

module.exports = {
    getCouncilMembers,
    getCouncilMemberById,
    addCouncilMember,
    editCouncilMember,
    removeCouncilMember
};